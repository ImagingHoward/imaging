import React from "react";
import classes from "./morstainai.sass";
import NavBar from "./base/navbar/nav-bar.component";
import Hero from "./base/hero/hero.component";

import background from "./assets/home_hero.png";

const MorStainAI = () => {
  return (
    <div className={classes.wrapper}>
      <NavBar />
      <Hero
        background={background}
        logo="MorStainAI"
        title="AI Stain of Cell Morphology on Whole Brain"
        blur=" MorStainAI is a website-as-a-service software package that can count & quantify morphological phenotypes of cells, even on low magnification imuunohistochemistry images."
        button="Learn more"
      />
      morstainai
    </div>
  );
};

export default MorStainAI;
