import { CardsInfo } from "../components/CardsInfo";
import { useEffect, useState } from "react";
import { useDebounce } from "../hooks/debounce";
import { useSearchCardsQuery } from "../redux/cardsApi";
import { useAppDispatch } from "../redux/hooks";
import { setSearchInput } from "../redux/slices/searchSlice";
import { Search } from "../components/Search";
import s from "../components/CardsInfo.module.scss";

export const MainPage = () => {
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
    <div>
      <main className="main-page">
        <div className="container">
          <h1>Welcome to our Hearthstone community</h1>
          <p>
            This is the place where you can find any information you want about
            Hearthstone cards.
          </p>
        </div>
        <div>
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
          <CardsInfo data={data} />
        </div>
      </main>
    </div>
  );
};
