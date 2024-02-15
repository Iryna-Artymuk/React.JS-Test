import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { deleteCity } from '../../redux/citiesSlice';

import { formatDate } from '../../helpers/formatDate';
import { getStoreLanguage } from '../../redux/selectors';
import { convertTemperature } from '../../helpers/convertTemperature';

import {
  StyledAirMetrict,
  StyledCard,
  StyledCardWrapper,
  StyledCloseButton,
  StyledCondition,
  StyledDate,
  StyledFeelsTemp,
  StyledIcon,
  StyledIconWrapper,
  StyledName,
  StyledNameWrapper,
  StyledTemp,
  StyledTempIcon,
  StyledTempWrapper,
  StyledText,
  StyledWeatherWrapper,
} from './StyledCard';
import Forecast from '../forecast/Forecast';
import { getCurrentWeather } from '../../api';

const Card = ({ data, currentCity }) => {
  const [loading, setLoading] = useState(false);
  const currentLanguage = useSelector(getStoreLanguage);
  const [selectedTemp, setTelectedTemp] = useState('C');

  const [temp, setTemp] = useState();
  const [feelsTemp, setFeelsTemp] = useState();
  const [currentWeather, setCurrentWeather] = useState([]);
  const { main, name, weather, sys, wind, dt } = currentWeather;

  const dispatch = useDispatch();
  const { t } = useTranslation();

  // add city
  const handelClick = id => {
    dispatch(deleteCity(id));
  };

  // convert temp
  const handelTempChange = e => {
    let val = e.target.getAttribute('data-datatemp');
    setTelectedTemp(val);
  };

  useEffect(() => {
    const getWeather = async () => {
      try {
        const responce = await getCurrentWeather(
          data.coordinates?.lat,
          data.coordinates?.lng,
          currentLanguage.value
        );

        setCurrentWeather(responce.data);
      } catch (Error) {
        // setError(Error);
        console.log(Error.message);
      } finally {
        setLoading(false);
      }
    };
    getWeather();
  }, [data.coordinates?.lat, data.coordinates?.lng, currentLanguage?.value]);

  useEffect(() => {
    if (selectedTemp === 'F') {
      const convertTemp = convertTemperature(Math.floor(main?.temp));
      const convertFeelsTemp = convertTemperature(Math.floor(main?.temp));
      setTemp(convertTemp);
      setFeelsTemp(convertFeelsTemp);
    } else {
      if (Math.floor(main?.temp) > 0) {
        setTemp(`+${Math.floor(main?.temp)}`);
      } else {
        setTemp(Math.floor(main?.temp));
      }
      if (Math.floor(main?.feels_like) > 0) {
        setFeelsTemp(`+${Math.floor(main?.feels_like)}`);
      } else {
        setFeelsTemp(Math.floor(main?.feels_like));
      }
    }
  }, [selectedTemp, main?.temp, main?.feels_like]);

  return (
    <StyledCard>
      <StyledCardWrapper temp={Math.floor(main?.temp)}>
        {!loading && weather ? (
          <>
            {!currentCity && (
              <StyledCloseButton onClick={() => handelClick(data.id)}>
                <div></div>
                <div></div>
              </StyledCloseButton>
            )}

            <StyledNameWrapper>
              <StyledName>
                {name && (
                  <div>
                    <span> {name},</span>
                    <span> {sys?.country}</span>
                  </div>
                )}
                <StyledDate>{dt && formatDate(dt, currentLanguage)}</StyledDate>
              </StyledName>

              {weather?.map((item, index) => (
                <StyledCondition key={item.id}>
                  <StyledIcon
                    src={`https://openweathermap.org/img/w/${item.icon}.png`}
                    alt="wthr img"
                  />

                  <StyledText>{item.description}</StyledText>
                </StyledCondition>
              ))}
            </StyledNameWrapper>

            <Forecast temp={Math.floor(main?.temp)} data={data} />
            <StyledWeatherWrapper>
              <div>
                <StyledTempWrapper>
                  <StyledTemp>{temp}</StyledTemp>
                  <StyledIconWrapper>
                    <StyledTempIcon
                      selectedTemp={selectedTemp}
                      onClick={handelTempChange}
                      data-datatemp="C"
                    >
                      °C
                    </StyledTempIcon>
                    <StyledTempIcon
                      selectedTemp={selectedTemp}
                      onClick={handelTempChange}
                      data-datatemp="F"
                    >
                      °F
                    </StyledTempIcon>
                  </StyledIconWrapper>
                </StyledTempWrapper>
                <StyledFeelsTemp>
                  {t('weather.feelsLike')}:
                  <span>
                    {feelsTemp} °{selectedTemp}
                  </span>
                </StyledFeelsTemp>
              </div>

              <StyledAirMetrict temp={Math.floor(main?.temp)}>
                <div>
                  <span> {t('weather.wind')}: </span>
                  <span>{wind?.speed} m/s</span>
                </div>
                <div>
                  <span>{t('weather.humidity')}: </span>
                  <span>{main?.humidity}%</span>
                </div>
                <div>
                  <span>{t('weather.pressure')}: </span>
                  <span> {main?.pressure}Pa</span>
                </div>
              </StyledAirMetrict>
            </StyledWeatherWrapper>
          </>
        ) : (
          <div>{t('loading')}</div>
        )}
      </StyledCardWrapper>
    </StyledCard>
  );
};

export default Card;
