import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment: (state) => {
      state.counter++;
    },
    decrement: (state) => {
      state.counter--;
    },
    increase: (state, action) => {
      state.counter = state.counter + action.payload;
    },
    reset: (state) => {
      state.counter = initialCounterState.counter;
    },
    toggle: (state) => {
      state.showCounter = !state.showCounter;
    }
  }
});

// counterSlice.actions.increment();

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;
