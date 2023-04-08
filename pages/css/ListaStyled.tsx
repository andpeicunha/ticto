import styled from 'styled-components';
import THEME from './ThemeStyled';

const ItemList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

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
export default ItemList;
