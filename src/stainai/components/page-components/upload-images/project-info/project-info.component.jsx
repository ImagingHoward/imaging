import React from "react";
import classes from "./project-info.module.sass";

import { FaUserCog, FaProjectDiagram } from "react-icons/fa";


const ProjectInfo = ({batches, setBatches}) => {
  return (
    <div className={classes.projectInfo}>
      <div className={classes.section}>
        <div>
          <FaUserCog />
        </div>
        <div>Use Name: {batches.username}</div>
        <div>Email: {batches.email}</div>
      </div>
      <div className={classes.section}>
        <div>
          <FaProjectDiagram />
        </div>
        <div>
          <label>*Project</label>
          <input
            name="Project"
            type="text"
            id="Project"
            defaultValue={batches.project}
            onChange={(e) => {
              props.setBatches(
                {
                  ...batches,
                  project: e.target.value
                })
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectInfo;