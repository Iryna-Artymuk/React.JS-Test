import { styled } from 'styled-components';

export const StylesWrapper = styled.div`
  width: 100%;
  gap: 16px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;
export const StylesSearchWrapper = styled.div`
  width: 100%;
  max-width: 569px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  input {
    width: 100%;
    height: 40px;
    font-size: 14px;
    box-shadow: ${({ theme }) => theme.colors.input_shadow};
    border: none;
    border-radius: 5px;
  }
`;
export const StylesContentWrapper = styled.div`
  width: 100%;
  max-width: 569px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  box-shadow: ${({ theme }) => theme.colors.card_text};
`;
export const StyledSuggestionsList = styled.ul`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  box-shadow: ${({ theme }) => theme.colors.input_shadow};
`;
