import { useSearchCardsQuery } from "../redux/cardsApi";
export const CardsInfo = () => {
  const { data = [] } = useSearchCardsQuery("Khadgar");
  console.log(data);
  return <></>;
};
