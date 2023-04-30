import React from "react";
import classes from "./pathoradi.module.sass";
import Hero from "../../base-components/hero/hero.component";

import { GiBrain } from "react-icons/gi";
import { FcPieChart } from "react-icons/fc";
import { AiFillCode } from "react-icons/ai";
import { MdWeb } from "react-icons/md";
import { HiArrowRight } from "react-icons/hi";

import background from "../../../assets/images/HomePage.jpg";
import SearchBox from "./searchBox/search-box.component";

const PathoRadi = () => {
  return (
    <>
      <Hero
        title="Visualization for IHC/MRI"
        subtitle=" Upload raw image to get result. "
        register="Upload"
      />
      <div className={classes.wrapper}>
        {/* <div className={classes.navPath}> 
          HOME » <strong>PathoRadi</strong>
        </div> */}
        <SearchBox />
        <div className={classes.blockHeader}>
          <div>
            <GiBrain size={25} /> PathoRadi
          </div>
          <div className={classes.more}>
            <a href="/pathoradi/ihc">
              <div className={classes.flex}>
                IHC
                <div className={classes.narrow}>
                  <HiArrowRight size={18} />
                </div>
              </div>
            </a>
          </div>
          {/* <div><a href="./pathoradi/ihc"> IHC </a></div> */}
        </div>

        {/* <div className={classes.content}>
            An interactive web server for AI-assisted radiologic-pathologic image analysis, correlation and visualization
        </div> */}
        <div className={classes.content}>
          Radiological imaging is a critical part of healthcare services which
          physicians rely heavily upon in the medical decision-making process. A
          major goal of modern radiology and imaging sciences is to exploit
          specialized biophysical modeling that simulates the biological process
          in the living tissue to generate sensitive imaging contrast for
          disease detection. In order to understand the relations between the
          simulated image contrast and the underlying pathophysiology,
          radiologic-pathologic image analysis has to be performed to validate
          the image correlations in tissue structure, pathology and disease
          characteristics. Given the complex microenvironments in the tissues,
          comparison of radiologic and pathologic images is particularly
          challenging.
        </div>
        <div className={classes.content}>
          Many of the routine analyses in the laboratories largely depend on
          manual or semi-automatic counting and segmentation of cells and
          tissues in the “gold standard” pathological images using commercially
          available software that are designed for general purposes. Researchers
          often have to give up an ample amount of information that shows in the
          pathological images but not quantifiable using the existing methods.
          This project aims to close the gap by utilizing deep learning
          methodology to extract the important features in the radiological and
          pathological images for quantitative analysis of the correlations
          previously unattainable in the community.
        </div>
        <div className={classes.content}>
          To address the challenges that persist in comparing radiologic and
          pathologic images, the technical aims of the project are divided into
          three aspects:
          <div className={classes.feture}>
            <div>
              <div className={classes.icon}>
                <AiFillCode size={90} color={"rgb(0 103 176)"} />
              </div>
              <div>
                Deep learning algorithms for quantifying cell morphological
                phenotypes in the whole brain sections,
              </div>
            </div>
            <div>
              <div className={classes.icon}>
                <FcPieChart size={90} color={"rgb(0 103 176)"} />
              </div>
              <div>
                A graphical and interactive statistic toolbox to visualize the
                radiologic-pathologic image correlation analysis,
              </div>
            </div>
            <div>
              <div className={classes.icon}>
                <MdWeb size={90} color={"rgb(0 103 176)"} />
              </div>
              <div>
                A website-as-a-service software package that implements
                computer-aided image analysis and database for
                radiologic-pathologic correlations in a user-friendly platform.
              </div>
            </div>
          </div>
        </div>
        <div className={classes.content}>
          The project outcome provides a novel deep learning methodology that
          can be used to standardize the benchmark evaluations in the
          development of radiological imaging biomarkers. The award enhances the
          graduate and undergraduate STEM education at the Howard University,
          with supports to a diverse and underrepresented cohort of the students
          in the biology and mathematics majors, through the use of cutting-edge
          artificial intelligence in the field of bioimaging research.
        </div>
        <div className={classes.registerSection}>
          <div>Ready to Get Started?</div>
          <a className={classes.register}>Register</a>
        </div>
      </div>
    </>
  );
};

export default PathoRadi;