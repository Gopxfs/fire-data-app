import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getCountryFireCountThunk = createAsyncThunk(
  'fireData/getData',
  async () => {
    const response = await fetch('https://queimadas.dgi.inpe.br/api/focos/count')
      .then((response) => response.json());
    return response;
  },
);

const CountrySlice = createSlice({
  name: 'country',
  initialState: {
    countryCount: [],
  },
  reducers: {

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
