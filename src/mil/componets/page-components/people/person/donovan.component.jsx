import React from "react";

import Person from "./common/person.component";

import donovan from "../../../../assets/images/DonovanHanson.jpg";

const Donovan = () => {
  const person = {
    image: donovan,
    name: "Donovan Hanson, BS",
    title: "Student Intern",
    phone: "",
    email: "donovanh214@gmail.com",
    biography: `
    Donovan Hanson is a recent honors graduate from Howard University with Bachelor of Science in Psychology. Donovan is a current intern utilizing machine learning to identify and classify microglia cells in damaged brain tissue, while also innovating new equipment for MRI scanning. He has a strong interest in Neuropsychology and the cognitive function of individuals with brain injuries and neurodegenerative disorders. He plans on pursuing a Ph.D. in this field and he hopes this internship will further ignite his curiosity and professional experience in neuroscience. Donovan is very passionate about his education due to him being a first-generation graduate student, but he also loves photography, movies and listening to music.
    `,
    areasofExpertise: [],
    publicationsList: ''
  };
  
  return (<Person person={person} />);
};

export default Donovan;
