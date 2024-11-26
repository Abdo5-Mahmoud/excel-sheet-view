import { createSlice } from "@reduxjs/toolkit";
import * as XLSX from "xlsx";

const initialState = {
  data: [],
};
const sheetSlice = createSlice({
  name: "activeSheet",
  initialState,
  reducers: {
    setActiveSheets(state, action) {
      const jsonData = XLSX.utils.sheet_to_json(action.payload, { header: 1 });
      state.data = [...jsonData];
      console.log(state.data);
    },
  },
});

export const sheetReducer = sheetSlice.reducer;
export const { setActiveSheets } = sheetSlice.actions;
