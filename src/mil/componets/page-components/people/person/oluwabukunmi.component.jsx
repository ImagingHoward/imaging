import React from "react";

import Person from "./common/person.component";

import oluwabukunmi from "../../../../assets/images/Oluwabukunmi Onapeju.jpg";

const Oluwabukunmi = () => {
  const person = {
    image: oluwabukunmi,
    name: "Oluwabukunmi Onapeju",
    title: "Student Intern",
    phone: "",
    email: "oluwabukunmi.onapej@bison.howard.edu",
    biography: `
    Kunmi Onapeju is a rising senior psychology major at Howard University from Allen, Texas. Ever fascinated by the effect of trauma on mental processes, she aims to one day treat mental diseases as a psychiatrist. At the Molecular Imaging Lab, Kunmi contributes to data collection for the development of a brain imaging analysis tool using deep learning. Additionally, she works toward enabling rat eye research by designing an animal holder. By the end of the internship, she hopes to understand how imaging technology and AI come together to spark innovation.
    `,
    areasofExpertise: [],
    publicationsList: ''
  };
  return (
    <>
      <Person person={person} />
    </>
  );
};

export default Oluwabukunmi;