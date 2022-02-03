import styles from "src/commons/styles/Card.module.css";

function Card({ name, onClickHandler }) {
  return (
    <div className={styles["card-wrapper"]} onClick={onClickHandler}>
      <h2>{name}</h2>
    </div>
  );
}

export default Card;
