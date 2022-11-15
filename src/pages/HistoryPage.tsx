import { Link } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";

export const HistoryPage = () => {
  const history = useAppSelector((state) => state.history.historyList);
  return (
    <div>
      <h1>Here you an find all the cards you searched for.</h1>
      <p>You have not searched for anything yet.</p>
      {history
        .filter((name, index, arr) => arr.indexOf(name) === index)
        .map((param) => (
          <li key={param}>
            <Link to={`/?search=${param}`}>{param}</Link>
          </li>
        ))}
    </div>
  );
};
