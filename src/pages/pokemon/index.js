import styles from "../../commons/styles/Pokemon.module.css";

function Pokemon() {
  return (
    <div className="container-pokemon">
      <h1 className={`${styles["title-pokemon"]} ${styles.red}`}>Pokemon</h1>

      <style jsx>
        {`
          .container-pokemon {
            width: 100vw;
            background-color: blue;
          }
        `}
      </style>
    </div>
  );
}

export default Pokemon;
