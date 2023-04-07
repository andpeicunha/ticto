import React from 'react';
import Image from 'next/image';
import Entradas, { BalanceItens, Saidas, Saldo } from '../css/BalanceStyled';

interface SomaTotais {
  totalEntradas: number;
  totalSaidas: number;
}

export default function Balance({ totalEntradas, totalSaidas }: SomaTotais) {
  const totalEntradasFormatado = totalEntradas.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
  const totalSaidasFormatado = totalSaidas.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  const saldo = totalEntradas - totalSaidas;
  const totalFormatado = saldo.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  return (
    <BalanceItens>
      <Entradas>
        <span className="title">
          Entradas
          <Image
            src="/image/icon-feather-arrow-green.svg"
            alt=""
            height={12}
            width={12}
          />
        </span>
        <span className="value">{totalEntradasFormatado}</span>
      </Entradas>
      <Saidas>
        <span className="title">
          Saídas
          <Image
            src="/image/icon-feather-arrow-red.svg"
            alt=""
            height={12}
            width={12}
          />
        </span>
        <span className="value">{totalSaidasFormatado}</span>
      </Saidas>
      <Saldo
        className={saldo < 0 ? 'negativo' : ''}
        data-testid="balance-saldo"
      >
        <span className="title" data-testid="title-balance-saldo">
          Saldo
        </span>
        <span className="value" data-testid="value-balance-saldo">
          {totalFormatado}
        </span>
      </Saldo>
    </BalanceItens>
  );
}
