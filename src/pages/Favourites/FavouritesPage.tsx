import { useContext } from "react";
import { CardsInfo } from "../../components/CardsInfo/CardsInfo";
import { useAppSelector } from "../../redux/hooks";
import { ThemeContext } from "../../services/ThemeProvider";

export const FavouritesPage = () => {
  const { favourites } = useAppSelector((state) => state.favourites);
  const { theme } = useContext(ThemeContext);

  return (
    <div className={theme === "Light" ? "content" : "content content_dark"}>
      <div className="container">
        <div>
          <h1>Here you an find cards you marked as favourites</h1>
          {favourites.length === 0 ? (
            <p>Right now your favourites section is empty</p>
          ) : (
            <div>
              <CardsInfo data={favourites} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
