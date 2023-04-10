import React, { ChangeEvent, FormEvent, useState } from 'react';

import Image from 'next/image';

import { CurrencyInput } from './inputs/Inputs';
import { IRegistros } from '../types/Types';
import { BackgroundOpacity, ButtonEnviar, ButtonTipo, FormBox } from '../css/FormCadastroStyled';

export interface FormCadastroProps {
  onClick: () => void;
  // eslint-disable-next-line react/require-default-props
  itemIdForm?: string;
  // eslint-disable-next-line react/require-default-props
  onSubmit?: (novoRegistro: IRegistros) => void;
}

export function FormCadastro({ onClick, itemIdForm = '', onSubmit = () => {} }: FormCadastroProps) {
  const [descricao, setDescricao] = useState('');
  const [valor, setValor] = useState('');
  const [categoria, setCategoria] = useState('');
  const [tipo, setTipo] = useState('');
  const [data, setData] = useState(String(new Date()));

  const handleDescricaoChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDescricao(event.target.value);
  };
  const handleValorChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValor(event.target.value);
  };
  const handleCategoriaChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCategoria(event.target.value);
  };
  const handleTipoChange = (tipoSelecionado: string) => {
    setTipo(tipoSelecionado);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (tipo === '') {
      alert('Selecione o Tipo Entrada ou Saída.');
      return;
    }
    const novoRegistro = {
      descricao,
      valor,
      categoria,
      tipo,
      data,
    };
    onSubmit?.(novoRegistro);
  };

  return (
    <>
      <FormBox onClick={() => {}}>
        <span className="title" data-testid="title-form-cadastro">
          Cadastrar Transação
        </span>

        <form onSubmit={handleSubmit}>
          <input
            required
            type="text"
            name="descricao"
            id="descricao"
            placeholder="Nome"
            onChange={handleDescricaoChange}
            data-testid="input-descricao"
          />
          <CurrencyInput
            required
            id="valor"
            placeholder="Preço"
            onChange={handleValorChange}
            data-testid="input-valor"
          />
          <ButtonTipo>
            <button
              type="button"
              id="Entrada"
              data-testid="bt-tipo-entrada"
              className={tipo === 'Entrada' ? 'active' : ''}
              onClick={() => handleTipoChange('Entrada')}
            >
              <Image src={'/image/icon-circle-green.png'} alt={''} height={20} width={20} /> Entrada
            </button>

            <button
              type="button"
              id="Saida"
              className={tipo === 'Saida' ? 'active' : ''}
              onClick={() => handleTipoChange('Saida')}
            >
              <Image src={'/image/icon-circle-red.png'} alt={''} height={20} width={20} /> Saída
            </button>
          </ButtonTipo>
          <input
            required
            name="categoria"
            id="categoria"
            data-testid="input-categoria"
            placeholder="Categoria"
            onChange={handleCategoriaChange}
          />

          <ButtonEnviar type="submit" className="bt-cadastrar" data-testid="bt-cadastrar">
            Cadastrar
          </ButtonEnviar>
        </form>

        <button type="button" onClick={onClick} className="bt-fechar" data-testid='bt-fechar'>
          X
        </button>
      </FormBox>
      <BackgroundOpacity onClick={onClick} />
    </>
  );
}
