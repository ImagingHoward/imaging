import React from "react";

import Person from "./common/person.component";

import nzechari from "../../../../assets/images/Naomi H. Zecharias.jpg";

const Nzechari = () => {
  const person = {
    image: nzechari,
    name: "Naomi H. Zecharias",
    title: "Student Intern",
    phone: "",
    email: "nzechari@mit.edu",
    biography: `
    Naomi Zecharias is a rising fourth year at the Massachusetts Institute of Technology studying Biological Engineering with concentrations in Computational Systems and Biomechanics. This summer at the Howard University Molecular Imaging Lab, she is working on designing a stabilizing cradle containing an anesthesia delivery construct for MRI imaging of rats. Furthermore, she is assisting in developing microglia identification data for use in training the lab’s microglia identification machine learning models. Following graduation, Naomi hopes to pursue medicine. In her free time, she loves to read (her current book is Half of a Yellow Sun by Chimamanda Ngozi Adichie).
    `,
    areasofExpertise: [],
    publicationsList: ''
  };
  
  return (<Person person={person} />);
};

export default Nzechari;
