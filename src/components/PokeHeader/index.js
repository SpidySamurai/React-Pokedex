import React from "react";
import "./PokeHeader.scss";

function PokeHeader(props) {
  return (
    <header className="PokeHeader">
      {/* <div className="PokeHeader-wrapper"></div> */}
      <nav>
        <a href="#">Pokedex</a>
        {/* <a href="#">Autor</a> */}
      </nav>
      {props.children}
    </header>
  );
}

export { PokeHeader };
