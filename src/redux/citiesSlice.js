import { createSlice } from '@reduxjs/toolkit';
import { cityState } from '../initialState';

const citySlice = createSlice({
  name: 'cities',
  initialState: cityState,
  reducers: {
    addCurrentCity(state, action) {
      console.log('add  current city');
      state.currentCity = action.payload;
    },
    addCity(state, action) {
      state.cities.unshift(action.payload);
    },
   
    deleteCity(state, action) {
      const index = state.cities.findIndex(city => {
        return city.id === action.payload;
      });
      state.cities.splice(index, 1);
    },
  },
});

// Генератори екшенів
export const { addCity } = citySlice.actions;
export const { deleteCity } = citySlice.actions;
export const { addCurrentCity } = citySlice.actions;
export const { addtWeather } = citySlice.actions;
// Редюсер слайсу
export const citiesReducer = citySlice.reducer;
