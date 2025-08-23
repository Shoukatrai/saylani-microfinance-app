import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loan: null,
};

export const loanSlice = createSlice({
  name: "loan",
  initialState,
  reducers: {
    addLoan: (state, action) => {
      console.log("Reducer fired with:", action.payload);
      state.loan = action.payload; 
    },
    deleteLoan: (state) => {
      state.loan = null;
    },
  },
});

export const { addLoan, deleteLoan } = loanSlice.actions;

export default loanSlice.reducer;
