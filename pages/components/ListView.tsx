import React from 'react';
import SContainer from '../css/ListViewStyled';
import { IRegistros } from './Lista';

export default function Item({ descricao, valor, categoria, onClick }: IRegistros) {
  return (
    <SContainer>
      <div>{descricao}</div>
      <div>{valor}</div>
      <div>{categoria}</div>
      <button type="button" onClick={onClick}>
        Editar
      </button>
      <button type="button">Excluir</button>
    </SContainer>
  );
}
