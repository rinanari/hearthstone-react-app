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
    toggleFavourite(state, action: PayloadAction<Card>) {
      const card = state.favourites.find(
        (f) => f.cardId === action.payload.cardId
      );

      if (!card) {
        state.favourites.push(action.payload);
      } else {
        state.favourites = state.favourites.filter(
          (f) => f.cardId !== action.payload.cardId
        );
      }
    },
  },
});

export const { toggleFavourite } = favSlice.actions;
export default favSlice.reducer;
