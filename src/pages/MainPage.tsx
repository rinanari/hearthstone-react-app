import { useEffect, useState, Suspense, lazy } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

import { useAppDispatch } from "../redux/hooks";
import { useSearchCardsQuery } from "../redux/cardsApi";
import { addToHistory } from "../redux/slices/historySlice";
import { useDebounce } from "../hooks/debounce";
import { useAuth } from "../hooks/useAuth";

import s from "../pages/MainPage.module.scss";

const CardsInfo = lazy(() =>
  import("../components/CardsInfo").then(({ CardsInfo }) => ({
    default: CardsInfo,
  }))
);

export const MainPage = () => {
  const [searchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("search") || "");
  const [dropdown, setDropdown] = useState(false);

  const dispatch = useAppDispatch();
  const debounced = useDebounce(search);
  const isAuth = useAuth();
  const navigate = useNavigate();

  const { isError, isLoading, data } = useSearchCardsQuery(debounced);

  function handleDropdownClick(cardName: string) {
    setSearch(cardName);
  }
  function onInputChange(e: { target: HTMLInputElement }) {
    setSearch(e.target.value);
  }

  useEffect(() => {
    setDropdown(debounced.length > 2 && data !== undefined && data.length > 0);
  }, [debounced, data]);

  useEffect(() => {
    if (search.length > 3) {
      if (isAuth) {
        dispatch(addToHistory(debounced));
      }
      navigate(`?search=${debounced}`);
    }
  }, [debounced]);

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
            <form>
              <input
                className={s.input}
                type="search"
                name="search"
                placeholder="search"
                value={search}
                onChange={onInputChange}
                autoComplete="off"
              />
            </form>
          </div>

          {dropdown && (
            <ul className={s.dropdown}>
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
          <Suspense>
            <CardsInfo data={data} />
          </Suspense>
        </div>
      </main>
    </div>
  );
};
