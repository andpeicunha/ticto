import styled from 'styled-components';
import THEME from '@/pages/css/ThemeStyled';

export const FormBox = styled.div`
  margin: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;

  background-color: ${THEME.colors.branco};
  border-radius: 8px;
  z-index: 200;

  input {
    width: 100%;
    height: 38px;
    margin: 5px 0;
    border-radius: 3px;
    border: 1px solid ${THEME.colors.cinza300};
    background-color: ${THEME.colors.cinza100};
    ::placeholder {
      color: ${THEME.colors.cinza300};
      padding: 10px;
    }
  }
  .title {
    width: 100%;
    font-size: 1.1rem;
    font-weight: 600;
    text-align: left;
    color: ${THEME.colors.cinza700};
  }

  .bt-fechar {
    position: absolute;
    top: 5px;
    right: 5px;
    font-family: ${THEME.fonts.familyPoppins};
    color: ${THEME.colors.cinza700};
    font-size: 0.6rem;
    font-weight: 600;
    text-align: center;
    border-radius: 50%;
    border: 1px solid ${THEME.colors.cinza300};
    height: 21px;
    width: 21px;
  }

  @media ${THEME.media.mobile} {
    width: 90vw;
    height: 50vh;
  }

  @media ${THEME.media.tablet} {
    width: 50vw;
    height: 50vh;
  }

  @media ${THEME.media.desktop} {
    width: 50vw;
    height: 50vh;
  }
`;

export const ButtonTipo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  button {
    width: 100%;
    height: 40px;
    margin: 0px;
    &#Entrada {
      margin-right: 4px;
    }
    &#Saida {
      margin-left: 4px;
    }
  }
`;

export const ButtonEnviar = styled.button`
  width: 100%;
  height: 40px;
  margin-top: 10px;
  background-color: ${THEME.colors.roxo700};
  color: ${THEME.colors.branco};
  font-size: 0.8rem;
  text-transform: uppercase;

  border: 1px solid ${THEME.colors.roxo700};
  border-radius: 5px;
`;

export const BackgroundOpacity = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: ${THEME.colors.cinza700};
  opacity: 0.8;
  z-index: 100;
  transition: opacity 0.3s ease-in-out;
`;
