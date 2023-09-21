import { createSlice } from "@reduxjs/toolkit";

export const searchOnChange = createSlice({
  name: "searchValue",
  initialState: {
    value: "",
  },
  reducers: {
    setValue: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setValue } = searchOnChange.actions;
export default searchOnChange.reducer;
