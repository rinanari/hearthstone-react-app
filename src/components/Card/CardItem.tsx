import { Link } from "react-router-dom";
import { Card } from "../../models/models";
import { useAuth } from "../../hooks/useAuth";
import { useFav } from "../../hooks/useFav";

import blankStar from "../../assets/images/blank-star.png";
import paintedStar from "../../assets/images/painted-star.png";
import PropTypes from "prop-types";
import s from "../Card/Card.module.scss";

type Props = { card: Card };

export const CardItem = (props: Props) => {
  const { isAuth } = useAuth();
  const { isFav, addToFavourite, removeFromFavourite } = useFav(props.card);

  return (
    <div className={s.card}>
      <Link to={`/${props.card.cardId}`}>
        <img className={s.card_img} src={props.card.img} alt="Карточка" />
      </Link>
      <div className={s.buttons}>
        {isAuth &&
          (isFav ? (
            <button
              className={`button ${s.favourite_button}`}
              onClick={removeFromFavourite}
            >
              <img src={paintedStar} alt="" className={s.star} />
              Remove from favourite
            </button>
          ) : (
            <button
              className={`button ${s.favourite_button}`}
              onClick={addToFavourite}
            >
              <img src={blankStar} alt="" className={s.star} />
              Add to favourite
            </button>
          ))}
      </div>
    </div>
  );
};

CardItem.propTypes = {
  card: PropTypes.object,
};
