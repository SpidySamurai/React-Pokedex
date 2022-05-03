import React from "react";
import "./PokeHeader.scss";

function PokeHeader(props) {
  return (
    <header className="PokeHeader">
      <div className="PokeHeader-wrapper">
        <nav>
          <a href="#">Pokedex</a>
        </nav>
        {props.children}
      </div>
    </header>
  );
}

export { PokeHeader };
