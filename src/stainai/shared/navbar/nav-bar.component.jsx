import React, { useState } from "react";
import classes from "./nav-bar.module.sass";

import { FaBars } from "react-icons/fa";

import UseUserContext from "../../../hook/auth/user.hook";
import logo from "../../assets/logo.png";

const NavBar = () => {
  const user = UseUserContext();
  const [isDropdownVisible, setDropdownVisible] = useState({
    about: false,
    tryIt: false,
  });

  const handleMouseEnter = (item) => {
    item === "about" && setDropdownVisible({about: true, tryIt: false});
    item === "tryIt" && setDropdownVisible({about: false, tryIt: true});
  };

  const handleMouseLeave = (item) => {
    item === "about" && setDropdownVisible({...isDropdownVisible, about: false});
    item === "tryIt" && setDropdownVisible({...isDropdownVisible, tryIt: false});
  };

  const menuExpand = () => {
    let x = document.getElementById("myLinks");
    if (x.style.display === "flex") {
      x.style.display = "none";
    } else {
      x.style.display = "flex";
    }
  };

  return (
    <div className={classes.wrapper}>
      <img src={logo} className={classes.logo} />
      <a className={classes.faBars} onClick={menuExpand}>
          <FaBars size={32} />
      </a>
      <nav className={classes.nav} id="myLinks">
        <ul>
          <li
            className={classes.dropItem}
            onMouseEnter={()=>handleMouseEnter('about')}
            onMouseLeave={()=>handleMouseLeave('about')}
          >
            <a href="#">ABOUT</a>
            {isDropdownVisible.about && (
              <div className={classes.dropContent}>
                <a href="https://imaging.howard.edu/">Molecular Imaging Laboratory</a>
                <a href="#">About StainAI</a>
              </div>
            )}
          </li>
          <li
            className={classes.dropItem}
            onMouseEnter={()=>handleMouseEnter('tryIt')}
            onMouseLeave={()=>handleMouseLeave('tryIt')}
          >
            <a href="#">TRY IT</a>
            {isDropdownVisible.tryIt && (
              <div className={classes.dropContent}>
                <a href="#">Upload Your Data</a>
                <a href="#">See Your Result</a>
              </div>
            )}
          </li>
          <li>
            <a href="#">Q&A</a>
          </li>
          <li>
            <a href="#">CONTACT US</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
