import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <nav>
      <Link to="/favourites">Favourite cards</Link>
      <Link to="/history">Search history</Link>
    </nav>
  );
};
