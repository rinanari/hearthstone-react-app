import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Card } from "../../models/models";

interface FavState {
  favourites: Card[];
}
const initialState: FavState = {
  favourites: [],
};

const favSlice = createSlice({
  name: "favourites",
  initialState,
  reducers: {
    addFavourite(state, action: PayloadAction<Card>) {
      state.favourites.push(action.payload);
    },
    removeFavourite(state, action: PayloadAction<Card>) {
      state.favourites = state.favourites.filter((f) => f !== action.payload);
    },
  },
});

export const { addFavourite, removeFavourite } = favSlice.actions;
export default favSlice.reducer;
