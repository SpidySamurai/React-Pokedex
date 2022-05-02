import React from "react";
import { PokeHeader } from "../PokeHeader";
import { PokeList } from "../PokeList";
import { PokeCard } from "../PokeCard";
import { PokeSearch } from "../PokeSearch";
import { usePokedex } from "../App/usePokedex";

function App() {
  const { searchedPokemons } = usePokedex();
  return (
    <React.Fragment>
      <PokeHeader>
        <PokeSearch></PokeSearch>
      </PokeHeader>
      <main>
        <PokeList searchedPokemons={searchedPokemons}>
          {(pokemon) => (
            <PokeCard
              key={pokemon.id}
              pokeNumber={pokemon.id}
              pokeName={pokemon.name}
              pokeImg={pokemon.sprites.front_default}
              pokeMainType={pokemon.types[0].type.name}
              // pokeSubType={pokemon.type[1].type.name}
            />
          )}
        </PokeList>
      </main>
    </React.Fragment>
  );
}

export default App;
