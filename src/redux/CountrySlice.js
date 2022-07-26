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
    currentCountry: 'This country',
    currentCountryFires: 0,
  },
  reducers: {
    sortCountriesList(state, { payload }) {
      let sortedCount = [];
      const countryList = [...state.countryCount];
      const sortedCountries = [];

      countryList.forEach((country) => {
        sortedCount.push(country[1]);
      });
      sortedCount.sort((a, b) => b - a);
      sortedCount = [...new Set(sortedCount)];
      sortedCount.forEach((count) => {
        for (let i = 0; i < countryList.length; i += 1) {
          if (countryList[i][1] === count) {
            sortedCountries.push(countryList[i]);
          }
        }
      });

      if (payload === 'higher') {
        return {
          ...state,
          countryCount: sortedCountries,
        };
      }
      return {
        ...state,
        countryCount: sortedCountries.reverse(),
      };
    },
    updateTotalFires(state, { payload }) {
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
      currentCountry: 'This country',
      currentCountryFires: 0,
    }),
    [getStateFireCountThunk.fulfilled]: (state, { payload }) => {
      if (payload.fires) {
        return {
          ...state,
          stateCount: [...state.stateCount, payload],
          currentCountry: payload.country,
          currentCountryFires: state.currentCountryFires + payload.fires,
        };
      }
      return {
        ...state,
      };
    },

  },
});

export const { updateTotalFires, sortCountriesList } = CountrySlice.actions;

export default CountrySlice.reducer;
