// import Image from "next/image";
import styles from "src/commons/styles/Card.module.css";

function CardDetail({ name, sprites, types }) {
  return (
    <div>
      <section className="d-flex justify-content-center align-items-center">
        <img
          src={sprites["front_default"]}
          alt="normal sprites"
          //   layout="fill"
        />
        <img
          src={sprites["front_shiny"]}
          alt="normal sprites"
          //   layout="fill"
        />
      </section>
      <div className="text-center">
        <h2>{name}</h2>
      </div>
      <section className="d-flex justify-content-center align-items-center">
        {Array.isArray(types) &&
          types.length > 0 &&
          types.map((type) => (
            <div
              className={`${styles.type} ${styles[type.type.name]}`}
              key={type.slot}
            >
              <p>{type.type.name}</p>
            </div>
          ))}
      </section>
    </div>
  );
}

export default CardDetail;
