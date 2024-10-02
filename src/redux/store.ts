import { configureStore } from "@reduxjs/toolkit";
import videoSlice from "./videoSlice";

const store = configureStore({
  reducer: {
    video: videoSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
