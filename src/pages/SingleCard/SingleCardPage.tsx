import { useContext } from "react";
import { useParams } from "react-router-dom";
import { Spinner } from "../../components/Spinner/Spinner";
import { useGetSingleCardQuery } from "../../redux/cardsApi";
import { ThemeContext } from "../../services/ThemeProvider";
import { SingleCard } from "./SingleCard";

import s from "../SingleCard/SingleCard.module.scss";
export const SingleCardPage = () => {
  const { cardId } = useParams();
  const { data } = useGetSingleCardQuery(cardId || undefined);
  const { theme } = useContext(ThemeContext);

  return data ? (
    <div className={theme === "Light" ? "content" : "content_dark"}>
      <div className="container">
        <SingleCard data={data} />
      </div>
    </div>
  ) : (
    <Spinner />
  );
};
