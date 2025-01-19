import React from "react";
import classes from "./facility.module.sass";

import { ImLab } from "react-icons/im";
import { MdPhotoLibrary } from "react-icons/md";
import background from "../../../../assets/images/Facilities.jpg";

import NavBar from "../../../base-components/navbar/nav-bar.component";
import Footer from "../../../base-components/footer/footer.component";
import Hero from "../../../base-components/hero/hero.component";

const Facility = ({ facility }) => {
  return (
    <>
      <NavBar />
      <Hero background={background} title="" />
      <div className={classes.wrapper}>
        <div className={classes.navPath}>
          HOME » <strong>Facilites</strong>
        </div>
        <div className={classes.blockHeader}>
          <div>
            <ImLab size={25} /> {facility.title}: Biomedical Imaging
          </div>
        </div>

        <div dangerouslySetInnerHTML={{ __html: facility.blurb }} />

        {facility.fcilitiesItem?.map((item) => (
          <div className={classes.item}>
            <div dangerouslySetInnerHTML={{ __html: item.blurb }} />

            <img src={item.img} />
          </div>
        ))}

        {facility.sampleImg && (
          <div className={classes.blockHeader}>
            <div>
              <MdPhotoLibrary size={25} /> Sample Image
            </div>
          </div>
        )}
        {facility.sampleImg?.map((sample) => (
          <div className={classes.item}>
            <div dangerouslySetInnerHTML={{ __html: sample.blurb }} />
            <img src={sample.img} />
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Facility;