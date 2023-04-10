import styled from 'styled-components';

import { THEME } from '@/pages/css/ThemeStyled';

export const BalanceItens = styled.div`
  position: relative;
  width: 100%;
  height: 100px;
  padding: 0 ${THEME.spacing.xxSmall}rem;

  display: flex;
  flex-direction: row;
  justify-content: space-around;
  z-index: 50;

  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 8px;
    padding: 8px 15px;
  }
  #space {
    width: 7% !important;
    padding: 0 !important;
    background-color: transparent;
  }
  .load {
    font-size: 1rem !important;
  }
  .negativo {
    background-color: ${THEME.colors.red400};
  }
  .value {
    font-size: 1.75rem;
    font-weight: 400;
    font-family: ${THEME.fonts.familyPoppins};
  }
  .title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 0.8rem;
  }

  @media ${THEME.media.mobile} {
    padding: 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: auto;
    #space {
      visibility: hidden;
      width: 0 !important;
      height: 0 !important;
      padding: 0 !important;
    }

    div {
      height: 70px;
      width: 90%;
      margin: 2px 0;
    }
  }

  @media ${THEME.media.desktop} {
    padding: 0 ${THEME.spacing.small}rem;
  }
  @media ${THEME.media.desktopXl} {
    padding: 0 ${THEME.spacing.medium}rem;
    .value {
      font-size: 1.9rem;
    }
  }
`;

export const Entradas = styled.div`
  background-color: ${THEME.colors.branco};
  color: ${THEME.colors.cinza700};
`;

export const Saidas = styled.div`
  background-color: ${THEME.colors.branco};
`;

export const Saldo = styled.div`
  background-color: ${THEME.colors.green500};
  color: ${THEME.colors.branco};
`;
