import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CarDetailResponse } from "../../types/APIResponseTypes";

type SliceState = { value: CarDetailResponse | null | undefined };

const initialState: SliceState = { value: null };

const selectedCarSlice = createSlice({
  name: "selectedCar",
  initialState,
  reducers: {
    select: (
      state: { value: SliceState["value"] },
      action: PayloadAction<SliceState["value"]>,
    ) => {
      state.value = action.payload;
    },
    clear: (state: { value: SliceState["value"] }) => {
      state.value = null;
    },
  },
});

export const { select, clear } = selectedCarSlice.actions;
export default selectedCarSlice.reducer;
