import { createAsyncThunk } from "@reduxjs/toolkit";

export const getCountryFireCountThunk = createAsyncThunk(
  'fireData/getData',
  async () => {
    const response = await fetch('https://queimadas.dgi.inpe.br/api/focos/count')
      .then((response) => response.json());
    return response;
  },
);

export default getCountryFireCountThunk;