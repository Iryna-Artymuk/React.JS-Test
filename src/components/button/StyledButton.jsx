import { styled } from 'styled-components';

export const StyledButton = styled.button`
  width: 112px;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.button_BG};
  color: ${({ theme }) => theme.colors.button_text};
  box-shadow: ${({ theme }) => theme.colors.button_shadow};
  border-radius: 5px;
`;
