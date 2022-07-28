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
    closeHamburger(state) {
      return {
        ...state,
        isHamburgerOpened: false,
      };
    },
  },
});

export const { toggleHamburger, closeHamburger } = FunctionalitySlice.actions;

export default FunctionalitySlice.reducer;
