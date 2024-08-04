import React, { useState } from "react";
import classes from "./learn-more.module.sass";
import NavBar from "../../shared-components/navbar/nav-bar.component";
import Hero from "../../shared-components/hero/hero.component";
import axios from "axios";

import framwork from "../../../assets/framework.png";
import bottom from "../../../assets/bottom.png";
import morphotype_Icon from "../../../assets/morphotype_Icon.png";
import morphotype_Icon_section from "../../../assets/morphotype_Icon_section.png";
import morphotype_Icon_fig from "../../../assets/morphotype_Icon_fig.png";

import morphometry_Icon from "../../../assets/morphometry_Icon.png";
import morphometry_fig from "../../../assets/morphometry_fig.png";
import morphometry_rainbow from "../../../assets/morphometry_rainbow.png";

import whole_brain_Icon  from "../../../assets/whole_brain_Icon.png";
import whole_brain_fig from "../../../assets/whole_brain_fig.png";

import { RiArrowDownSFill } from "react-icons/ri";
import { RiArrowDropUpFill } from "react-icons/ri";

const LearnMore = () => {
  const [morphotypeExpand, setMorphotypeExpand] = useState(false);
  const [morphometryExpand, setMorphometryExpand] = useState(false);
  const [wholeBrainExpand, setWholeBrainExpand] = useState(false);
  

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
              <div className={classes.title}> 
                  <img src={morphotype_Icon} />
                  Morphotype mapping
                </div>
              <div className={classes.show} onClick={()=>  setMorphometryExpand(!morphometryExpand)}>
                {morphometryExpand ? "Show less" : "Show more"} 
                {morphometryExpand ? <RiArrowDropUpFill size={45} /> : <RiArrowDownSFill size={35} />}
              </div>
            </div>
      
            {
              morphometryExpand &&
              <div className={classes.expand}>
                <div className={classes.subtitle}> 
                  <i>Allow ROI analysis for region-specific comparison.</i> 
                </div>
                <div style={{ display: 'flex',  alignItems: 'center', padding: '0 10%', position: "relative" }}>
                  <div >
                    <p>
                      In cardiac arrest, microglia activation is prominent associated with regional vulnerability.
                    </p>
                    <p>
                      Label every cell with morphotype ID. Convert Iba1 images to color-coded quantitative maps. Simplify cell quantifications by drawing ROIs.
                    </p>
                  </div>
                  <div>
                    <img src={morphotype_Icon_section} style={{width: '450px'}}/>
                  </div>
                </div>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                  <img src={morphotype_Icon_fig} style={{width: '900px'}}/>
                </div>
              </div>
            }
          </div>


          <div className={classes.profolioSection}>
            <div className={classes.profolioSectionHeader}>
              <div className={classes.title}> <img src={morphometry_Icon} /> Morphometry mapping</div>
              <div className={classes.show} onClick={()=>  setMorphotypeExpand(!morphotypeExpand)}>
                {morphotypeExpand ? "Show less" : "Show more"} 
                {morphotypeExpand ? <RiArrowDropUpFill size={45} /> : <RiArrowDownSFill size={35} />}
              </div>
            </div>
         
            {
              morphotypeExpand &&
              <div className={classes.expand}>
                <div className={classes.subtitle}>
                  <i>More insights into hetergeneous microglial morphology.</i> 
                </div>
                <div style={{ display: 'flex',  alignItems: 'center', padding: '0 10%', position: "relative" }}>
                  <div >
                    <p>
                      StainAI derives more than 28 morphometric metrics for microglia providing parameters such as cell and soma area, perimeter, shape, skletonization, intracellular distances etc.
                    </p>
                    <img src={morphometry_fig} style={{width: '600px'}}/>

                  </div>
                  <div>
                    <img src={morphometry_rainbow} style={{width: '700px'}}/>
                  </div>
                </div>
              </div>
            }
          </div>

          <div className={classes.profolioSection}>
            <div className={classes.profolioSectionHeader}>
              <div className={classes.title}> <img src={whole_brain_Icon} /> Whole brain distributiong</div>
              <div className={classes.show} onClick={()=>  setWholeBrainExpand(!wholeBrainExpand)}>
                {wholeBrainExpand ? "Show less" : "Show more"} 
                {wholeBrainExpand ? <RiArrowDropUpFill size={45} /> : <RiArrowDownSFill size={35} />}
              </div>
            </div>
         
            {
              wholeBrainExpand &&
              <div className={classes.expand}>
                <div className={classes.subtitle}>
                  <i>Reveals microglial activation pattern throughout the entire brain.</i> 
                </div>
                <div style={{ display: 'flex', padding: '3% 10%', position: "relative" }}>
                  <div >
                    <p>
                      3D distribution of microglial morphotype and morphometrics.
                    </p>  
                  </div>
                  <div>
                    <img src={whole_brain_fig} style={{width: '650px'}}/>
                  </div>
                </div>
              </div>
            }
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
