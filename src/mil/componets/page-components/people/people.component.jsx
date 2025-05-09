import React from "react";
import classes from "./people.module.sass";

import { IoPersonCircleSharp } from "react-icons/io5";
import { HiArrowRight } from "react-icons/hi";
import { BsFillPersonFill } from "react-icons/bs";
import background from "../../../assets/images/People.jpg";
import PeopleList from "../../data/people-list";
import FormerMemberList from "../../data/former-member-list";

import NavBar from "../../base-components/navbar/nav-bar.component";
import Footer from "../../base-components/footer/footer.component";
import Hero from "../../base-components/hero/hero.component";

const People = () => {
  return (
    <>
      <NavBar />
      <Hero background={background} title="" />
      <div className={classes.wrapper}>
        <div className={classes.navPath}>
          HOME » <strong>People</strong>
        </div>
        {/* Current Member */}
        <div className={classes.blockHeader}>
          <div>
            <IoPersonCircleSharp size={30} /> Our Member
          </div>
        </div>
        <div className={classes.peopleBlock}>
          {PeopleList.map((person, idx) => (
            <div className={classes.card} key={`person${idx}`}>
              <div className={classes.people}>
                {person.image ? (
                  <img src={person.image} />
                ) : (
                  <BsFillPersonFill size={225} />
                )}
                <div className={classes.name}>{person.name}</div>
                <div className={classes.title}>
                  <p>{person.title} </p>
                  <p>{person.phone}</p>
                  <p>{person.email}</p>
                </div>
              </div>
              <div className={classes.viewMore}>
                <div>
                  <a href={person.moreInfo}>View More</a>
                </div>
                <div className={classes.narrow}>
                  <HiArrowRight size={15} />
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Former Member */}
        <div className={classes.blockHeader}>
          <div>
            <IoPersonCircleSharp size={30} /> Former Member
          </div>
        </div>
        <div className={classes.peopleBlock}>
          {FormerMemberList.map((person, idx) => (
            <div className={classes.card} key={`person${idx}`}>
              <div className={classes.people}>
                {person.image ? (
                  <img src={person.image} />
                ) : (
                  <BsFillPersonFill size={225} />
                )}
                <div className={classes.name}>{person.name}</div>
                <div className={classes.title}>
                  <p>{person.title} </p>
                  <p>{person.phone}</p>
                  <p>{person.email}</p>
                </div>
              </div>
              <div className={classes.viewMore}>
                <div>
                  <a href={person.moreInfo}>View More</a>
                </div>
                <div className={classes.narrow}>
                  <HiArrowRight size={15} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default People;