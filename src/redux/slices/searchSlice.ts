import { createSlice } from "@reduxjs/toolkit";
import { Card } from "../../models/models";

interface SearchState {
  search: string;
  searchResult: Card[];
}
const initialState: SearchState = {
  search: "",
  searchResult: [],
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchInput(state, action) {
      state.search = action.payload;
    },
  },
});

export const { setSearchInput } = searchSlice.actions;
export default searchSlice.reducer;
