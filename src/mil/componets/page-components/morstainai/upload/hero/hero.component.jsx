import React from "react";
import classes from "./hero.module.sass";

const Hero = ({ background, title, blur }) => {
  return (
    <div className={classes.wrapper}>
      <ol>
        <li
          className={classes.hero}
          style={{
            background: `url(${background}) center center / cover no-repeat`,
          }}
        >
          <div className={classes.compartment}>
            <div className={classes.heroContent}>
              <h2>{title}</h2>
              <h3>{blur}</h3>
            
            </div>
          </div>
        </li>
      </ol>
    </div>
  );
};

export default Hero;
