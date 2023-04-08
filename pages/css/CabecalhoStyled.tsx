import THEME from '@/pages/css/ThemeStyled';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 130px;
  padding: 0 ${THEME.spacing.large}rem;
  z-index: 10;

  @media ${THEME.media.mobile} {
    flex-direction: column;
    justify-content: space-around;
    padding: ${THEME.spacing.large}px;
  }

  @media ${THEME.media.tablet} {
    padding: 0 ${THEME.spacing.xxSmall}rem;
  }

  @media ${THEME.media.desktop} {
    padding: 0 ${THEME.spacing.small}rem;
  }

  @media ${THEME.media.desktopXl} {
    padding: 0 ${THEME.spacing.medium}rem;
  }
`;
export default HeaderContainer;

export const StyledLogo = styled.div`
  width: 186px;
  height: 34px;
  svg {
    width: 100%;
    height: 100%;
  }
  @media ${THEME.media.mobile} {
    margin-bottom: 15px;
  }
`;

export const ButtonCadastro = styled.button`
  background-color: ${THEME.colors.roxo700};
  border: none;
  border-radius: 8px;
  width: 245px;
  height: 53px;

  font-size: ${THEME.fonts.sizeMedium};
  font-weight: 500;
  letter-spacing: 0px;
  text-transform: uppercase;
  color: ${THEME.colors.cinza300};
  cursor: pointer;
  :hover {
    background-color: ${THEME.colors.roxo500};
  }

  @media ${THEME.media.mobile} {
    width: 160px;
    padding: 12px 10px;
    font-size: 12px;
  }
`;

export const FaixaRoxa = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${THEME.colors.roxo900};
  z-index: 0;

  @media ${THEME.media.mobile} {
    height: 320px;
  }

  @media ${THEME.media.tablet} {
    height: 160px;
  }

  @media ${THEME.media.desktop} {
    height: 160px;
  }
`;
