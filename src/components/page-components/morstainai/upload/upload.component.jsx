import React from "react";
import classes from "./upload.module.sass";
import NavBar from "../base/navbar/nav-bar.component";
import Hero from "./hero/hero.component";

import background from "../assets/1_section_1214x509.png";
import { UploadForm } from "./form/form.component"; 

const ImageUpload = () => {
  return (
    <>
      <NavBar />
      <Hero
        background={background}
        // logo="MorStainAI"
        title="Automated Quantification"
        blur=" Give it a try on your microglial image!"
      />
      <div className={classes.wrapper}>
        <UploadForm />
      </div>
    </>
  );
};

export default ImageUpload;
