export const getStoreLanguage = state => {
  // console.log('state: ', state);

  return state.language.language;
};

export const getCities = state => {
  return state.cities.cities;
};
// export const getIsLoading = state => {
//   // console.log('state: ', state);

//   return state.contacts.isLoading;
// };

// export const getError = state => state.contacts.error;
