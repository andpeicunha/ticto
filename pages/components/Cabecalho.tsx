import React from "react";
import HeaderContainer, { ButtonCadastro, FaixaRoxa, StyledLogo } from "../css/CabecalhoStyled";
import LogoTicto from "public/image/LogoTicto";
import { FormCadastroProps } from "./FormCadastro";

const Header: React.FC<FormCadastroProps> = (props) => {
  return (
    <>
      <FaixaRoxa />
      <HeaderContainer>
        <StyledLogo data-testid="logotipo">
          <LogoTicto />
        </StyledLogo>
        <ButtonCadastro onClick={props.onClick} data-testid="botao-nova-transacao">
          Nova Transação
        </ButtonCadastro>
      </HeaderContainer>
    </>
  );
};

export default Header;
