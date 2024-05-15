import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type SliceState = {
  value: {
    brand: string;
    model: string;
    location: string;
  };
};

const initialState: SliceState = {
  value: {
    brand: "",
    model: "",
    location: "",
  },
};

const searchParamsSlice = createSlice({
  name: "searchParams",
  initialState,
  reducers: {
    setSearch: (
      state: { value: SliceState["value"] },
      action: PayloadAction<SliceState["value"]>,
    ) => {
      state.value = action.payload;
    },
    clearSearch: (state: { value: SliceState["value"] }) => {
      state.value = initialState.value;
    },
  },
});

export const { setSearch, clearSearch } = searchParamsSlice.actions;
export default searchParamsSlice.reducer;
