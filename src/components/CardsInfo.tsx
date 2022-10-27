import { useSearchCardsQuery } from "../redux/cardsApi";
export const CardsInfo = () => {
  const { data = [] } = useSearchCardsQuery("Treant");
  console.log(data);
  return <></>;
};
