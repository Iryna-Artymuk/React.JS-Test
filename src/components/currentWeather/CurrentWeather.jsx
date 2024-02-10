import React, { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';

import { getCities, getCurrentCity } from '../../redux/selectors';

import Card from '../card/Card';
import { StyledWeatherList } from './StyledCurrentWeather';

const CurrentWeather = () => {
  const cities = useSelector(getCities);
  const currentCity = useSelector(getCurrentCity);
  const [loading, setLoading] = useState(false);

  const getLoadingValue = value => {
    setLoading(value);
  };
  useEffect(() => {
    getLoadingValue();
  }, [cities]);
  return (
    <>
      {!loading ? (
        <StyledWeatherList>
          <Card data={currentCity} currentCity={true} />
          {cities?.map(city => (
            <Card key={city.id} data={city} />
          ))}
        </StyledWeatherList>
      ) : (
        <p>loading...</p>
      )}
    </>
  );
};

export default CurrentWeather;
