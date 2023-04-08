import React from 'react';
import Image from 'next/image';
import { IRegistros } from '../types/Types';
import SContainer, { ButtonStyled } from '../css/ListViewStyled';

export default function Item({ ...props }: IRegistros) {
  return (
    <SContainer>
      <div className="descricao" data-testid="listview-descricao">
        {props.descricao}
      </div>
      <div className={props.tipo === 'Entrada' ? 'green' : 'red'} data-testid="listview-valor">
        {Number(String(props.valor).replace(',', '.')).toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        })}
      </div>
      <div className="categoria" data-testid="listview-categoria">
        {props.categoria}
      </div>
      <ButtonStyled type="button" onClick={() => props.showForm?.(props._id)}>
        <Image src="/image/svg/editItem.svg" alt="editar" width={29} height={32} />
      </ButtonStyled>
      <ButtonStyled type="button">
        <Image
          src="/image/svg/iconTrash.svg"
          alt="excluir"
          onClick={() => props.deleteRegistro?.(props._id)}
          width={29}
          height={32}
        />
      </ButtonStyled>
    </SContainer>
  );
}
