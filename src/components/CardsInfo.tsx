import { CardItem } from "./CardItem";
import { Card } from "../models/models";
import s from "../components/CardsInfo.module.scss";
interface Props {
  data: Card[] | undefined;
}
export const CardsInfo = ({ data }: Props) => {
  return (
    <>
      <div className="wrapper">
        <div className={s.cards_container}>
          {data?.map((card) => (
            <CardItem key={card.cardId} card={card} />
          ))}
        </div>
      </div>
    </>
  );
};
