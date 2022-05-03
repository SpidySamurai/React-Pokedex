import React from "react";
import { PokeHeader } from "../components/PokeHeader";
import { PokeList } from "../components/PokeList";
import { PokeCard } from "../components/PokeCard";
import { PokeSearch } from "../components/PokeSearch";
import { usePokedex } from "./usePokedex";

function App() {
  const { loading, searchValue, setSearchValue, searchedPokemons } =
    usePokedex();
  return (
    <React.Fragment>
      <PokeHeader>
        <PokeSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        ></PokeSearch>
      </PokeHeader>
      <main>
        <PokeList loading={loading} searchedPokemons={searchedPokemons}>
          {(pokemon) => (
            <PokeCard
              key={pokemon.id}
              pokeNumber={pokemon.id}
              pokeName={pokemon.name}
              pokeImg={pokemon.sprites.front_default}
              pokeType={pokemon.types}
            />
          )}
        </PokeList>
      </main>
    </React.Fragment>
  );
}

export default App;
