import React, { useState, useEffect } from "react";
import classes from "./home.module.sass";
import NavBar from "../../shared-components/navbar/nav-bar.component";
import Hero from "../../shared-components/hero/hero.component";

import contentbg1 from "../../../assets/1_section.png";
import contentbg1_small from "../../../assets/APP files/Homepage/Section 1/Section 1.svg";
import contentbg2 from "../../../assets/2_section.png";
import contentbg2_small from "../../../assets/APP files/Homepage/Section 2/Section 2.svg";
import contentbg3 from "../../../assets/3_section.png";
import contentbg3_small from "../../../assets/APP files/Homepage/Section 3/Section 3_2.svg";
import icon1 from "../../../assets/1_icon_50x50.png";
import icon2 from "../../../assets/2_icon_50x50.png";
import icon3 from "../../../assets/3_icon_50x50.png";
import background from "../../../assets/home_hero.png";
import Content from "./content/content.component";

const StainAI = () => {
  // const isSmallScreen = window.innerWidth < 690;

  const [isSmallScreen, setIsSmallScreen ] = useState(window.innerWidth < 690);

  useEffect(() =>{
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 690);
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };

  }, [])

  return (
    <>
      <div className={classes.header}>
        <NavBar />
        <Hero
          logo="Stain.AI"
          title="AI Stain of Cell Morphology on Whole Brain"
          blur=" Stain.AI is a website-as-a-service software package that can count & quantify morphological phenotypes of cells, even on low magnification immunohistochemistry images."
          button="Learn more"
          url="/stainai/learn-more"
        />
      </div>
      <div className={classes.section}>
        
        <Content
          // key={isSmallScreen ? "smallScreen" : "largeScreen"}
          contentbg={isSmallScreen ? contentbg1_small : contentbg1}
          isSmallScreen={isSmallScreen}
          icon={icon1}
          heading="Automated Quantification"
          blur="Give it a try on your microglial image!"
          button="UPLOAD YOUR DATA"
          url="/stainai/upload-image"
        />
        <Content
          // key={isSmallScreen ? "smallScreen" : "largeScreen"}
          contentbg={isSmallScreen ? contentbg2_small : contentbg2}
          isSmallScreen={isSmallScreen}
          icon={icon2}
          heading="Visualization & Analysis"
          blur="Interactive data quantification and statistical analysis."
          button="SEE YOUR RESULT"
          url="http://stainai.howard.edu/webapps/home/session.html?app=Microglia_MorpMap%2FMicroglia_MorpMap"
        />
        <Content
          // key={isSmallScreen ? "smallScreen" : "largeScreen"}
          contentbg={isSmallScreen ? contentbg3_small : contentbg3}
          isSmallScreen={isSmallScreen}
          icon={icon3}
          heading="Future Work"
          blur="AI-assisted radiologic-pathologic correlation analysis"
          button="COMING SOON"
          url="#"
        />
      </div>
    </>
  );
};

export default StainAI;
