import React from "react";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes["header-background"]}>
        <img
          src="images/logo.png"
          alt=""
          className={classes["header-logo"]}
        ></img>
      </div>
    </header>
  );
};

export default Header;
