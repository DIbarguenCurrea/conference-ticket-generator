import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fullName: "",
  email: "",
  typeTicket: "",
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setFullName: (state, action) => {
      state.fullName = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setTypeTicket: (state, action) => {
      state.typeTicket = action.payload;
    },
  },
});

export const { setFullName, setEmail, setTypeTicket } = formSlice.actions;

export default formSlice.reducer;
