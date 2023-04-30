import React from "react";
import classes from "./research.module.sass";
import Hero from "../../base-components/hero/hero.component";
import ReasrchHighlights from "./research-highlights/research-highlights.component";

import background from "../../../assets/images/ResearchPage.jpg";
import SupportedResearchProjects from "./supported-research-projects/supported-research-projects.component";
import SelectedPublications from "./selected-publications/selected-publications.component";

import { IoMdPaper, IoMdPeople } from "react-icons/io";
import { GoMegaphone } from "react-icons/go";
import { HiArrowRight } from "react-icons/hi";

const Research = ({ reaserchHighlightsList }) => {
  return (
    <>
      <Hero background={background} title="" />
      <div className={classes.wrapper}>
        <div className={classes.navPath}>
          HOME » <strong>RESEARCH</strong>
        </div>
        <div className={classes.researchContent}>
          <div className={classes.header}>
            The <strong>M</strong>olecular <strong>I</strong>maging
            <strong>L</strong>aboratory provides state-of-the-art
            instrumentation and intellectual resources to support preclinical
            imaging research.
          </div>
          <div className={classes.blockHeader}>
            <div>
              <GoMegaphone size={28} /> Research Highlights
            </div>
          </div>
          <div className={classes.textBlock}>
            <ReasrchHighlights
              reaserchHighlightsList={reaserchHighlightsList}
            />
          </div>
          <div className={classes.blockHeader}>
            <div>
              <IoMdPeople size={30} /> Supported Research Projects
            </div>
          </div>
          <div className={classes.textBlock}>
            <SupportedResearchProjects />
          </div>
          <div className={classes.blockHeader}>
            <div>
              <IoMdPaper size={30} /> Selected Publications
            </div>
            <div className={classes.more}>
              <a href="/research/full">
                <div className={classes.flex}>
                  View Full Publications
                  <div className={classes.narrow}>
                    <HiArrowRight size={18} />
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className={classes.textBlock}>
            <SelectedPublications />
          </div>
        </div>
      </div>
    </>
  );
};

export default Research;