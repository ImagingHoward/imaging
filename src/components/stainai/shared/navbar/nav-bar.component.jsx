import React, { useEffect, useState, useRef } from "react";
import classes from "./nav-bar.module.sass";

import UseUserContext from "../../../../hook/auth/user.hook";
import logo from "../../assets/logo.png";

const NavBar = () => {
  const user = UseUserContext();

 
  return (
    <div className={classes.wrapper}>
       <img src={logo} className={classes.logo} />
       <nav className={classes.nav} id="myLinks">
          <ul>
            <li>
              <a href="/stainai/about">ABOUT</a>
            </li>
            <li>
              <a href="/stainai/try-it">TRY IT</a>
            </li>
            <li>
              <a href="/stainai/qa">Q&A</a>
            </li>
            <li>
              <a href="/stainai/contact-us">CONTACT US</a>
            </li>
          </ul>
        </nav>
    </div>
  );
};

export default NavBar;
