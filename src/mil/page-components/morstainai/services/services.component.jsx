import React from "react";
import classes from "./services.module.sass";
import NavBar from "../base/navbar/nav-bar.component";
import Hero from "../base/hero/hero.component";

import background from "../assets/signin.png";


const Services = () => {
  return (
    <>
      <NavBar />
      <div className={classes.wrapper}>
      Services
      </div>
    </>
  );
};

export default Services;
