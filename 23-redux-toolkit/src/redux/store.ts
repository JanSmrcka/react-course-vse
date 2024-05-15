import { configureStore } from "@reduxjs/toolkit";
import selectedCarSlice from "./slices/selectedCarSlice";
import searchParamsSlice from "./slices/searchParamsSlice";
import { carApi } from "./api/carApi";

const store = configureStore({
  reducer: {
    selectedCar: selectedCarSlice,
    searchParams: searchParamsSlice,
    [carApi.reducerPath]: carApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(carApi.middleware), // add middleware
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
