import { CardsInfo } from "../../components/CardsInfo/CardsInfo";
import { useAppSelector } from "../../redux/hooks";

export const FavouritesPage = () => {
  const { favourites } = useAppSelector((state) => state.favourites);

  if (favourites.length === 0)
    return (
      <p>
        <p>Right now your favourites section is empty :(</p>
      </p>
    );
  return (
    <div>
      <h1>Here you an find cards you marked as favourites</h1>
      <ul>
        <CardsInfo data={favourites} />
      </ul>
    </div>
  );
};
