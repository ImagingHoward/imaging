import React from "react";
import classes from "./support.module.sass";
import NavBar from "../base/navbar/nav-bar.component";
import Hero from "../base/hero/hero.component";

import background from "../assets/signin.png";


const Support = () => {
  return (
    <>
      <NavBar />
      <div className={classes.wrapper}>
      Support
      </div>
    </>
  );
};

export default Support;
