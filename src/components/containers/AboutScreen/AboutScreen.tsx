import React from "react";
import classes from "./AboutScreen.module.css";

const AboutScreen: React.FC = () => (
  <div className="screen">
    <div>ABOUT</div>
    <div className={classes.userContainer}>
      <a
        href="https://zzhanna.github.io/rsschool-cv/"
        target="_blank"
        rel="noreferrer"
        className={classes.userLink}
      >
        <div className={classes.userOne}>Жанна</div>
      </a>
      <a
        href="https://mitjasha.github.io/rsschool-cv/"
        target="_blank"
        rel="noreferrer"
        className={classes.userLink}
      >
        <div className={classes.userTwo}>Дима</div>
      </a>
    </div>
  </div>
);

export default AboutScreen;
