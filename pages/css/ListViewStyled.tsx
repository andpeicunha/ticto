import styled from 'styled-components';
import THEME from '@/pages/css/ThemeStyled';

const SContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 3rem;
  width: 80%;
  max-width: 1196px;

  background-color: ${THEME.colors.branco};
  border-radius: 8px;
  margin: 10px 0;

  @media ${THEME.media.mobile} {
    width: 95%;
  }
`;
export default SContainer;

export const ItemList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
`;
