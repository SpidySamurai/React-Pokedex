import React from "react";
import "./PokeDescription.scss";
import "../PokeCard/PokeCard.scss";

import { withRouter } from "react-router-dom";

function PokeDescription({ pokemon }) {
  return (
    <section>
      <a href="/react-cura-deuda">Back </a>

      <div className="PokeDescription">
        <div className="PokeDescription__img-container">
          <div className="PokeDescription__img-container__name__number">
            <h2>Bulbasaur</h2>
            <p>N.1</p>
          </div>
          <figure>
            <img
              src={`${pokemon.sprites.front_default}`}
              alt={`${pokemon.name}`}
            ></img>
          </figure>
          <div className="Poketypes">
            <div className={`type ${pokemon.types[0].type.name}`}>
              <p>{pokemon.types[0].type.name}</p>
            </div>
            {pokemon.types[1] && (
              <div className={`type ${pokemon.types[1].type.name}`}>
                <p>{pokemon.types[1].type.name}</p>
              </div>
            )}
          </div>
        </div>
        <div className="PokeDescription__description-container">
          <div className="PokeDescription__description-container__description"></div>
          <div className="PokeDescription__description-container__specs">
            <div>
              <ul>
                <li>
                  <h3>Altura</h3>
                  <p>{pokemon.height / 10} m</p>
                </li>
                <li>
                  <h3>Peso</h3>
                  <p>{pokemon.weight / 10} kg</p>
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li>
                  <h3>Experiencia base</h3>
                  <p>{pokemon.base_experience} xp</p>
                </li>
                <li>
                  <h3>Habilidad</h3>
                  {pokemon.abilities.map((obj) => (
                    <p>{obj.ability.name}</p>
                  ))}
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li>
                  <h3>Puntos de vida</h3>
                  <p>{pokemon.stats[0].base_stat} PS</p>
                </li>
                <li>
                  <h3>Ataque</h3>
                  <p>{pokemon.stats[1].base_stat} AT</p>
                </li>
                <li>
                  <h3>Defensa</h3>
                  <p>{pokemon.stats[2].base_stat} DEF</p>
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li>
                  <h3>Ataque especial</h3>
                  <p>{pokemon.stats[3].base_stat} ATS</p>
                </li>
                <li>
                  <h3>Defensa especial</h3>
                  <p>{pokemon.stats[4].base_stat} DEFS</p>
                </li>
                <li>
                  <h3>Velocidad</h3>
                  <p>{pokemon.stats[5].base_stat} VEL</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default withRouter(PokeDescription);
