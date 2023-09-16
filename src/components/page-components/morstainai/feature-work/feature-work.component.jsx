import React from "react";
import classes from "./feature-work.module.sass";
import NavBar from "../base/navbar/nav-bar.component";
import Hero from "../base/hero/hero.component";

import background from "../assets/signin.png";


const FeatureWork = () => {
  return (
    <>
      <NavBar />
      <div className={classes.wrapper}>
      FeatureWork
      </div>
    </>
  );
};

export default FeatureWork;
