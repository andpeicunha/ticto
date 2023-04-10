import styled from 'styled-components';

import { THEME } from './ThemeStyled';

export const ItemList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0 5%;

  .full {
    grid-column: 1/-1;
    text-align: center;
  }
  .categoria,
  .data {
    visibility: visible;
  }

  @media ${THEME.media.mobile} {
    .grid {
      grid-template-columns: 55% auto 0 0 14%;
    }

    .categoria,
    .data {
      visibility: hidden;
    }
  }

  @media ${THEME.media.tablet} {
    .grid {
      grid-template-columns: 33% 15% 24% auto 7%;
    }
    padding: 0 ${THEME.spacing.xxSmall}rem;
  }

  @media ${THEME.media.desktop} {
    .grid {
      grid-template-columns: 33% 17% 21% auto 6%;
    }
    padding: 0 ${THEME.spacing.small}rem;
  }

  @media ${THEME.media.desktopXl} {
    .grid {
      grid-template-columns: 33% 17% 21% auto 6%;
    }
    padding: 0 ${THEME.spacing.medium}rem;
  }
`;

export const ItemListTitulo = styled.div`
  display: grid;
  width: 100%;

  margin-top: 15px;
  padding-left: 5px;

  color: ${THEME.colors.cinza300};
  font-size: 0.9rem;
`;
