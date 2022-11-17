import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { FavouriteButton } from "../../components/FavouriteButton/FavouriteButton";
import { Card } from "../../models/models";

import s from "../SingleCard/SingleCard.module.scss";

type Props = {
  data: Card[];
};
export const SingleCard = ({ data }: Props) => {
  const card = data[0];
  const keysArray = Object.keys(card);
  const { favourites } = useAppSelector((state) => state.favourites);
  const [fav, setIsFav] = useState(favourites.includes(card));

  return (
    <div className={s.single_card}>
      <div>
        <img src={card.img} />
      </div>
      <div>
        {keysArray
          .filter((key) => key !== "img" && key !== "imgGold")
          .map((key, index) => (
            <li key={index}>{`${key}: ${card[key as keyof Card]}`}</li>
          ))}
      </div>
      <FavouriteButton card={card} fav={fav} setIsFav={setIsFav}>
        Add to favourite
      </FavouriteButton>
    </div>
  );
};
