import s from "../components/Card.module.scss";
export const Card = (props: any) => {
  return (
    <div className={s.card}>
      <img className={s.card_img} src={props.img} alt="Карточка" />
      <h4>{props.name}</h4>
      <p>{props.type}</p>
      <p>{props.text}</p>
    </div>
  );
};
