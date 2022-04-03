import React, { useState, Fragment } from "react";
import classes from "./Character.module.css";
import CharacterDetails from "./CharacterDetails";
import { motion, AnimatePresence } from "framer-motion";

const Character = (props) => {
  const [showDetails, isShowDetails] = useState(false);

  const showDetailsHandler = () => {
    console.log("show");
    isShowDetails(true);
  };

  const hideDetailsHandler = () => {
    console.log("hide");
    isShowDetails(false);
  };

  return (
    <>
      <motion.div
        layout="position"
        className={classes["character__card"]}
        onClick={showDetailsHandler}
      >
        <img
          src={props.image_url_head}
          alt={props.alias}
          className={classes["character__image"]}
        ></img>
        <h3 className={classes["character__alias"]}>{props.alias}</h3>
      </motion.div>
      {showDetails && (
        <CharacterDetails onClose={hideDetailsHandler} {...props} />
      )}
    </>
  );
};

export default Character;
