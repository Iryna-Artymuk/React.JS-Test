export const getStoreLanguage = state => {
  // console.log('state: ', state);

  return state.language.language;
};

export const getCities = state => {
  return state.cities.cities;
};
export const getCitiesError = state => {
  return state.cities.error;
};
export const getCurrentCity = state => {
  return state.cities.currentCity;
};
export const getWeather = state => {
  return state.cities.weather;
};
