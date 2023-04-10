import React from 'react';

import { render } from '@testing-library/react';
import { Header } from '../pages/components/Cabecalho';
import LogoTicto from '../public/image/LogoTicto';

describe('COMPONENTE HEADER', () => {
  it('VALIDA SE RENDERIZOU O LOGOTIPO, O BOTÃO NOVA TRANSAÇÃO E O BACKGROUND', () => {
    const { getByTestId } = render(<Header onClick={() => {}} />);
    const logotipo = getByTestId('logotipo');
    const botao = getByTestId('botao-nova-transacao');
    const faixaRoxa = getByTestId('faixa-roxa');

    expect(logotipo).toBeInTheDocument();
    expect(botao).toBeInTheDocument();
    expect(faixaRoxa).toBeInTheDocument();
  });
});
