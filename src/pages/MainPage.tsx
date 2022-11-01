import { CardsInfo } from "../components/CardsInfo";
export const MainPage = () => {
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
          <CardsInfo />
        </div>
      </main>
    </div>
  );
};
