import { styled } from 'styled-components';

export const StyledCard = styled.div`
  position: relative;
  width: 350px;
  height: 257px;
  background-color: ${({ theme }) => theme.colors.card_BG_hot};
  color: ${({ theme }) => theme.colors.card_text};
  box-shadow: ${({ theme }) => theme.colors.card_shadow};
  border-radius: 5px;
`;

export const StyledCloseButton = styled.button`
  // burger

  position: absolute;
  top: 5px;
  right: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 1rem;
  height: 1rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10000;

  div {
    width: 10px;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.closeButton_BG};

    transition: all 0.3s linear;
    position: relative;
    transform-origin: 0px;

    &:first-child {
      transform: rotate(45deg);
    }

    &:nth-child(2) {
      transform: rotate(-45deg);
    }
  }
`;
