import { configureStore } from '@reduxjs/toolkit';
import loanReducer from '../redux/slices/loan.js';

export const store = configureStore({
  reducer: {
    loan: loanReducer, 
  },
});
