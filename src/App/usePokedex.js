import React from "react";
import { usePokemonAPI } from "./usePokeAPI";

function usePokedex() {
  const { loading, pokemons } = usePokemonAPI();
  const [searchValue, setSearchValue] = React.useState("");

  let searchedPokemons = [];
  if (!searchValue.length >= 1) {
    searchedPokemons = pokemons;
  } else {
    searchedPokemons = pokemons.filter((pokemon) => {
      const searchedText = searchValue.toLocaleLowerCase();
      const pokeText = pokemon.name.toLowerCase();
      return pokeText.includes(searchedText);
    });
  }

  searchedPokemons.sort((PokemonA, PokemonB) => PokemonA.id - PokemonB.id);
  console.log(searchedPokemons);
  return { loading, searchValue, setSearchValue, searchedPokemons };
}

export { usePokedex };
