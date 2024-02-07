import { styled } from 'styled-components';
export const StyledForecastWrapper = styled.div`
  width: 320px;
  height: 51px;
  background: ${prop => {
    if (prop.temp < 0) {
      return prop.theme.colors.forecast_BG_cold;
    } else {
      return prop.theme.colors.forecast_BG_hot;
    }
  }};
  margin: 17px 0;
`;
