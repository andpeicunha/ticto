import React, { useCallback, useMemo, useState } from 'react';

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import debug from 'debug';

import { IRegistros } from '../types/Types';
import { ItemList, ItemListTitulo } from '../css/ListaStyled';

import { Header } from './Cabecalho';
import { Balance } from './Balance';
import { FormCadastro } from './FormCadastro';
import { Item } from './ListView';

export function List() {
  const queryClient = useQueryClient();
  const [formVisible, setFormVisible] = useState(false);
  const [somaEntradas, setSomaEntradas] = useState(0);
  const [somaSaidas, setSomaSaidas] = useState(0);
  const [itemIdForm, setItemIdForm] = useState('');

  const { data: registros, isLoading } = useQuery<IRegistros[]>(['Registros'], async () => {
    const response = await fetch('/api/MongoDB');
    const data = await response.json();
    return data.cadastros;
  });

  const deleteRegistro = useMutation(
    async (_id: string) => {
      const response = await fetch(`/api/MongoDB/?id=${_id}`, { method: 'DELETE' });
      const data = await response.json();
      return data;
    },
    {
      onSuccess: () => {
        debug('Registro excluído com sucesso');
        queryClient.invalidateQueries({ queryKey: ['Registros'] });
      },
    },
  );

  const { mutate: createRegistro } = useMutation(
    async (novoRegistro: IRegistros) => {
      const response = await fetch('/api/MongoDB', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(novoRegistro),
      });
      return response.json();
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['Registros'] });
        setFormVisible(false);
      },
    },
  );

  const handleSubmitFormCreate = async (novoRegistro: IRegistros) => {
    createRegistro(novoRegistro);
  };

  useMemo(() => {
    const valoresPositivos = registros?.filter((item) => item.tipo === 'Entrada');
    const soma = valoresPositivos?.reduce(
      (acumulador, item) => acumulador + Number(item.valor.replace(',', '.')),
      0,
    );
    const somaNumber = Number(soma);
    setSomaEntradas(somaNumber);
  }, [registros]);

  useMemo(() => {
    const valores = registros?.filter((item) => item.tipo === 'Saida');
    const soma = valores?.reduce(
      (acumulador, item) => acumulador + Number(item.valor.replace(',', '.')),
      0,
    );
    const somaNumber = Number(soma);
    setSomaSaidas(somaNumber);
  }, [registros]);

  const showForm = useCallback(
    (_id?: string) => {
      setFormVisible(true);
      setItemIdForm(_id || '');
    },
    [setFormVisible],
  );

  const hideForm = useCallback(() => {
    setFormVisible(false);
  }, [setFormVisible]);

  const handleDelete = useCallback(
    (_id?: string) => {
      deleteRegistro.mutate(_id || '');
    },
    [deleteRegistro],
  );

  return (
    <>
      <Header onClick={showForm} />

      <Balance
        totalEntradas={somaEntradas >= 0 ? somaEntradas : 0}
        totalSaidas={somaSaidas >= 0 ? somaSaidas : 0}
        isLoading={isLoading}
      />
      <ItemList>
        {isLoading ? (
          <ItemListTitulo>
            <div className="full">Carregando</div>
          </ItemListTitulo>
        ) : (
          <>
            {registros && registros?.length === 0 ? (
              <ItemListTitulo data-testid="title-table">
                <div className="full">Cadastre uma Nova Transação</div>
              </ItemListTitulo>
            ) : (
              <ItemListTitulo className="grid" data-testid="title-table">
                <div>Descrição</div>
                <div>Valor</div>
                <div className="categoria">Categoria</div>
                <div className="data">Data</div>
              </ItemListTitulo>
            )}
          </>
        )}

        {registros?.map((item: IRegistros) => (
          <Item
            key={item._id}
            id={item._id}
            descricao={item.descricao}
            valor={item.valor}
            categoria={item.categoria}
            tipo={item.tipo}
            showForm={() => showForm(item._id)}
            data={item.data}
            _id={item._id}
            deleteRegistro={() => handleDelete(item._id)}
          />
        ))}
      </ItemList>
      {formVisible && <FormCadastro onSubmit={handleSubmitFormCreate} onClick={hideForm} />}
    </>
  );
}
