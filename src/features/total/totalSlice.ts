import { createSlice } from '@reduxjs/toolkit';
import {
  increment,
  decrement,
  incrementByAmount
} from '../counter/counterSlice';

export const slice = createSlice({
  name: 'total',
  initialState: 0 as number,
  reducers: {},
  extraReducers: {
    [increment.type]: state => state + 1,
    [decrement.type]: state => state + 1,
    [incrementByAmount.type]: state => state + 1
  }
});

export default slice.reducer;
