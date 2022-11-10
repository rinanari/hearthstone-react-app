import { useEffect, useState } from "react";
import { useDebounce } from "../hooks/debounce";
import { useSearchCardsQuery } from "../redux/cardsApi";
import { CardItem } from "./CardItem";
import { Search } from "./Search";
import s from "../components/CardsInfo.module.scss";
import { useAppDispatch } from "../redux/hooks";
import { setSearchInput } from "../redux/slices/searchSlice";

export const CardsInfo = () => {
  const [search, setSearch] = useState("");
  const [dropdown, setDropdown] = useState(false);
  const dispatch = useAppDispatch();
  const debounced = useDebounce(search);

  const { isError, isLoading, data } = useSearchCardsQuery(debounced, {
    skip: debounced.length < 3,
  });

  useEffect(() => {
    setDropdown(debounced.length > 2 && data !== undefined && data.length > 0);
  }, [debounced]);

  useEffect(() => {
    dispatch(setSearchInput(search));
  }, [debounced]);

  function handleDropdownClick(cardName: string) {
    setSearch(cardName);
  }

  return (
    <>
      <div className="wrapper">
        <Search setSearch={setSearch} value={search} />
      </div>
      {dropdown && (
        <ul className={s.dropdown}>
          {isLoading && <p>Loading...</p>}
          {data?.map((card, index) => (
            <li
              className={s.dropdown__list}
              key={index}
              onClick={() => handleDropdownClick(card.name)}
            >
              {card.name}
            </li>
          ))}
        </ul>
      )}

      <div className="wrapper">
        <div className={s.cards_container}>
          {data?.map((card) => (
            <CardItem key={card.cardId} {...card} />
          ))}
        </div>
      </div>
    </>
  );
};
