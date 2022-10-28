import { useEffect, useState } from "react";
import { useDebounce } from "../hooks/debounce";
import { useSearchCardsQuery } from "../redux/cardsApi";
import { Card } from "./Card";
import { Search } from "./Search";
import s from "../components/CardsInfo.module.scss";
export const CardsInfo = () => {
  const [search, setSearch] = useState("");
  const debounced = useDebounce(search);
  const { data } = useSearchCardsQuery(debounced, {
    skip: debounced.length < 3,
  });
  useEffect(() => {
    console.log(debounced);
  }, [debounced]);
  return (
    <>
      <div className="wrapper">
        <Search setSearch={setSearch} value={search} />
      </div>
      <div className="wrapper">
        <div className={s.cards_container}>
          {data?.map((card) => (
            <Card key={card.cardId} {...card} />
          ))}
        </div>
      </div>
    </>
  );
};
