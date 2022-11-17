import { Link } from "react-router-dom";
import { Card } from "../../models/models";

import PropTypes from "prop-types";
import s from "../Card/Card.module.scss";
import { FavouriteButton } from "../FavouriteButton/FavouriteButton";

type Props = { card: Card };

export const CardItem = (props: Props) => {
  return (
    <div className={s.card}>
      <Link to={`/${props.card.cardId}`}>
        <img className={s.card_img} src={props.card.img} alt="Карточка" />
      </Link>
      <div>
        <FavouriteButton card={props.card} />
      </div>
    </div>
  );
};

CardItem.propTypes = {
  card: PropTypes.object,
};
