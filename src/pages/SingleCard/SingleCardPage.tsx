import { useContext } from "react";
import { useParams } from "react-router-dom";
import { SingleCard } from "./SingleCard";
import { Spinner } from "../../components/Spinner/Spinner";
import { useGetSingleCardQuery } from "../../redux/cardsApi";
import { ThemeContext } from "../../services/ThemeProvider";

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
