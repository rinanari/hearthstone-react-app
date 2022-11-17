import { useContext } from "react";
import { CardsInfo } from "../../components/CardsInfo/CardsInfo";
import { useAppSelector } from "../../redux/hooks";
import { ThemeContext } from "../../services/ThemeProvider";

export const FavouritesPage = () => {
  const { favourites } = useAppSelector((state) => state.favourites);
  const { theme } = useContext(ThemeContext);

  return (
    <div className={theme === "Light" ? "wrapper" : "wrapper_dark"}>
      <h1>Here you an find cards you marked as favourites</h1>
      {favourites.length === 0 ? (
        <p>Right now your favourites section is empty</p>
      ) : (
        <ul>
          <CardsInfo data={favourites} />
        </ul>
      )}
    </div>
  );
};
