import styled from 'styled-components';
import THEME from '@/pages/css/ThemeStyled';

export const BalanceItens = styled.div`
  position: relative;
  width: 100vw;
  height: 130px;
  padding: 0 ${THEME.spacing.xSmall}rem;

  display: flex;
  flex-direction: row;
  justify-content: space-around;
  z-index: 50;

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 8px;
    padding: 8px 15px;
  }
  .negativo {
    background-color: ${THEME.colors.red400};
  }
  .value {
    font-size: 1.45rem;
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

    div {
      height: 70px;
      width: 90%;
      margin: 5px 0;
    }
  }
`;

const Entradas = styled.div`
  background-color: ${THEME.colors.branco};
  color: ${THEME.colors.cinza700};
`;
export default Entradas;

export const Saidas = styled.div`
  background-color: ${THEME.colors.branco};
`;

export const Saldo = styled.div`
  background-color: ${THEME.colors.green500};
  color: ${THEME.colors.branco};
`;
