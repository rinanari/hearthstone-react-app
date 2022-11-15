import { CardsInfo } from "../components/CardsInfo";
import { useEffect, useState } from "react";
import { useDebounce } from "../hooks/debounce";
import { useSearchCardsQuery } from "../redux/cardsApi";
import { useAppDispatch } from "../redux/hooks";

import { useAuth } from "../hooks/useAuth";
import s from "../pages/MainPage.module.scss";
import {
  Navigate,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { addToHistory } from "../redux/slices/historySlice";

export const MainPage = () => {
  const [searchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("search") || "");
  const [dropdown, setDropdown] = useState(false);
  const dispatch = useAppDispatch();
  const debounced = useDebounce(search);
  const isAuth = useAuth();
  const location = useLocation();
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
    if (search.length > 0) {
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
            <input
              className={s.input}
              type="search"
              name="search"
              placeholder="search"
              value={search}
              onChange={onInputChange}
            />
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
