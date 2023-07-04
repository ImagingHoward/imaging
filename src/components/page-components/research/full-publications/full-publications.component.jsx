import React from "react";
import classes from "./full-publications.module.sass";

import NavBar from "../../../base-components/navbar/nav-bar.component";
import Footer from "../../../base-components/footer/footer.component";

import { IoMdPaper } from "react-icons/io";
import FullPublicationsList from "../../../../data/full-publications-list";

const FullPublications = () => {
  return (
    <>
      <NavBar />
      <div className={classes.wrapper}>
        <div className={classes.navPath}>
          HOME » RESEARCH » <strong>Full Publications</strong>
        </div>
        <div className={classes.blockHeader}>
          <div>
            <IoMdPaper size={28} /> Full Publications
          </div>
        </div>
        <ul>
          {FullPublicationsList.map((research) => (
            <>
              <li>
                <span>{research.author} </span>
                <span className={classes.title}>{research.title} </span>
                <span>{research.info} </span>
                {research.publish &&
                  research.publish.map((publish) => (
                    <a
                      href={publish.publishLink}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {publish.publish}
                    </a>
                  ))}
              </li>
            </>
          ))}
        </ul>
      </div>
      <Footer />
    </>
  );
};

export default FullPublications;