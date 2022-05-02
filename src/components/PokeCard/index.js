import React from "react";
import "./PokeCard.scss";

function PokeCard(props) {
  return (
    <li className="PokeCard--container">
      <h2 className="Pokemon-number">N.{props.pokeNumber}</h2>
      <figure>
        <a href="#">
          <img src={props.pokeImg} alt={props.pokeName}></img>
        </a>
      </figure>
      <h2 className="Pokemon-name">{props.pokeName}</h2>
      <div className="Poketypes">
        <div className="main-type type">
          <p>{props.pokeMainType}</p>
        </div>
        <div className="sub-type type">
          <p>{props.pokeSubType}</p>
        </div>
      </div>
    </li>
  );
}

export { PokeCard };
