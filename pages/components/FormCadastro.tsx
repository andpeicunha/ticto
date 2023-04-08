import React, { ChangeEvent, FormEvent, useState } from 'react';
import { BackgroundOpacity, ButtonEnviar, ButtonTipo, FormBox } from '../css/FormCadastroStyled';

export interface FormCadastroProps {
  onClick: () => void;
  itemIdForm?: string;
}

export default function FormCadastro({ onClick, itemIdForm }: FormCadastroProps) {
  const [descricao, setDescricao] = useState('');
  const [valor, setValor] = useState('');
  const [categoria, setCategoria] = useState('');
  const [tipo, setTipo] = useState('');

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
    try {
      const response = await fetch('/api/MongoDB', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          descricao,
          valor,
          categoria,
          tipo,
        }),
      });

      if (response.ok) {
        const novoRegistro = await response.json();
      } else {
      }
    } catch (error) {}
  };

  return (
    <>
      <FormBox onClick={() => {}}>
        <span className="title">
          {typeof itemIdForm === 'string'
            ? `Editar Transação | ${itemIdForm}`
            : 'Cadastrar Transação'}
        </span>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="descricao"
            id="descricao"
            placeholder="Descrição"
            onChange={handleDescricaoChange}
          />
          <input
            type="text"
            name="valor"
            id="valor"
            placeholder="Preço"
            onChange={handleValorChange}
          />

          <ButtonTipo>
            <button
              type="button"
              id="Entrada"
              className={tipo === 'Entrada' ? 'active' : ''}
              onClick={() => handleTipoChange('Entrada')}
            >
              Entrada
            </button>
            <button
              type="button"
              id="Saida"
              className={tipo === 'Saida' ? 'active' : ''}
              onClick={() => handleTipoChange('Saida')}
            >
              Saída
            </button>
          </ButtonTipo>

          <input
            name="categoria"
            id="categoria"
            placeholder="Categoria"
            onChange={handleCategoriaChange}
          />
          <ButtonEnviar type="submit" className="bt-cadastrar">
            {typeof itemIdForm === 'string' ? 'Salvar Alteração' : 'Cadastrar'}
          </ButtonEnviar>
        </form>
        <button type="button" onClick={onClick} className="bt-fechar">
          X
        </button>
      </FormBox>
      <BackgroundOpacity onClick={onClick} />
    </>
  );
}
