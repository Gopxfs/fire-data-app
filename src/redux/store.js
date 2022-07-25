import { configureStore } from '@reduxjs/toolkit';
import CountrySlice from './CountrySlice';

const store = configureStore({
  reducer: {
    country: CountrySlice,
  },
});

export default store;
