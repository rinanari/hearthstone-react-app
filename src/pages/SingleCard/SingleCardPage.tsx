import { link } from "fs";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { Spinner } from "../../components/Spinner/Spinner";
import { useGetSingleCardQuery } from "../../redux/cardsApi";
import { ThemeContext } from "../../services/ThemeProvider";
import s from "../SingleCard/SingleCard.module.scss";

export const SingleCardPage = () => {
  const { cardId } = useParams();
  const { data } = useGetSingleCardQuery(cardId || undefined);
  const { theme } = useContext(ThemeContext);

  return data ? (
    <div className={theme === "Light" ? "wrapper" : "wrapper_dark"}>
      <div className={s.single_card}>
        {/* <ul>
          { Object.keys(data[0]).map((key, index) => 
          <li key={index}>{`${key} : ${data[0][key]}`}</li>)
          }
        </ul> */}
        <div>
          <div>
            {data[0].imgGold ? (
              <img src={data[0].imgGold} alt="" />
            ) : (
              <img src={data[0].img} alt="" />
            )}
          </div>
        </div>
        <div>
          <h1>{data[0].name}</h1>
          <div>Card set: {data[0].cardSet}</div>
          <div> {data[0].attack}</div>
          <div>{data[0].cost}</div>
          <div>{data[0].elite}</div>
          <div>Card faction: {data[0].faction}</div>
          <div>{data[0].flavor}</div>
          <div>{data[0].health}</div>
        </div>
      </div>
    </div>
  ) : (
    <Spinner />
  );
};
