import React from "react";
import classes from "./morstainai.module.sass";
import NavBar from "../base/navbar/nav-bar.component";
import Hero from "./hero/hero.component";

import background from "../assets/home_hero.png";
import contentbg1 from "../assets/1_section.png";
import contentbg2 from "../assets/2_section.png";
import contentbg3 from "../assets/3_section.png";
import icon1 from "../assets/1_icon_50x50.png";
import icon2 from "../assets/2_icon_50x50.png";
import icon3 from "../assets/3_icon_50x50.png";
import Content from "./content/content.component";

const MorStainAI = () => {
  return (
    <>
      <NavBar />
      <Hero
        background={background}
        logo="MorStainAI"
        title="AI Stain of Cell Morphology on Whole Brain"
        blur=" MorStainAI is a website-as-a-service software package that can count & quantify morphological phenotypes of cells, even on low magnification immunohistochemistry images."
        button="Learn more"
      />
      <div className={classes.wrapper}>
        <Content
          contentbg={contentbg1}
          icon={icon1}
          heading="Automated Quantification"
          blur="Give it a try on your microglial image!"
          button="UPLOAD YOUR DATA"
          url="morstainai/upload"
        />
        <Content
          contentbg={contentbg2}
          icon={icon2}
          heading="Visualization & Analysis"
          blur="Interactive data quantification and statistical analysis."
          button="SEE YOUR RESULT"
        />
        <Content
          contentbg={contentbg3}
          icon={icon3}
          heading="Future Work"
          blur="AI-assisted radiologic-pathologic correlation analysis"
          button="COMING SOON"
        />
      </div>
    </>
  );
};

export default MorStainAI;
