import React from "react";

const API = "https://pokeapi.co/api/v2/pokemon?limit=151";
function usePokemonAPI() {
  const [pokemons, setPokemons] = React.useState([]);

  const fetchPokemons = async () => {
    const res = await fetch(API);
    const data = await res.json();
    const results = data.results;

    const fetchPokemon = (results) => {
      results.forEach(async (pokemon) => {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        const data = await res.json();
        setPokemons((prevState) => [...prevState, data]);
      });
    };
    fetchPokemon(results);
  };

  React.useEffect(() => {
    try {
      fetchPokemons();
    } catch (e) {}
  }, []);

  return { pokemons };
}

export { usePokemonAPI };
