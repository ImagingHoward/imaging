import React from "react";
import classes from "./positions.module.sass";

import { BsFillPersonLinesFill } from "react-icons/bs";
import background from "../../../assets/images/Positions.jpg";

import NavBar from "../../base-components/navbar/nav-bar.component";
import Footer from "../../base-components/footer/footer.component";
import Hero from "../../base-components/hero/hero.component";

const Positions = () => {
  return (
    <>
      <NavBar />
      <Hero background={background} title="" />
      <div className={classes.wrapper}>
        <div className={classes.navPath}>
          HOME » <strong>Open Positions</strong>
        </div>
        <div className={classes.blockHeader}>
          <div>
            <BsFillPersonLinesFill size={25} /> Open Posistions
          </div>
        </div>
        <div className={classes.positions}>
          Currently, there are no scheduled events planned.
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Positions;