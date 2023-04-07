import React from 'react';
import Image from 'next/image';
import { IRegistros } from '../types/Types';
import SContainer, { ButtonStyled } from '../css/ListViewStyled';

export default function Item({ descricao, valor, categoria, onClick, tipo }: IRegistros) {
  return (
    <SContainer>
      <div className="descricao" data-testid="listview-descricao">
        {descricao}
      </div>
      <div className={tipo === 'Entrada' ? 'green' : 'red'} data-testid="listview-valor">
        {Number(String(valor).replace(',', '.')).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
        {/* {Number(valor).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} */}
      </div>
      <div className="categoria" data-testid="listview-categoria">
        {categoria}
      </div>
      <ButtonStyled type="button" onClick={onClick}>
        <Image src="/image/svg/editItem.svg" alt="editar" width={29} height={32} />
      </ButtonStyled>
      <ButtonStyled type="button">
        <Image src="/image/svg/iconTrash.svg" alt="excluir" width={29} height={32} />
      </ButtonStyled>
    </SContainer>
  );
}
