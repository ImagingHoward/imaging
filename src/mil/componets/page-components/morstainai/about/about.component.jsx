import React from "react";
import classes from "./about.module.sass";
import NavBar from "../base/navbar/nav-bar.component";
import Hero from "../base/hero/hero.component";

import background from "../assets/signin.png";


const About = () => {
  return (
    <>
      <NavBar />
      <div className={classes.wrapper}>
      About
      </div>
    </>
  );
};

export default About;
