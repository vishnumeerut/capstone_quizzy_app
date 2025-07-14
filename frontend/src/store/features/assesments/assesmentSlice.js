import { createSlice } from "@reduxjs/toolkit";
import { assesmentInitialState } from "./initialState";
import * as Actions from "./actions";

export * from "./selectors";

const assesmentSlice = createSlice({
  name: "assesments",
  initialState: assesmentInitialState,
  reducers: {
    setAssesmentKey: Actions.setAssesmentKeyAction,
    resetAssesmentsState: Actions.resetAssesmentsStateAction,
  },
});

export const { setAssesmentKey, resetAssesmentsState } = assesmentSlice.actions;

export default assesmentSlice.reducer;
