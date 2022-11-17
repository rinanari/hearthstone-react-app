import React from "react";
import { useAuth } from "../../hooks/useAuth";
import { Card } from "../../models/models";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { toggleFavourite } from "../../redux/slices/favouriteSlice";
import blankStar from "../../assets/images/blank-star.png";
import paintedStar from "../../assets/images/painted-star.png";
import s from "../FavouriteButton/FavouriteButton.module.scss";

type Props = { card: Card };

export const FavouriteButton = (props: Props) => {
  const dispatch = useAppDispatch();
  const { favourites } = useAppSelector((state) => state.favourites);
  const { isAuth } = useAuth();

  const isFavourite = favourites?.some((i) => i.cardId === props.card.cardId);

  const onClickToggle = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    dispatch(toggleFavourite(props.card));
  };

  return (
    <div className={s.button}>
      {isAuth && (
        <button
          className={`button ${s.favourite_button}`}
          onClick={onClickToggle}
        >
          {isFavourite ? (
            <div className={s.button_content}>
              <img src={paintedStar} alt="" className={s.star} />
              <p>Remove from favourite</p>{" "}
            </div>
          ) : (
            <div className={s.button_content}>
              <img src={blankStar} alt="" className={s.star} />
              <p>Add to favourite</p>{" "}
            </div>
          )}
        </button>
      )}
    </div>
  );
};
