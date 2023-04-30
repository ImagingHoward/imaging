import React, { useEffect } from "react";
import classes from "./nav-bar.module.sass";
import { FaBars } from "react-icons/fa";

const NavBar = () => {
  useEffect(() => {
    function handleResize() {
      let x = document.getElementById("myLinks");
      let w = document.documentElement.clientWidth;
      if (w >= 1350) {
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
      <div className={classes.siteTopHat}>
        <div></div>
      </div>
      <header className={classes.siteHeader}>
        <div className={classes.compartment}>
          <a href="http://www2.howard.edu" className={classes.siteLogo}>
            Howard University
          </a>
          <h3>
            <a href="/">
              Molecular Imaging <br />
              Laboratory
            </a>
          </h3>
        </div>
        <a className={classes.faBars} onClick={menuExpand}>
          <FaBars size={32} />
        </a>
        <nav className={classes.nav} id="myLinks">
          <ul>
            <li>
              <a href="/">About Us</a>
            </li>
            <li>
              <a href="/research">Research</a>
            </li>
            <li>
              <a href="/facilities">Facilities</a>
            </li>
            <li>
              <a href="/people">People</a>
            </li>
            <li>
              <a href="/events">Events</a>
            </li>
            <li>
              <a href="/positions">Open Positions</a>
            </li>
            <li>
              <a href="/contact">Contact Us</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;