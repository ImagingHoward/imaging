import React from "react";

import Person from "./common/person.component";

import julianna from "../../../../assets/images/Julianna Davidson.jpg";

const Julianna = () => {
  const person = {
    image: julianna,
    name: "Julianna Davidson",
    title: "Student Intern",
    phone: "",
    email: "julianna.davidson@bison.howard.edu",
    biography: `
    Julianna Davidson is a Biology major with a minor in Chemistry at Howard University. This summer, she is interning in Dr. Mark Burke's lab, where the research focuses on studying brain infection and disease in nonhuman primates. The lab primarily investigates the impacts of SIV, postnatal Zika virus, and fetal alcohol syndrome. Additionally, Julianna has been under the guidance of Dr. William Tu, where she has learned extensively about molecular imaging and computational science. Her ultimate career goal is to become a doctor specializing in internal medicine, with a deep passion for neuroscience driving heraspirations. Working in these labs allows her to gain invaluable hands-on experience and contribute to groundbreaking research in the field of neuroscience.
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

export default Julianna;
