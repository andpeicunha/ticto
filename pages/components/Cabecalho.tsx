import React from 'react';
import LogoTicto from 'public/image/LogoTicto';
import { FormCadastroProps } from './FormCadastro';
import HeaderContainer, {
  ButtonCadastro,
  FaixaRoxa,
  StyledLogo,
} from '../css/CabecalhoStyled';

export default function Header({ onClick }: FormCadastroProps) {
  return (
    <>
      <FaixaRoxa />
      <HeaderContainer>
        <StyledLogo data-testid="logotipo">
          <LogoTicto />
        </StyledLogo>
        <ButtonCadastro onClick={onClick} data-testid="botao-nova-transacao">
          Nova Transação
        </ButtonCadastro>
      </HeaderContainer>
    </>
  );
}
