import React from "react";
import classes from "./person.module.sass";

import { IoPersonCircleSharp } from "react-icons/io5";
import { BsFillPersonFill } from "react-icons/bs";

import Footer from "../../../../base-components/footer/footer.component";
import NavBar from "../../../../base-components/navbar/nav-bar.component";

const Person = ({ person }) => {
  const {
    name,
    title,
    email,
    phone,
    biography,
    areasofExpertise,
    publicationsListLink,
    publicationsList,
  } = person;

  return (
    <>
      <NavBar />
      <div className={classes.wrapper}>
        <div className={classes.navPath}>
          HOME » <strong>People</strong>
        </div>
        <div className={classes.blockHeader}>
          <div>
            <IoPersonCircleSharp size={30} /> Biomedical Imaging
          </div>
        </div>
        <div className={classes.person}>
          <div className={classes.personInfo}>
            {person.image ? (
              <img src={person.image} />
            ) : (
              <BsFillPersonFill size={225} />
            )}
            <div>
              <div className={classes.name}>{name}</div>

              <div className={classes.title}>{title} </div>
            </div>
          </div>
          <div className={classes.biography}>
            <div className={classes.header}>Biography</div>
            <div dangerouslySetInnerHTML={{ __html: biography }}></div>
          </div>
          {
            areasofExpertise.length > 0 &&
            <div className={classes.expertise}>
              <div className={classes.header}>Areas of Expertise</div>
              <ul>
                {areasofExpertise.map((expertise) => (
                  <li>{expertise}</li>
                ))}
              </ul>
            </div>

          }

          <div className={classes.publications}>
            {publicationsListLink && (
              <>
                <div className={classes.header}>Publications List</div>
                <div>
                  <a
                    href={publicationsListLink}
                    target="_blank"
                    className={classes.link}
                  >
                    {person.publicationsListLink}
                  </a>
                </div>
              </>
            )}
            {publicationsList && (
              <div dangerouslySetInnerHTML={{ __html: publicationsList }}></div>
            )}
          </div>
          <div className={classes.contactIfon}>
            <div className={classes.header}>Contact Info</div>
            <div>Email: {email}</div>
            {
              phone &&
              <div>Tel: {phone}</div>
            }
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Person;