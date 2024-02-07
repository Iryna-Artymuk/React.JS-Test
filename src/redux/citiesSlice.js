import { createSlice, current } from '@reduxjs/toolkit';
import { cityState } from './initialState';

const citySlice = createSlice({
  // Ім'я слайсу
  name: 'cities',
  // Початковий стан редюсера слайсу
  initialState: cityState,
  // Об'єкт редюсерів
  reducers: {
    // очікується що в action.payload при відправці action  в фільтрі події onchange відправиться актуальне значення
    // фільтру яке reducer запише в store
    addCity(state, action) {
      state.cities.push(action.payload);
    },
    deleteCity(state, action) {
      const index = state.cities.findIndex(city => {
        return city.id === action.payload;
      });
      console.log(index);
      state.cities.splice(index, 1);
    },
  },
});

// Генератори екшенів
export const { addCity } = citySlice.actions;
export const { deleteCity } = citySlice.actions;
// Редюсер слайсу
export const citiesReducer = citySlice.reducer;
