import React from "react";

import Person from "./common/person.component";

import essiet from "../../../../assets/images/essiet-adidongEtte.jpeg";

const Essiet = () => {
  const person = {
    image: essiet,
    name: "Essiet-Adidiong Ette",
    title: "CZI NDCF Research Fellow",
    phone: "",
    email: "essietadid.ette@howard.edu",
    biography: `
      Essiet-Adidiong Ette is a post-bac computational neuroscience research fellow at Howard University. She is a current member of the inaugural cohort of the neurodegeneration computational fellows training program. Her research interests are centered around applying computational methods to neuroimaging techniques to facilitate more comprehensive diagnoses of neurologic conditions such as traumatic brain injury. She bridges experimental and computational approaches to gain further insights into understanding the nervous system and how it is affected during injury. Currently, her focus is on using computational models to quantify and qualify microglia morphology and deciphering whether these findings from histology have overlap with other neuroimaging results. In the future she hopes to work to create adaptive personalized treatments for rehabilitation through the development of brain computer interfaces and advanced computational methods.
      <br /><br />

      Ms. Ette graduated from Howard University in three years with a BS in Biology and a minor in Chemistry in 2023. She will be matriculating to Boston University to receive her PhD in 2025.`,
    areasofExpertise: [],
    publicationsList:'',
  };
  
  return (<Person person={person} />);
};

export default Essiet;
