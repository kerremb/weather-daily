import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchDatas = createAsyncThunk("fetchDatas", async (city) => {
  const key = process.env.REACT_APP_API_KEY;
  const language = navigator.language.split("-")[0];
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&lang=${language}&units=metric`
  );

  return response.data;
});

export const searchSlice = createSlice({
  name: "search",
  initialState: {
    data: "",
    loading: false,
    error: "",
    isDone: false,
  },
  reducers: {
    setClearData: (state, action) => {
      state.data = action.payload;
      state.isDone = false;
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchDatas.pending, (state, action) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(fetchDatas.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
      state.isDone = true;
    });
    builder.addCase(fetchDatas.rejected, (state, action) => {
      state.loading = false;
      state.error = "City Not Found";
      state.isDone = false;
    });
  },
});

export const { setClearData } = searchSlice.actions;
export default searchSlice.reducer;
