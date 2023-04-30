import React from "react";
import classes from "./supported-research-projects.module.sass";

import SupportedResearchProjectList from '../../../../data/supporte-research-project-list'

const SupportedResearchProjects = () => {
  return (
    <div className={classes.wrapper}>
      <ul>
        {SupportedResearchProjectList.map((research) => (
          <>
            <li>
              <span>{research.title}</span>
            </li>
            <div className={classes.supported}>{research.supoorted}</div>
          </>
        ))}
      </ul>
    </div>
  );
};

export default SupportedResearchProjects;