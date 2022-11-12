import React from "react";
import s from "../components/Card.module.scss";
import { Card } from "../models/models";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { addFavourite, removeFavourite } from "../redux/slices/favouriteSlice";
import { useState } from "react";
import blankStar from "../assets/images/blank-star.png";
import paintedStar from "../assets/images/painted-star.png";
import { useAuth } from "../hooks/useAuth";

type Props = { key: string; card: Card };

export const CardItem = (props: Props) => {
  const dispatch = useAppDispatch();
  const { isAuth } = useAuth();
  const { favourites } = useAppSelector((state) => state.favourites);
  const [isFav, setIsFav] = useState(favourites.includes(props.card));

  const addToFavourite = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setIsFav(true);
    dispatch(addFavourite(props.card));
  };
  const removeFromFavourite = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setIsFav(false);
    dispatch(removeFavourite(props.card));
  };

  return (
    <div className={s.card}>
      <img className={s.card_img} src={props.card.img} alt="Карточка" />
      <h4>{props.card.name}</h4>
      <p>{props.card.type}</p>
      <p>{props.card.text}</p>
      {isAuth &&
        (isFav ? (
          <button onClick={removeFromFavourite}>
            <img src={paintedStar} alt="" className={s.star} />
            Remove from favourite
          </button>
        ) : (
          <button onClick={addToFavourite}>
            <img src={blankStar} alt="" className={s.star} />
            Add to favourite
          </button>
        ))}
    </div>
  );
};
