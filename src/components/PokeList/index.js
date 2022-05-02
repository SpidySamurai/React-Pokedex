import React from "react";
import "./PokeList.scss";

function PokeList(props) {
  return (
    <section className="PokeList--container">
      <ul>{props.searchedPokemons.map(props.children)}</ul>
    </section>
  );
}
export { PokeList };
