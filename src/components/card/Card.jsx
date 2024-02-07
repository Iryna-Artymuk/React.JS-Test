import React, { useEffect, useState } from 'react';
import {
  StyledCard,
  StyledCardWrapper,
  StyledCloseButton,
  StyledCondition,
  StyledDate,
  StyledIcon,
  StyledIconWrapper,
  StyledName,
  StyledNameWrapper,
  StyledTemp,
  StyledTempIcon,
  StyledTempWrapper,
  StyledText,
  StyledWeatherWrapper,
  StyledWind,
} from './StyledCard';
import { deleteCity } from '../../redux/citiesSlice';
import { useDispatch, useSelector } from 'react-redux';
import { WEATHER_API_KEY, WEATHER_API_URL } from '../../api';
import { formatDate } from '../../helpers/formatDate';
import { getStoreLanguage } from '../../redux/selectors';
import Forecast from '../forecast/Forecast';
import { convertTemperature } from '../../helpers/convertTemperature';

const Card = ({ data }) => {
  const currentLanguage = useSelector(getStoreLanguage);
  const [currentWeather, setCurrentWeather] = useState([]);
  const [loading, setloading] = useState(false);
  const [selectedTemp, setTelectedTemp] = useState('C');
  const [temp, setTemp] = useState();

  const { main, name, weather, sys, wind, dt } = currentWeather;
  const [forecast, setForecast] = useState(null);
  const dispatch = useDispatch();
  const handelClick = id => {
    console.log('id : ', id);
    dispatch(deleteCity(id));
  };
  const handelTempChange = e => {
    let val = e.target.getAttribute('data-dataTemp');
    setTelectedTemp(val);
  };
  useEffect(() => {
    if (selectedTemp === 'F') {
      const convertTemp = convertTemperature(Math.floor(main?.temp));
      setTemp(convertTemp);
    } else {
      if (Math.floor(main?.temp) > 0) {
        setTemp(`+${Math.floor(main?.temp)}`);
      } else {
        setTemp(Math.floor(main?.temp));
      }
    }
  }, [selectedTemp, main?.temp]);

  useEffect(() => {
    try {
      setloading(true);
      const currentWeatherFetch = fetch(
        `${WEATHER_API_URL}/weather?lat=${data.coordinates.lat}&lon=${data.coordinates.lng}&appid=${WEATHER_API_KEY}&units=metric`
      );
      const forecastFetch = fetch(
        `${WEATHER_API_URL}/forecast?lat=${data.coordinates.lat}&lon=${data.coordinates.lng}&appid=${WEATHER_API_KEY}&units=metric`
      );
      Promise.all([currentWeatherFetch, forecastFetch])
        .then(async response => {
          const weatherResponse = await response[0].json();

          const forcastResponse = await response[1].json();

          setCurrentWeather(weatherResponse);
          setForecast(forcastResponse);
          setloading(false);
        })
        .catch(error => console.log(error));
    } catch (error) {
      setloading(false);
      console.log(error);
    }
  }, [data.coordinates.lat, data.coordinates.lng]);
  return (
    <StyledCard>
      <StyledCardWrapper temp={Math.floor(main?.temp)}>
        <StyledCloseButton onClick={() => handelClick(data.id)}>
          <div></div>
          <div></div>
        </StyledCloseButton>
        {!loading ? (
          <>
            <StyledNameWrapper>
              <StyledName>
                <div>
                  <span> {name},</span>
                  <span> {sys?.country}</span>
                </div>

                <StyledDate> {formatDate(dt, currentLanguage)}</StyledDate>
              </StyledName>

              <>
                {weather?.map(item => (
                  <StyledCondition>
                    <StyledIcon
                      src={`http://openweathermap.org/img/w/${item.icon}.png`}
                      alt="wthr img"
                    />

                    <StyledText>{item.main}</StyledText>
                  </StyledCondition>
                ))}
              </>
            </StyledNameWrapper>
            <Forecast temp={Math.floor(main?.temp)} />
            <StyledWeatherWrapper>
              <div>
                <StyledTempWrapper>
                  <StyledTemp>{temp}</StyledTemp>
                  <StyledIconWrapper>
                    <StyledTempIcon
                      selectedTemp={selectedTemp}
                      onClick={handelTempChange}
                      data-dataTemp="C"
                    >
                      °C
                    </StyledTempIcon>
                    <StyledTempIcon
                      selectedTemp={selectedTemp}
                      onClick={handelTempChange}
                      data-dataTemp="F"
                    >
                      °F
                    </StyledTempIcon>
                  </StyledIconWrapper>
                </StyledTempWrapper>
                <div>
                  Feels like:
                  <span>{main?.feels_like} °C</span>
                </div>
              </div>

              <StyledWind>
                <div>
                  <span>Wind: </span>
                  <span>{wind?.speed} m/s</span>
                </div>
                <div>
                  <span>Humidity: </span>
                  <span>{main?.humidity}%</span>
                </div>
                <div>
                  <span>Pressure: </span>
                  <span> {main?.pressure}Pa</span>
                </div>
              </StyledWind>
            </StyledWeatherWrapper>
          </>
        ) : (
          <p>loading...</p>
        )}
      </StyledCardWrapper>
    </StyledCard>
  );
};

export default Card;
