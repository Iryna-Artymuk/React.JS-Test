import React, { useEffect, useState } from 'react';
import { StyledWeatherList } from './StyledCurrentWeather';
import Card from '../card/Card';
import { useSelector } from 'react-redux';
import { getCities } from '../../redux/selectors';
import { WEATHER_API_KEY, WEATHER_API_URL } from '../../api';

const CurrentWeather = () => {
  const cities = useSelector(getCities);
  return (
    <>
      {cities?.length > 0 && (
        <StyledWeatherList>
          {cities?.map(city => (
            <Card
              key={city.id}
              data={city}
            />
          ))}
        </StyledWeatherList>
      )}
    </>
  );
};

export default CurrentWeather;
