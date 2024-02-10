import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { languageReducer } from './languageSlice';
import { citiesReducer } from './citiesSlice';

const languagePersistConfig = {
  key: 'language',
  storage,
};
const citiesPersistConfig = {
  key: 'cities',
  storage,
};

export const store = configureStore({
  reducer: {
    
    language: persistReducer(languagePersistConfig, languageReducer),
    cities: persistReducer(citiesPersistConfig, citiesReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
