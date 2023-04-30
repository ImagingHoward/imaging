import React from "react";
import classes from "./selected-publications.module.sass";

import SelectedPublicationsList from '../../../../data/selected-publicationsL-list';

const SelectedPublications = () => {
  return (
    <div className={classes.wrapper}>
      <ul>
        {SelectedPublicationsList.map((research) => (
          <>
            <li>
              <span>{research.author} </span>
              <span className={classes.title}>{research.title} </span>
              <span>{research.info} </span>
              {research.publish.map((publish) => (
                <a href={publish.publishLink} target="_blank" rel="noreferrer">
                  {publish.publish}
                </a>
              ))}
            </li>
          </>
        ))}
      </ul>
    </div>
  );
};

export default SelectedPublications;