import { createSlice } from '@reduxjs/toolkit';
import {
  getCountryFireCountThunk, getCountriesThunk, getStatesThunk, getStateFireCountThunk,
} from './Thunks';

const CountrySlice = createSlice({
  name: 'country',
  initialState: {
    countryCount: [],
    countriesList: [],
    countryStates: [],
    stateCount: [],
  },
  extraReducers: {
    [getCountryFireCountThunk.fulfilled]: (state, { payload }) => ({
      ...state,
      countryCount: Object.entries(payload),
    }),
    [getCountriesThunk.fulfilled]: (state, { payload }) => ({
      ...state,
      countriesList: payload,
    }),
    [getStatesThunk.fulfilled]: (state, { payload }) => ({
      ...state,
      countryStates: payload,
      stateCount: [],
    }),
    [getStateFireCountThunk.fulfilled]: (state, { payload }) => {
      if (payload.fires) {
        return {
          ...state,
          stateCount: [...state.stateCount, payload],
        };
      }
      return {
        ...state,
      };
    },

  },
});

export default CountrySlice.reducer;
