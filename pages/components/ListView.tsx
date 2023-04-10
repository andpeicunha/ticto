import React from 'react';
import Image from 'next/image';

import { IRegistros } from '../types/Types';
import { SContainer, ButtonStyled } from '../css/ListViewStyled';

export function Item({ ...props }: IRegistros) {
  const dataHora = new Date(props.data);
  const dataHoraFormatada =
    dataHora.toLocaleDateString('pt-BR') +
    ' às ' +
    dataHora.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });

  return (
    <SContainer className="grid">
      <div className="descricao" data-testid="listview-descricao">
        {props.descricao}
      </div>

      <div
        data-testid="listview-valor"
        className={props.tipo === 'Entrada' ? 'valor green' : 'valor red'}
      >
        {Number(String(props.valor).replace(',', '.')).toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        })}
      </div>

      <div className="categoria" data-testid="listview-categoria">
        {props.categoria}
      </div>

      <div className="data" data-testid="listview-date-insert">
        {dataHoraFormatada}
      </div>

      <ButtonStyled type="button" data-testid="excluir">
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
