import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

import { getPokemons } from "src/modules/pokemon/getPokemons";
import Card from "src/commons/components/Card";
import Layout from "src/commons/components/Layout";

import styles from "src/commons/styles/Pokemon.module.css";

function Pokemon() {
  const router = useRouter();
  const state = useSelector((state) => state);
  console.log(state);
  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    const query = "?limit=10&offset=0";
    getPokemons(query)
      .then((res) => setPokemons(res.data.results))
      .catch((err) => console.log(err));
  }, []);
  const onClickHandler = (id) => {
    router.push(`/pokemon/${id[0]}`);
  };
  return (
    <Layout title="All Pokemon">
      <div className="container">
        {/* <h1 className={`${styles["title-pokemon"]} ${styles.red}`}>Pokemon</h1>

      <style jsx>
        {`
          .container-pokemon {
            width: 100vw;
            background-color: blue;
          }
        `}
      </style> */}
        {Array.isArray(pokemons) &&
          pokemons.length > 0 &&
          pokemons.map((pokemon, idx) => (
            <Card
              name={pokemon.name}
              key={idx}
              onClickHandler={() =>
                onClickHandler(pokemon.url.match(/(?<=\b)\d{1,}(?=\b)/g))
              }
            />
          ))}
      </div>
    </Layout>
  );
}

export default Pokemon;
