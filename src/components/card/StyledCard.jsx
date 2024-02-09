import { styled } from 'styled-components';

export const StyledCard = styled.li`
  position: relative;
  width: 100%;
  max-width: 350px;
  min-height: 257px;
`;
export const StyledCardWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: ${prop => {
    if (prop.temp < 0) {
      return prop.theme.colors.card_BG_cold;
    } else {
      return prop.theme.colors.card_BG_hot;
    }
  }};
  color: ${({ theme }) => theme.colors.card_text};
  box-shadow: ${({ theme }) => theme.colors.card_shadow};
  border-radius: 5px;
  padding: 10px 15px;
`;

export const StyledCloseButton = styled.button`
  // burger

  position: absolute;
  top: 5px;
  right: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
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
    transform-origin: -0.9px;

    &:first-child {
      transform: rotate(45deg);
      transform-origin: 0.1px;
    }

    &:nth-child(2) {
      transform: rotate(-45deg);
    }
  }
`;
export const StyledNameWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const StyledName = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 4px;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.4;
  letter-spacing: 0px;
  color: ${({ theme }) => theme.colors.card_text};
`;
export const StyledCondition = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const StyledIcon = styled.img`
  width: 50px;
  height: 50px;
`;
export const StyledText = styled.span`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.card_text_light};
`;
export const StyledDate = styled.div`
  font-size: 18px;
  line-height: 1.44;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.card_text};
`;

export const StyledWeatherWrapper = styled.div`
  width: 100%;
  display: flex;

  justify-content: space-between;
  align-items: center;
`;
export const StyledTempWrapper = styled.div`
  display: flex;
`;
export const StyledTemp = styled.div`
  height: 64px;
  font-size: 44px;
  line-height: 1.45;
`;
export const StyledIconWrapper = styled.div`
  display: flex;
`;
export const StyledTempIcon = styled.div`
  width: 21px;
  height: 32px;
  font-size: 22px;

  &:first-child {
    position: relative;

    color: ${props => {
      if (props.selectedTemp === 'C') {
        return props.theme.colors.card_temp_icon_dark;
      } else {
        return props.theme.colors.card_temp_icon_light;
      }
    }};
  }
  &:nth-child(2) {
    color: ${props => {
      if (props.selectedTemp === 'F') {
        return props.theme.colors.card_temp_icon_dark;
      } else {
        return props.theme.colors.card_temp_icon_light;
      }
    }};
    margin-left: 20px;
  }

  &:first-child::after {
    position: absolute;
    top: 2px;
    right: -10px;
    content: '';
    width: 1px;
    height: 23px;

    background: ${({ theme }) => theme.colors.card_temp_icon_light};
  }
`;
export const StyledFeelsTemp = styled.div`
  color: ${({ theme }) => theme.colors.card_text_light};
  font-size: 13px;
  line-height: 1.46;
`;
export const StyledAirMetrict = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  font-size: 12px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.card_text};
  div span:nth-child(2) {
    color: ${prop => {
      console.log('prop : ', prop);
      if (prop.temp < 0) {
        return prop.theme.colors.temp_air_cold;
      } else {
        return prop.theme.colors.temp_air_hot;
      }
    }};
  }
`;
