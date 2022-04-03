import React from "react";
import classes from "./CharacterFilter.module.css";

const CharacterFilter = (props) => {
  const nameFilterChange = (event) => {
    props.onNameFilterChange(event.target.value);
  };

  const factionFilterChange = (event) => {
    props.onFactionFilterChange(event.target.value);
  };
  return (
    <div className={classes["character-filter"]}>
      <input
        className={classes["character-filter__name"]}
        onChange={nameFilterChange}
      />
      <div
        onChange={factionFilterChange}
        className={classes["character-filter__factions"]}
      >
        <input type="radio" value="All" name="faction" defaultChecked /> All
        <input type="radio" value="Hero" name="faction" /> Hero
        <input type="radio" value="Villain" name="faction" /> Villain
      </div>
    </div>
  );
};

export default CharacterFilter;
