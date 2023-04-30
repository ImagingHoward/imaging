import React from "react";

import Person from "./common/person.component";

import artur from "../../../../assets/images/Artur.jpg";

const Aagaronyan = () => {
  const person = {
    image: artur ,
    name: "Artur Agaronyan, BS",
    title: "PhD Student",
    phone: "(202) 865-7938",
    email: "agaronyan@cua.edu",
    biography: `
      Mr. Artur Agaronyan is a research assistant at the Molecular Imaging Laboratory whose research focuses on applying novel magnetic resonance imaging (MRI) technologies to study brain structure. His interests include brain analysis, segmentation, and registration in traumatic brain injury (TBI) by machine learning and atlas development. He joined the Molecular Imaging Laboratory in 2017. Originally from Yerevan, Armenia, Artur studied Materials Engineering at the University of Maryland.`,
    areasofExpertise: [
      "MRI – Brain Atlas",
      "Diffusion Tensor Imaging (DTI)",
      "Machine Learning",
    ],
    publicationsListLink:
      "https://www.ncbi.nlm.nih.gov/myncbi/artur.agaronyan.1/bibliography/public/",
  };
  return (
    <>
      <Person person={person}/>
    </>
  );
};

export default Aagaronyan;
