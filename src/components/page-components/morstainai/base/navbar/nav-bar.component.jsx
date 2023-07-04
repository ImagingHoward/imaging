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
      <header className={classes.siteHeader}>
        <div className={classes.compartment}>
          <h3>
            <a href="/">MorStainAI</a>
          </h3>
        </div>
        <a className={classes.faBars} onClick={menuExpand}>
          <FaBars size={32} />
        </a>
        <nav className={classes.nav} id="myLinks">
          <ul>
            <li>
              <a href="/morstainai">About</a>
            </li>
            <li>
              <a href="/morstainai">Services</a>
            </li>
            <li>
              <a href="/morstainai">Support</a>
            </li>
            <li>
              <a href="/morstainai">Contant Us</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
