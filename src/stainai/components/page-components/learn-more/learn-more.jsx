import React, { useState } from "react";
import classes from "./learn-more.module.sass";
import NavBar from "../../shared-components/navbar/nav-bar.component";
import Hero from "../../shared-components/hero/hero.component";
import axios from "axios";

import framwork from "../../../assets/framework.png";
import bottom from "../../../assets/bottom.png";
import morphotype_Icon from "../../../assets/morphotype_Icon.png";
import morphometry_Icon from "../../../assets/morphometry_Icon.png";
import whole_brain_Icon  from "../../../assets/whole_brain_Icon.png";

import { RiArrowDownSFill } from "react-icons/ri";
import { RiArrowDropUpFill } from "react-icons/ri";

const LearnMore = () => {
  const [morphotype, SetMorphotype] = useState(false);
  
  
  return (
    <div className={classes.wrapper}>
      <div className={classes.header}>
        <NavBar />
        <Hero logo="" title="" blur="" button="" url="" />
      </div>
      <div className={classes.section}>
        <div className={classes.intro}>
          <p>OUR EXPERTISE</p>
          <p className={classes.introHeader}>
            StainAI for Microglia Image Analysis
          </p>
          <p className={classes.introContent}>
             The StainAI system tackles the challenge of quantifying microglia images across the entire brain.
          </p>
          <p className={classes.introContent}>
            StainAI empolys multi-stage deep learning techniques to transform widely-used 20X low-magnification immunohistochemistry images of microglia into quantitative maps of morphological phenotypes and morphometrics, providing a surrogate microglial activation score (MA Score) for any selected region through simple ROI drawing.
          </p>
       
        </div>
        <div className={classes.framework}>
          <img src={framwork} />
          <div className={classes.frameworkContent}>
            <p>StainAI Framwork</p>
            <p className={classes.frameworkContentDetail}>
              StainAI integrates pipelines for Iba1 image
              curation and microglial cell database
              development and multi-stage deep
              learning system for processing
              whole-brain morphological
              maps.
            </p>
          </div>

        </div>
        <div className={classes.profolio}>
          <p className={classes.productProfolio}>PRODUCT PROFOLIO</p>

          <div className={classes.profolioSection}>
            <div className={classes.profolioSectionHeader}>
              <img src={morphotype_Icon} />
              <div className={classes.title}>Morphotype mapping</div>
            </div>
            <div className={classes.show}>
              Show more
              {!morphotype ? <RiArrowDownSFill size={30} /> : <RiArrowDropUpFill size={30} />}
            </div>
          </div>

          <div className={classes.profolioSection}>
            <div className={classes.profolioSectionHeader}>
              <img src={morphometry_Icon} />
              <div className={classes.title}>Morphometry mapping</div>
            </div>
            <div className={classes.show}>
              Show more 
              {<RiArrowDropUpFill size={40} />}
            </div>
          </div>

          <div className={classes.profolioSection}>
            <div className={classes.profolioSectionHeader}>
              <img src={morphometry_Icon} />
              <div className={classes.title}>Morphometry mapping</div>
            </div>
            <div className={classes.show}>
              Show more 
              {<RiArrowDownSFill size={30} />}
            </div>
          </div>

          <div className={classes.profolioSection}>
            <div className={classes.profolioSectionHeader}>
              <img src={whole_brain_Icon} />
              <div className={classes.title}>Whole brain distributiong</div>
            </div>
            <div className={classes.show}>
              Show more <RiArrowDownSFill size={30} />
            </div>
          </div>
        </div>
        <div className={classes.bottom}>
          <img src={bottom} />
          <div className={classes.bottomContent}>
            <p>Welcome for Partnership and Support</p>
            <div className={classes.button}>
            <a href="./contact-us">Contact</a>
            </div>
          </div>

        </div>
      </div>
    
    </div>
  );
};

export default LearnMore;
