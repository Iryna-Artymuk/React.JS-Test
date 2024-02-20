export const getGraphColor = (temp, theme) => {
  console.log('theme: ', theme);
  if (temp < 0) {
    return theme.colors.forecast_cold;
  }
  if (temp >= 0) {
    return theme.colors.forecast_hot;
  }
};
