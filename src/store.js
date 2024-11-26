import { configureStore } from "@reduxjs/toolkit";
import { workBookReducer } from "./features/workbookSlice";
import { sheetReducer } from "./features/sheetsSlice";

const store = configureStore({
  reducer: {
    workBook: workBookReducer,
    activeSheet: sheetReducer,
  },
});
export default store;
