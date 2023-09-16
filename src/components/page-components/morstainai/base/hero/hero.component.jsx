import React from "react";
import classes from "./hero.module.sass";

const Hero = ({ background, logo, title, blur, button, url }) => {
  if(!background) return null
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
              <h1>{logo}</h1>
              <h2>{title}</h2>
              <h3> {blur}</h3>
            </div>
          </div>
          {button && (
            <a href={url} className={classes.button}>
              {button}
            </a>
          )}
        </li>
      </ol>
    </div>
  );
};

export default Hero;
