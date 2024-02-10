import { createSlice } from '@reduxjs/toolkit';
import { cityState } from '../initialState';

const citySlice = createSlice({
  name: 'cities',
  initialState: cityState,
  reducers: {
    addCity(state, action) {
      console.log('action.payload: ', action.payload);
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
// Редюсер слайсу
export const citiesReducer = citySlice.reducer;
