import React from "react";

const API = "https://pokeapi.co/api/v2/pokemon?limit=151";
function usePokemonAPI() {
  const [loading, setLoading] = React.useState(true);
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
    setTimeout(() => {
      try {
        fetchPokemons();
        setLoading(false);
      } catch (e) {
        console.log("There was an error fetching");
      }
    }, 1000);
  }, []);

  return { pokemons, loading };
}

export { usePokemonAPI };
