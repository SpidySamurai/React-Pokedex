import React from "react";
import { usePokemonAPI } from "./usePokeAPI";

function usePokedex() {
  const { pokemons } = usePokemonAPI();
  const [searchValue, setSearchValue] = React.useState("");

  let searchedPokemons = [];
  if (!searchValue.length >= 1) {
    searchedPokemons = pokemons;
  } else {
    searchedPokemons = pokemons.filter((pokemon) => {
      const searchText = searchValue.toLocaleLowerCase();
      const todoText = pokemon.name.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  searchedPokemons.sort((a, b) => a.id - b.id);
  console.log(searchedPokemons);
  return { searchedPokemons };
}

export { usePokedex };
