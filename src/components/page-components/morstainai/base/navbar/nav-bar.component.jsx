import React, { useEffect, useState } from "react";
import classes from "./nav-bar.module.sass";
import { FaBars } from "react-icons/fa";

import { BsFillPersonFill } from "react-icons/bs";

const NavBar = () => {
  const [authUser, setAuthUsers] = useState(
    JSON.parse(localStorage.getItem("MORSTAIN_USER_PROFILE")) || ""
  );

  useEffect(() => {
    function handleResize() {
      let x = document.getElementById("myLinks");
      let w = document.documentElement.clientWidth;
      if (w >= 890) {
        x.style.display = "flex";
      } else {
        x.style.display = "none";
      }
    }
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
      <header className={classes.siteHeader}>
        <div className={classes.compartment}>
          <h3>
            <a href="/morstainai">MorStainAI</a>
          </h3>
        </div>
        <a className={classes.faBars} onClick={menuExpand}>
          <FaBars size={32} />
        </a>
        <nav className={classes.nav} id="myLinks">
          <ul>
            <li>
              <a href="/morstainai">ABOUT</a>
            </li>
            <li>
              <a href="/morstainai">SERVICES</a>
            </li>
            <li>
              <a href="/morstainai">SUPPORT</a>
            </li>
            <li>
              <a href="/morstainai">CONTACT US</a>
            </li>
            <li className={classes.login}>
              <BsFillPersonFill size={25} />
              {authUser.firstname || authUser.lastname ? (
                <a href="/morstainai">
                  {" "}
                  {authUser.firstname} {authUser.lastname}{" "}
                </a>
              ) : (
                <a href="/morstainai/user">SIGNIN</a>
              )}
            </li>
            {(authUser.firstname || authUser.lastname) && (
              <li>
                <a href="/morstainai" onClick={()=>{
                  localStorage.removeItem("MORSTAIN_USER_PROFILE");
                  setAuthTokens("");
                }}>Log Out</a>
              </li>
            )}
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
