import React from "react";

import Person from "./common/person.component";

const Sunny = () => {
  const person = {
    image: "" ,
    name: "Sunny Ji, B.S.",
    title: "Research Assistant",
    phone: "(202) 486-5681",
    email: "Sunnyji1016@gmail.com",
    biography: `Sunny Ji is a research assistant at the Molecular Imaging Laboratory in the Department of Radiology at Howard University. Since graduating from Virginia Tech with a Bachelor of Science in Biology, and a concentration in immunology and microbiology, Sunny has focused on clinical medicine and research. She is currently collaborating with Children’s National Hospital in utilizing Magnetic Resonance Imaging (MRI) to study the effects of anoxia on neonatal rat brains. Her work also involves integrating machine learning with histology to capture microglial cell morphology and segmentation. Additionally, she is working on a project to create a morphological atlas of microglial cells in the rat brain.`,
    areasofExpertise: ["Neuroimaging", "Neuropathology", "Machine Learning"],
    publicationsList:
      `In progress! `,
  };

  return (
    <>
      <Person person={person}/>
    </>
  );
  
};

export default Sunny;
