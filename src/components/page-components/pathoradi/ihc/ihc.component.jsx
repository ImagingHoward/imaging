import React, { useRef, useEffect, useState } from "react";
import classes from "./ihc.module.sass";

import useZoomableSVG from "../../../../hook/useZoomableSvg";
import { FaBrain } from "react-icons/fa";
import CR1_slide_2_Mmap from "../../../../assets/CR1/CR1_slide_2_Mmap.jpg";

const Ihc = () => {
  const svgRef = useRef();
  const dimensions = useZoomableSVG(svgRef);

  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.navPath}>
          HOME » <a href="/pathoradi">PathRadi</a> » <strong>IHC</strong>
        </div>
        <div className={classes.blockHeader}>
          <div>
            <FaBrain size={25} /> IHC
          </div>
        </div>
        <div className={classes.ihcCanvas}>
          <svg ref={svgRef} style={{ width: "100%", height: "100%" }}>
            <g>
              <img className={classes.ihcCanvas} src={CR1_slide_2_Mmap} />
            </g>
          </svg>
        </div>
      </div>
    </>
  );
};

export default Ihc;
