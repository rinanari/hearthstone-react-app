import { useParams } from "react-router-dom";
import { useGetSingleCardQuery } from "../redux/cardsApi";

export const SingleCardPage = () => {
  const { cardId } = useParams();
  const { data } = useGetSingleCardQuery(cardId || undefined);
  return data ? (
    <div>
      <div>{data[0].cardId}</div>
      <div>{data[0].cardSet}</div>
      <div>
        <img src={data[0].img} alt="" />
      </div>
    </div>
  ) : (
    <p>Nothing</p>
  );
};
