import styled from 'styled-components';

import { THEME } from '@/pages/css/ThemeStyled';

export const FormBox = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: auto;
  padding: 15px;

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
    padding-left: 10px;

    ::placeholder {
      color: ${THEME.colors.cinza300};
      padding: 10px;
    }

    :hover::placeholder {
      visibility: hidden;
    }
  }

  form {
    width: 100%;
  }

  .title {
    width: 100%;
    margin-bottom: 10px;

    font-size: 1.1rem;
    font-weight: 600;
    text-align: left;
    color: ${THEME.colors.cinza700};
  }

  .bt-fechar {
    position: absolute;
    top: 5px;
    right: 5px;
    height: 23px;
    width: 23px;

    font-family: ${THEME.fonts.familyRoboto};
    color: ${THEME.colors.cinza700};
    font-size: 0.7rem;
    font-weight: 600;
    text-align: center;

    border: none;
    border-radius: 50%;
    background-color: transparent;

    cursor: pointer;
    :hover {
      background-color: ${THEME.colors.cinza100};
      font-size: 1rem;
    }
  }

  @media ${THEME.media.mobile} {
    width: 90vw;
    height: 50vh;
  }

  @media ${THEME.media.tablet} {
    width: 50vw;
    height: 50vh;
    input {
      height: 40px;
    }
  }

  @media ${THEME.media.desktop} {
    width: 45vw;
    height: 45vh;
    input {
      height: 45px;
    }
  }

  @media ${THEME.media.desktopXl} {
    width: 40vw;
    height: 40vh;
    input {
      height: 50px;
    }
  }
`;

export const ErrorMsg = styled.div`
  width: 100%;
  padding: 5px 5px 5px 10px;
  border-radius: 8px;
  font-size: 0.8rem;
  font-weight: 600;
  color: ${THEME.colors.red400} !important;
  background-color: ${THEME.colors.red100};
`;

export const ButtonTipo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  align-items: center;
  width: 100%;
  margin: 5px 0;

  button {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 40px;
    margin: 0px;
    border: 1px solid ${THEME.colors.cinza300};
    border-radius: 5px;
    background-color: ${THEME.colors.branco};
    color: ${THEME.colors.cinza300};

    img {
      opacity: 0.6;
      margin-right: 10px;
      height: 17px;
      width: 17px;
    }

    &#Entrada {
      margin-right: 4px;
      &.active {
        background-color: ${THEME.colors.green100};
        font-size: 0.9rem;
        font-weight: 600;
        color: ${THEME.colors.green500};
        border-color: ${THEME.colors.green500};
        img {
          opacity: 1;
        }
      }
    }
    &#Saida {
      margin-left: 4px;
      &.active {
        font-size: 0.9rem;
        font-weight: 600;
        color: ${THEME.colors.red400};
        background-color: ${THEME.colors.red100};
        border-color: ${THEME.colors.red400};

        img {
          opacity: 1;
        }
      }
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
  cursor: pointer;

  :hover {
    background-color: ${THEME.colors.roxo500};
  }
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
