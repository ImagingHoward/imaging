import React from "react";
import classes from "./events.module.sass";
import Hero from "../../base-components/hero/hero.component";

import { MdOutlineEventAvailable } from "react-icons/md";
import background from "../../../assets/images/Events.jpg";

const Events = () => {
  return (
    <>
      <Hero background={background} title="" />
      <div className={classes.wrapper}>
        <div className={classes.navPath}>
          HOME » <strong>Events</strong>
        </div>
        <div className={classes.blockHeader}>
          <div>
            <MdOutlineEventAvailable size={25} /> Event Announcements
          </div>
        </div>
        <div className={classes.events}>
          Currently, there are no scheduled events planned.
        </div>
      </div>
    </>
  );
};

export default Events;