import React from "react";
import "./PokeCard.scss";

function PokeCard(props) {
  return (
    <li className="PokeCard--container">
      <h2 className="Pokemon-number">N.{props.pokeNumber}</h2>
      <figure>
        <a href="#">
          <img src={props.pokeImg} alt={props.pokeName} loading="lazy"></img>
        </a>
      </figure>
      <h2 className="Pokemon-name">{props.pokeName}</h2>
      <div className="Poketypes">
        <div className={`type ${props.pokeType[0].type.name}`}>
          <p>{props.pokeType[0].type.name}</p>
        </div>
        {props.pokeType[1] && (
          <div className={`type ${props.pokeType[1].type.name}`}>
            <p>{props.pokeType[1].type.name}</p>
          </div>
        )}
      </div>
    </li>
  );
}

export { PokeCard };
