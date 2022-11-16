import { createSlice } from "@reduxjs/toolkit";

interface HistoryState {
  historyList: Array<string>;
}
const initialState: HistoryState = {
  historyList: [],
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    addToHistory(state, action) {
      state.historyList.push(action.payload);
    },
  },
});

export const { addToHistory } = searchSlice.actions;
export default searchSlice.reducer;
