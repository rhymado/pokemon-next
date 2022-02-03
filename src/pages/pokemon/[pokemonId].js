import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { getPokemonDetail } from "src/modules/pokemon/getPokemons";
import CardDetail from "src/commons/components/CardDetail";

function PokemonDetail() {
  const router = useRouter();
  // console.log(router);
  const [pokemon, setPokemon] = useState({});
  useEffect(() => {
    console.log(router);
    if (Object.keys(router.query).includes("pokemonId")) {
      getPokemonDetail(router.query.pokemonId)
        .then((res) =>
          setPokemon({
            name: res.data.name,
            sprites: res.data.sprites,
            types: res.data.types,
          })
        )
        .catch((err) => console.log(err));
    }
  }, [router.query]);
  return (
    <div>
      <h1>Pokemon Detail</h1>
      {Object.keys(pokemon).length >= 3 && (
        <CardDetail
          name={pokemon.name}
          sprites={pokemon.sprites}
          types={pokemon.types}
        />
      )}
    </div>
  );
}

export default PokemonDetail;
