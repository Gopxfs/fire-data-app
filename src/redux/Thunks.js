import { createAsyncThunk } from '@reduxjs/toolkit';

export const getCountryFireCountThunk = createAsyncThunk(
  'fireData/getData',
  async () => {
    const response = await fetch('https://queimadas.dgi.inpe.br/api/focos/count')
      .then((response) => response.json());
    return response;
  },
);

export const getCountriesThunk = createAsyncThunk(
  'fireData/getCountries',
  async () => {
    const response = await fetch('https://queimadas.dgi.inpe.br/api/auxiliar/paises')
      .then((response) => response.json());
      return response;
  }
);

// export const getStatesThunk = createAsyncThunk(
//   'fireData/getStates',
//   async (country) => {
//     const response = await fetch('')
//   },
// );

export default getCountryFireCountThunk;
