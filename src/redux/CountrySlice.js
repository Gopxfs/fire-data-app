import { createSlice } from '@reduxjs/toolkit';
import { getCountryFireCountThunk, getCountriesThunk } from './Thunks';

const CountrySlice = createSlice({
  name: 'country',
  initialState: {
    countryCount: [],
    countriesList: [],
    countryStates: [],
  },
  extraReducers: {
    [getCountryFireCountThunk.fulfilled]: (state, { payload }) => ({
      ...state,
      countryCount: Object.entries(payload),
    }),
    [getCountriesThunk.fulfilled]: (state, { payload }) => {
      return {
        ...state,
        countriesList: payload,
      }
    }
  },
});

export default CountrySlice.reducer;
