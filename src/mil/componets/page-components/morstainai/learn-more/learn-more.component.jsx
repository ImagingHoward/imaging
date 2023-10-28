import React from "react";
import classes from "./learn-more.module.sass";
import NavBar from "../base/navbar/nav-bar.component";
import Hero from "../base/hero/hero.component";

import background from "../assets/signin.png";


const LearnMore = () => {
  return (
    <>
      <NavBar />
      <div className={classes.wrapper}>
        Learn More
      </div>
    </>
  );
};

export default LearnMore;
