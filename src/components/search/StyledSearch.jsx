import { styled } from 'styled-components';

export const StylesWrapper = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: flex-start;
`;
export const StyledForm = styled.form`
  width: 100%;
  max-width: 569px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  margin-bottom: 10px;
  border-radius: 5px;

  input {
    width: 100%;
    height: 40px;
    font-size: 14px;
    border: none;
    font-family: inherit;
    color: ${({ theme }) => theme.colors.card_text};
    box-shadow: ${({ theme }) => theme.colors.input_shadow};
    -webkit-appearance: none;
    -webkit-box-shadow: ${({ theme }) => theme.colors.input_shadow};
    &::placeholder {
      color: ${({ theme }) => theme.colors.card_text_light};
    }

    padding: 5px;
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
  gap: 3px;
  box-shadow: ${({ theme }) => theme.colors.input_shadow};

  li {
    height: 23px;
    padding: 3px;
    font-size: 14px;
    overflow: hidden;
  }
`;
