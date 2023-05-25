import React from "react";
import classes from "./new-pathoradi.module.sass";

import Hero from "../../base-components/hero/hero.component";
// import SearchBox from "./searchBox/search-box.component";

import { GiBrain } from "react-icons/gi";
import { FcPieChart } from "react-icons/fc";
import { AiFillCode } from "react-icons/ai";
import { MdWeb } from "react-icons/md";
import { HiArrowRight } from "react-icons/hi";
import background from "../../../assets/new-pr/webbg.jpg";
import icon from "../../../assets/new-pr/icon.png";

const NewPathoRadi = () => {
  return (
    <>
      <div
        className={classes.background}
        style={{
          background: `url(${background})`,
        }}
      >
        
      </div>

      <div style={{backgroundColor: "#181b2c"}}> 
        <img src={icon} style={{width: "100px"}}/>
      </div>
    </>
  );
};

export default NewPathoRadi;
