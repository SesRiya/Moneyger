import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import baseURL from "../../../utils/baseURL";

//create action
export const createExpensesAction = createAsyncThunk(
  "expense/create",
  async (payload, { rejectWithValue, getState, dispatch }) => {
    // get user token from store
    const userToken = getState()?.users?.userAuth?.token;
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userToken}`,
      },
    };
    try {
      //htttp address
      const { data } = await axios.post(
        `${baseURL}/expenses`,
        payload,
        config
      );
      return data;
    } catch (error) {
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);

//fetch all action
export const fetchAllExpensesAction = createAsyncThunk(
  "expense/fetch-all",
  async (payload, { rejectWithValue, getState, dispatch }) => {
    // get user token from store
    const userToken = getState()?.users?.userAuth?.token;
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userToken}`,
      },
    };
    try {
      //htttp address
      const { data } = await axios.get(
        `${baseURL}/expenses`,
        config
      );
      return data;
    } catch (error) {
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);

const expensesSlices = createSlice({
  name: "expenses",
  initialState:{},
  extraReducers:(builder)=>{ 
    builder.addCase(createExpensesAction.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(createExpensesAction.fulfilled, (state, action) =>{
      state.loading = false;
      state.expenseCreated = action?.payload;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(createExpensesAction.rejected, (state, action) =>{
      state.loading = false;
      state.appErr = action?.payload?.msg;
      state.serverErr = action?.error?.msg;
    });

//fetch all expenses
   builder.addCase(fetchAllExpensesAction.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchAllExpensesAction.fulfilled, (state, action) =>{
      state.loading = false;
      state.expenseList = action?.payload;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(fetchAllExpensesAction.rejected, (state, action) =>{
      state.loading = false;
      state.appErr = action?.payload?.msg;
      state.serverErr = action?.error?.msg;
    });
  },
});

export default expensesSlices.reducer;
