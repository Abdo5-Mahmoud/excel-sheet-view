import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

const workBookSlice = createSlice({
  name: "workBook",
  initialState,
  reducers: {
    addWorkBook(state, action) {
      state.data.push(action.payload);
      //   state.data = [...state.data, action.payload];
    },
  },
});

export const { addWorkBook } = workBookSlice.actions;
export const workBookReducer = workBookSlice.reducer;

export const getSheetsName = (name) => (state) => {
  let data;
  state.workBook?.data?.map((files) => {
    if (files.fileName == name) {
      data = files.content.sheetsName;
    }
  });
  return data;
};
export const getSheetsContent = (name) => (state) => {
  let data;
  state.workBook?.data?.map((files) => {
    if (files.content.sheetsContent[name]) {
      data = files.content.sheetsContent[name];
    }
  });
  return data;
};
