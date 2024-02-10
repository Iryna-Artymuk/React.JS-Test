import { createSlice } from '@reduxjs/toolkit';
import { languagelState } from '../initialState';


const languageSlice = createSlice( {
  name: 'language',
  initialState: languagelState,
 
  reducers: {
  
    setLanguage ( state, action )
    {
      state.language = action.payload;
     
    },
  },
});

// Генератори екшенів
export const { setLanguage } = languageSlice.actions;
// Редюсер слайсу
export const languageReducer = languageSlice.reducer;
