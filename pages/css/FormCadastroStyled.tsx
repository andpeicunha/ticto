import styled from 'styled-components';
import THEME from '@/pages/css/ThemeStyled';

const FormContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  z-index: 200;
`;
export default FormContainer;

export const FormBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50vw;
  height: 50vh;
  background-color: ${THEME.colors.branco};
  border-radius: 8px;
  opacity: 1;
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
