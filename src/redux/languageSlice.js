import { createSlice } from '@reduxjs/toolkit';
import { languagelState } from './initialState';
// console.log(' filterInitialState: ', filterInitialState);

const languageSlice = createSlice({
  // Ім'я слайсу
  name: 'language',
  // Початковий стан редюсера слайсу
  initialState: languagelState,
  // Об'єкт редюсерів
  reducers: {
    // очікується що в action.payload при відправці action  в фільтрі події onchange відправиться актуальне значення
    // фільтру яке reducer запише в store
    setLanguage(state, action) {
      state.language = action.payload;
    },
  },
});

// Генератори екшенів
export const { setLanguage } = languageSlice.actions;
// Редюсер слайсу
export const languageReducer = languageSlice.reducer;
