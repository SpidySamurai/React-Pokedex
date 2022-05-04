import React from "react";
import { PokeHeader } from "../components/PokeHeader";
import { PokeList } from "../components/PokeList";
import { PokeCard } from "../components/PokeCard";
import { PokeSearch } from "../components/PokeSearch";
import { usePokedex } from "./usePokedex";
import PokeDescription from "../components/PokeDescription";

import { BrowserRouter as Router, Link, Route } from "react-router-dom";

function App() {
  const { loading, searchValue, setSearchValue, searchedPokemons } =
    usePokedex();
  const [selectedPokemon, setSelectedPokemon] = React.useState({});
  return (
    <React.Fragment>
      <PokeHeader>
        <PokeSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        ></PokeSearch>
      </PokeHeader>
      <main>
        <Router>
          <Route path="/react-cura-deuda" exact>
            <PokeList loading={loading} searchedPokemons={searchedPokemons}>
              {(pokemon) => (
                <PokeCard
                  key={pokemon.id}
                  pokeNumber={pokemon.id}
                  pokeName={pokemon.name}
                  pokeImg={pokemon.sprites.front_default}
                  pokeType={pokemon.types}
                  pokemon={pokemon}
                  setPokemon={setSelectedPokemon}
                />
              )}
            </PokeList>
          </Route>
          <Route path="/pokemon/:name" exact>
            <PokeDescription pokemon={selectedPokemon} />
          </Route>
        </Router>
      </main>
    </React.Fragment>
  );
}

export default App;
