import { useParams } from "react-router-dom";
import { Spinner } from "../../components/Spinner/Spinner";
import { useGetSingleCardQuery } from "../../redux/cardsApi";

export const SingleCardPage = () => {
  const { cardId } = useParams();
  const { data } = useGetSingleCardQuery(cardId || undefined);
  return data ? (
    <div>
      <div>{data[0].cardId}</div>
      <div>{data[0].name} </div>
      <div>{data[0].cardSet}</div>
      <div>{data[0].artist}</div>
      <div>{data[0].attack}</div>
      <div>{data[0].collectible}</div>
      <div>{data[0].cost}</div>
      <div>{data[0].elite}</div>
      <div>{data[0].faction}</div>
      <div>{data[0].flavor}</div>
      <div>{data[0].health}</div>
      <div>{data[0].imgGold}</div>
      <div>{data[0].text}</div>
      <div>
        <img src={data[0].img} alt="" />
      </div>
    </div>
  ) : (
    <Spinner />
  );
};
