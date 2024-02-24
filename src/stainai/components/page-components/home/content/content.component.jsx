import React from "react";
import classes from "./content.module.sass";

const Content = ({ key, contentbg, icon, heading, blur, button, url, isSmallScreen }) => {
  // console.log(contentbg)
  return (
    <div className={classes.wrapper}>
      <div
        className={classes.content}
        style={{
          background: `url(${!isSmallScreen && contentbg}) center center / cover no-repeat`,
        }}
      >
        <div className={classes.section}>
            <div className={classes.heading}>
                <img src={icon} />
                {heading}
            </div>
            <div className={classes.blur}>
              {blur}
              {isSmallScreen ? <img src={contentbg} /> : ''}
            </div>
            
            <div className={classes.button}>
              
                <a href={url}>{button}</a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
