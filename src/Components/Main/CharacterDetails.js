import classes from "./CharacterDetails.module.css";
import React from "react";
import ReactDom from "react-dom";

const CharacterDetails = (props) => {
  return ReactDom.createPortal(
    <div className={classes["modal-container"]} onClick={props.onClose}>
      <div className={classes["character-info"]}>
        <h1>{props.alias}</h1>
        <h2>About</h2>
        <p>{props.about}</p>
        <h2>{`Power & Abilities`}</h2>
        <ul>
          {props.abilities.map((ability) => {
            return <li>-{ability}</li>;
          })}
        </ul>
      </div>
      <div className={classes["character-image"]}>
        <img src={props.image_url_full} alt="" />
      </div>
    </div>,
    document.getElementById("portal")
  );
};

export default CharacterDetails;
