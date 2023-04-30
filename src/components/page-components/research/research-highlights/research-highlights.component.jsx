import React from "react";
import classes from "./research-highlights.module.sass";

const ReasrchHighlights = ({ reaserchHighlightsList }) => {
  return (
    <>
      {reaserchHighlightsList.map((research) => (
        <div className={classes.researchHightlights}>
          <img src={research.researchImg} alt={research.title} />
          <div>
            <div>
              <h2 className={classes.title}>
                <a href={`research/${research.highlight}`}>{research.title}</a>
              </h2>
              <div className={classes.author}>{research.author}</div>
              <div>{research.description}</div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ReasrchHighlights;