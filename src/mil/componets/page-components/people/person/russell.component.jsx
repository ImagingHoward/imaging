import React from "react";

import Person from "./common/person.component";

import russell from "../../../../assets/images/Russell Antwi.jpg";

const Russell = () => {
  const person = {
    image: russell,
    name: "Russell O Antwi",
    title: "Student Intern",
    phone: "",
    email: "russell.antwi@bison.howard.edu",
    biography: `
    My name is Russell Antwi, and I am a senior Biology major at Howard University. Over the summer, I have had the privilege of working under Dr. Dominique Pritchett, focusing on interpreting gamma band oscillations through MATLAB to uncover potential links to schizophrenia. My career aspiration is to become a neurosurgeon, and this internship has been an invaluable opportunity to immerse myself in various scientific disciplines and explore their interconnectedness. Additionally, I have a deep passion for music, as I believe that sounds have a unique way of activating my dopamine response.
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

export default Russell;
