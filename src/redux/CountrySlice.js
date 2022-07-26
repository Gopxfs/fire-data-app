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
    totalFires: 0,
    currentCountryFires: 0,
    },
  reducers: {
    updateTotalFires (state, { payload }) {
      return {
        ...state,
        totalFires: payload,
      };
    },
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
      currentCountryFires: 0,
    }),
    [getStateFireCountThunk.fulfilled]: (state, { payload }) => {
      if (payload.fires) {
        return {
          ...state,
          stateCount: [...state.stateCount, payload],
          currentCountryFires: state.currentCountryFires+payload.fires,
        };
      }
      return {
        ...state,
      };
    },

  },
});

export const { updateTotalFires } = CountrySlice.actions;

export default CountrySlice.reducer;
