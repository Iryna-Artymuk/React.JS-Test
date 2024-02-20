import axios from 'axios';

console.log(process.env.WEATHER_API_URL);
export const getCurrentWeather = async (lat, lng, lang) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_WEATHER_API_URL}/weather?lat=${lat}&lon=${lng}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&lang=${lang}&units=metric`
    );

    return response;
  } catch (error) {}
};

export const getForecastWeather = async (lat, lng) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_WEATHER_API_URL}/forecast?lat=${lat}&lon=${lng}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`
    );

    return response.data;
  } catch (error) {
    //  setError(error);
  }
};
