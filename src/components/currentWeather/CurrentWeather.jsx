import React from 'react';

import { useSelector } from 'react-redux';

import { getCities } from '../../redux/selectors';

import Card from '../card/Card';
import { StyledWeatherList } from './StyledCurrentWeather';

const CurrentWeather = () => {
  const cities = useSelector(getCities);
  console.log('cities: ', cities);

  return (
    <>
      {cities?.length > 0 && (
        <StyledWeatherList>
          {cities?.map(city => (
            <Card key={city.id} data={city} />
          ))}
        </StyledWeatherList>
      )}
    </>
  );
};

export default CurrentWeather;
