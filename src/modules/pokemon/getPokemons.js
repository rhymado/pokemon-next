import axios from "axios";

const url = "https://pokeapi.co/api/v2/pokemon";

export const getPokemons = (params) => {
  return axios.get(url.concat(params));
};

export const getPokemonDetail = (pokemonId) => {
  return axios.get(url.concat("/", pokemonId));
};
