import axios from 'axios';

export const WEATHER_API_URL = 'https://api.openweathermap.org/data/2.5';

export const WEATHER_API_KEY = '7cfd6da3b31a17ad044c53fb7dfbaecc';

export const getCurrentWeather = async (lat, lng, lang) => {
  try {
    const response = await axios.get(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lng}&appid=${WEATHER_API_KEY}&lang=${lang}&units=metric`
    );

    
    return response;
  } catch (error) {}
};

export const getForecastWeather = async (lat, lng) => {
  try {
    const response = await axios.get(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lng}&appid=${WEATHER_API_KEY}&units=metric`
    );

    return response.data;
  } catch (error) {
    //  setError(error);
  }
};
