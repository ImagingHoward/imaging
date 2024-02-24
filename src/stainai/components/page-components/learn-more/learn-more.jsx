import React, { useState } from "react";
import classes from "./learn-more.module.sass";
import NavBar from "../../shared-components/navbar/nav-bar.component";
import Hero from "../../shared-components/hero/hero.component";
import axios from "axios";

const LearnMore = () => {
  
  return (
    <div className={classes.wrapper}>
      <div className={classes.header}>
        <NavBar />
        <Hero logo="" title="" blur="" button="" url="" />
      </div>
      <div >
        <div>
          
       
        </div>
      </div>
    </div>
  );
};

export default LearnMore;
