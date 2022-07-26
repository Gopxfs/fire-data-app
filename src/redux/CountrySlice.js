import { createSlice } from '@reduxjs/toolkit';
import {
  getCountryFireCountThunk, getCountriesThunk, getStatesThunk, getStateFireCountThunk,
} from './Thunks';

const sortList = (list, reversed, isState) => {
  let oldList = [...list];
  if (isState) {
    const newList = [];
    list.forEach((state) => {
      const newElement = [];
      newElement.push(state.state);
      newElement.push(state.fires);
      newElement.push(state.country);
      newList.push(newElement);
    });
    oldList = newList;
  }

  let sortedCount = [];
  const sortedCountries = [];

  oldList.forEach((country) => {
    sortedCount.push(country[1]);
  });

  sortedCount.sort((a, b) => b - a);
  sortedCount = [...new Set(sortedCount)];
  sortedCount.forEach((count) => {
    for (let i = 0; i < oldList.length; i += 1) {
      if (oldList[i][1] === count) {
        sortedCountries.push(oldList[i]);
      }
    }
  });

  if (isState) {
    const sortedStates = [];
    sortedCountries.forEach((state) => {
      const newStateObject = {
        state: state[0],
        fires: state[1],
        country: state[2],
      };
      sortedStates.push(newStateObject);
    });
    if (reversed) return sortedStates.reverse();
    return sortedStates;
  }

  if (reversed) return sortedCountries.reverse();
  return sortedCountries;
};

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
      const countryList = [...state.countryCount];

      if (payload === 'higher') {
        return {
          ...state,
          countryCount: sortList(countryList, false),
        };
      }
      return {
        ...state,
        countryCount: sortList(countryList, true),
      };
    },
    sortStatesList(state, { payload }) {
      const stateList = [...state.stateCount];

      if (payload === 'higher') {
        return {
          ...state,
          stateCount: sortList(stateList, false, true),
        };
      }
      return {
        ...state,
        stateCount: sortList(stateList, true, true),
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

export const { updateTotalFires, sortCountriesList, sortStatesList } = CountrySlice.actions;

export default CountrySlice.reducer;
