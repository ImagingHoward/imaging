import React from "react";
import classes from "./highlight.module.sass";
import { IoMdPaper } from "react-icons/io";

import NavBar from "../../../../base-components/navbar/nav-bar.component";
import Footer from "../../../../base-components/footer/footer.component";

const HighLight = ({ research }) => {
  return (
    <>
      <NavBar />
      <div className={classes.wrapper}>
        <div className={classes.navPath}>
          HOME » <strong>Research HighLight</strong>
        </div>
        <div className={classes.blockHeader}>
          <div>
            <IoMdPaper size={30} /> {research.title}
          </div>
        </div>

        <div>{research.description}</div>
        {research.hightlightImg &&
          research.hightlightImg.map((img) => (
            <div className={classes.imgBlur}>
              <img src={img.img} />

              <div dangerouslySetInnerHTML={{ __html: img.blur }} />
            </div>
          ))}
        <div className={classes.reference}>
          <h2>References</h2>
          <ul>
            {research.references &&
              research.references.map((reference) => (
                <li>
                  <div dangerouslySetInnerHTML={{ __html: reference }} />
                </li>
              ))}
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HighLight;
