import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { Card } from "../models/models";
import { addFavourite, removeFavourite } from "../redux/slices/favouriteSlice";

export function useFav(value: Card) {
  const dispatch = useAppDispatch();
  const { favourites } = useAppSelector((state) => state.favourites);

  const [isFav, setIsFav] = useState(favourites.includes(value));

  const addToFavourite = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setIsFav(true);
    dispatch(addFavourite(value));
  };

  const removeFromFavourite = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setIsFav(false);
    dispatch(removeFavourite(value));
  };
  return { isFav, addToFavourite, removeFromFavourite };
}
