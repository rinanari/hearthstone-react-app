import { useContext } from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
import { ThemeContext } from "../../services/ThemeProvider";
import s from "../History/History.module.scss";

export const HistoryPage = () => {
  const history = useAppSelector((state) => state.history.historyList);
  const { theme } = useContext(ThemeContext);

  return (
    <div className={theme === "Light" ? "content" : "content content_dark"}>
      <div className="container">
        <div>
          <h1>Here you can find links to all searches you've made</h1>

          <div className={s.history_container}>
            {history.length > 0 ? (
              history
                .filter((name, index, arr) => arr.indexOf(name) === index)
                .map((param) => (
                  <li key={param} className={s.link}>
                    <Link to={`/?search=${param}`} className={s.history_link}>
                      {param}
                    </Link>
                  </li>
                ))
            ) : (
              <p>You have not searched for anything yet.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
