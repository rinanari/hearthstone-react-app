import { useState } from "react";
import { useAppSelector } from "../../redux/hooks";

import { Card } from "../../models/models";

import s from "../SingleCard/SingleCard.module.scss";
import { FavouriteButton } from "../../components/FavouriteButton/FavouriteButton";

type Props = {
  data: Card[];
};
export const SingleCard = ({ data }: Props) => {
  const card = data[0];
  const keysArray = Object.keys(card);

  return (
    <div className={s.single_card}>
      <div>
        <img src={card.img} />
      </div>
      <ul className={s.list}>
        {keysArray
          .filter(
            (key) =>
              key !== "img" &&
              key !== "imgGold" &&
              key !== "dbfId" &&
              key !== "cardId" &&
              key !== "mechanics"
          )
          .map((key, index) => (
            <li key={index}>{`${key}: ${card[key as keyof Card]}`}</li>
          ))}
        <div className={s.button_container}>
          <FavouriteButton card={card} />
        </div>
      </ul>
    </div>
  );
};
