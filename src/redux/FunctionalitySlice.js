import { createSlice } from '@reduxjs/toolkit';

const FunctionalitySlice = createSlice({
  name: 'functionality',
  initialState: {
    isHamburgerOpened: false,
  },
  reducers: {
    toggleHamburger(state) {
      return {
        ...state,
        isHamburgerOpened: !state.isHamburgerOpened,
      };
    },
  },
});

export const { toggleHamburger } = FunctionalitySlice.actions;

export default FunctionalitySlice.reducer;
