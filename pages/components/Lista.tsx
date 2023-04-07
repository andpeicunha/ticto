import React, { useCallback, useMemo, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import Header from './Cabecalho';
import Balance from './Balance';
import FormCadastro from './FormCadastro';
import Item from './ListView';
import { ItemList } from '../css/ListViewStyled';

export interface IRegistros {
  descricao: string;
  valor: string;
  categoria: string;
  tipo: string;
  _id: string;
  id?: string;
  onClick?: () => void;
}

export default function List() {
  const [formVisible, setFormVisible] = useState(false);
  const [somaEntradas, setSomaEntradas] = useState(0);
  const [somaSaidas, setSomaSaidas] = useState(0);

  const { data: registros } = useQuery<IRegistros[]>(
    ['Registros'],
    async () => {
      const response = await fetch('/api/MongoDB');
      const data = await response.json();
      return data.cadastros;
    },
  );

  useMemo(() => {
    const valoresPositivos = registros?.filter(
      (item) => item.tipo === 'Entrada',
    );
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

  const showForm = useCallback(() => {
    setFormVisible(true);
  }, [setFormVisible]);

  const hideForm = useCallback(() => {
    setFormVisible(false);
  }, [setFormVisible]);

  const handleClickForm = useCallback(() => {
    if (formVisible === false) {
      showForm();
    } else {
      hideForm();
    }
  }, [formVisible, showForm, hideForm]);

  return (
    <>
      <Header onClick={showForm} />
      <Balance
        totalEntradas={somaEntradas >= 0 ? somaEntradas : 0}
        totalSaidas={somaSaidas >= 0 ? somaSaidas : 0}
      />
      <ItemList>
        {registros?.map(
          (item: {
            _id: string;
            descricao: string;
            valor: string;
            categoria: string;
          }) => (
            <Item
              key={item._id}
              id={item._id}
              descricao={item.descricao}
              valor={item.valor}
              categoria={item.categoria}
              onClick={handleClickForm}
              tipo=""
              _id=""
            />
          ),
        )}
      </ItemList>
      {formVisible && <FormCadastro onClick={hideForm} />}
    </>
  );
}
