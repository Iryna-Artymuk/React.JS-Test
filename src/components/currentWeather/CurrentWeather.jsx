import React from 'react';

import { useSelector } from 'react-redux';

import { getCities, getCurrentCity } from '../../redux/selectors';

import Card from '../card/Card';
import { StyledWeatherList } from './StyledCurrentWeather';

const CurrentWeather = () => {
  const cities = useSelector(getCities);
  const currentCity = useSelector(getCurrentCity);

  return (
    <StyledWeatherList>
      <Card data={currentCity} currentCity={true} />
      {cities?.map(city => (
        <Card key={city.id} data={city} />
      ))}
    </StyledWeatherList>
  );
};

export default CurrentWeather;
