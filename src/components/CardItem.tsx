import React from "react";
import s from "../components/Card.module.scss";
import { Card } from "../models/models";
import { useAppDispatch } from "../redux/hooks";
import { addFavourite } from "../redux/slices/favouriteSlice";

export const CardItem = (props: Card) => {
  const dispatch = useAppDispatch();

  const addToFavourite = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    dispatch(addFavourite(props));
  };

  return (
    <div className={s.card}>
      <img className={s.card_img} src={props.img} alt="Карточка" />
      <h4>{props.name}</h4>
      <p>{props.type}</p>
      <p>{props.text}</p>
      <button onClick={addToFavourite}>Add</button>
    </div>
  );
};
