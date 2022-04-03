import React from "react";
import Character from "./Character";
import classes from "./CharacterList.module.css";
import { AnimatePresence, motion } from "framer-motion";

const CharacterList = (props) => {
  return (
    <motion.div layout="position" className={classes["character-list"]}>
      <AnimatePresence>
        {props.characters.map((character) => {
          return (
            <Character
              key={character.id}
              image_url_head={character.image_url_head}
              image_url_full={character.image_url_full}
              alias={character.alias}
              about={character.about}
              abilities={character.abilities}
              gender={character.gender}
            />
          );
        })}
      </AnimatePresence>
    </motion.div>
  );
};

export default CharacterList;
