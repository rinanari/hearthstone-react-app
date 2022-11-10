import { Header } from "../components/Header";
import { useAppSelector } from "../redux/hooks";

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
        {favourites.map((fav) => (
          <li key={fav.cardId}>
            <div>
              <img src={fav.img} alt="" />
              {fav.name}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
