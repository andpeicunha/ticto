import styled from 'styled-components';
import THEME from '@/pages/css/ThemeStyled';

const SContainer = styled.div`
  z-index: 10;
  display: grid;
  align-items: center;

  height: 3rem;
  width: 100%;
  background-color: ${THEME.colors.branco};
  border-radius: 8px;
  margin: 10px 0;
  padding: 0 5px;

  color: ${THEME.colors.cinza700};
  font-family: ${THEME.fonts.familyPoppins};
  font-size: 0.8rem;

  .green {
    color: ${THEME.colors.green500};
    font-weight: 600;
  }
  .red {
    color: ${THEME.colors.red400};
    font-weight: 600;
  }

  @media ${THEME.media.mobile} {
    grid-template-columns: 48% auto 0 10% 10%;
    width: 90%;
    margin: 7px 0;
    .categoria {
      visibility: hidden;
    }
  }
  @media ${THEME.media.tablet} {
    grid-template-columns: 40% auto auto 7% 7%;
    font-size: 0.9rem;
    padding-left: 10px;
  }
  @media ${THEME.media.desktop} {
    grid-template-columns: 40% auto auto 7% 7%;
    font-size: 0.95rem;
    padding-left: 12px;
  }
`;
export default SContainer;

export const ButtonStyled = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  svg {
    background-color: transparent !important;
    border: 0px solid transparent !important;
  }

  @media ${THEME.media.mobile} {
    scale: 0.7;
  }

  @media ${THEME.media.tablet} {
    scale: 0.75;
  }
  @media ${THEME.media.desktop} {
    scale: 0.8;
  }
`;
