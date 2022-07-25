import { createSlice } from '@reduxjs/toolkit';
import { getCountryFireCountThunk } from './Thunks';

const CountrySlice = createSlice({
  name: 'country',
  initialState: {
    countryCount: [],
    countryStates: [],
  },
  extraReducers: {
    [getCountryFireCountThunk.fulfilled]: (state, { payload }) => {
      return {
        countryCount: Object.entries(payload),
      };
    },
  },
});

export default CountrySlice.reducer;
