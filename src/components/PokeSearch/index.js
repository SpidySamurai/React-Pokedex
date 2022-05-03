import React from "react";
import "./PokeSearch.scss";

function PokeSearch(props) {
  const onSearchValueChange = (event) => {
    props.setSearchValue(event.target.value);
  };
  return (
    <div className="PokeSearch">
      <input
        placeholder="Busca un pokemon"
        value={props.searchValue}
        onChange={onSearchValueChange}
      />
    </div>
  );
}

export { PokeSearch };
