import React from 'react';

import Image from 'next/image';

// import LogoTicto from '/public/image/LogoTicto';

import { HeaderContainer, ButtonCadastro, FaixaRoxa, StyledLogo } from '../css/CabecalhoStyled';

import { FormCadastroProps } from './FormCadastro';

export function Header({ onClick }: FormCadastroProps) {
  return (
    <>
      <FaixaRoxa data-testid="faixa-roxa" />
      <HeaderContainer>
        <StyledLogo data-testid="logotipo">
          <Image
            src={'/image/logoTicto.png'}
            alt={'Logotipo Ticto'}
            height={69}
            width={372}
            priority
          />
        </StyledLogo>
        <ButtonCadastro onClick={onClick} data-testid="botao-nova-transacao">
          Nova Transação
        </ButtonCadastro>
      </HeaderContainer>
    </>
  );
}
