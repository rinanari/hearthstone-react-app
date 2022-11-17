import { Link } from "react-router-dom";
import { Card } from "../../models/models";
import { useAuth } from "../../hooks/useAuth";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { toggleFavourite } from "../../redux/slices/favouriteSlice";
import blankStar from "../../assets/images/blank-star.png";
import paintedStar from "../../assets/images/painted-star.png";

import PropTypes from "prop-types";
import s from "../Card/Card.module.scss";
import { useEffect } from "react";

type Props = { card: Card };

export const CardItem = (props: Props) => {
  const dispatch = useAppDispatch();
  const { favourites } = useAppSelector((state) => state.favourites);

  const [isFav, setIsFav] = useState(favourites.includes(props.card));
  const { isAuth } = useAuth();

  const isFavourite = favourites?.some((i) => i.cardId === props.card.cardId);

  const onClickToggle = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    dispatch(toggleFavourite(props.card));
  };

  return (
    <div className={s.card}>
      <Link to={`/${props.card.cardId}`}>
        <img className={s.card_img} src={props.card.img} alt="Карточка" />
      </Link>
      <div className={s.buttons}>
        {isAuth && favourites && (
          <button
            className={`button ${s.favourite_button}`}
            onClick={onClickToggle}
          >
            {isFavourite ? (
              <span>
                <img src={paintedStar} alt="" className={s.star} />
                <p>Remove from favourite</p>{" "}
              </span>
            ) : (
              <span>
                <img src={blankStar} alt="" className={s.star} />
                <p>Add to favourite</p>{" "}
              </span>
            )}
          </button>
        )}
      </div>
    </div>
  );
};

CardItem.propTypes = {
  card: PropTypes.object,
};
