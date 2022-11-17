import { Link } from "react-router-dom";
import s from "../Navigation/Navigation.module.scss";

export const Navigation = () => {
  return (
    <nav>
      <Link to="/favourites" className={s.nav_link}>
        Favourite cards
      </Link>
      <Link to="/history" className={s.nav_link}>
        Search history
      </Link>
    </nav>
  );
};
