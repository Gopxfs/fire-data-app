import { configureStore, combineReducers } from '@reduxjs/toolkit';
import CountrySlice from './CountrySlice';
import FunctionalitySlice from './FunctionalitySlice';

const rootReducer = combineReducers({
  country: CountrySlice,
  functionality: FunctionalitySlice,
});
const store = configureStore({
  reducer: rootReducer,
});

export default store;
