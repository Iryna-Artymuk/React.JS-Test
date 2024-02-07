import React from 'react';
import { StyledForecastWrapper } from './StyledForecast';

const Forecast = ({ temp }) => {
  return <StyledForecastWrapper temp={temp}></StyledForecastWrapper>;
};

export default Forecast;
