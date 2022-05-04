import React from "react";
import "./PokeHeader.scss";

function PokeHeader(props) {
  return (
    <header className="PokeHeader">
      <div className="PokeHeader-wrapper">
        <nav>
          <a href="/react-cura-deuda">Pokedex</a>
        </nav>
        {props.children}
      </div>
    </header>
  );
}

export { PokeHeader };
