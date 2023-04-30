import React from "react";
import classes from "./test.module.sass";
import Hero from "../../base-components/hero/hero.component";

import { ImLab } from "react-icons/im";

import background from "../../../assets/images/Facilities.jpg";

const Test = () => {
  return (
    <>
      <Hero background={background} title="" />
      <div className={classes.wrapper}>
        <div className={classes.navPath}>
          HOME » <strong>Facilites</strong>
        </div>
        <div className={classes.blockHeader}>
          <div>
            <ImLab size={25} /> Test: Biomedical Imaging
          </div>
        </div>
      </div>
    </>
  );
};

export default Test;