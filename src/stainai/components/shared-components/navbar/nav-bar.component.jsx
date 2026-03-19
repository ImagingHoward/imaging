import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./nav-bar.module.sass";

import { FaBars } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import logo from "../../../assets/logo.png";
import hulogo from "../../../assets/hu_log.svg";

import UserContext from "../../../hook/auth/user.hook";

const NavBar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLogout = () => {
    try {
      localStorage.removeItem("STAINAI_USER_PROFILE");
      localStorage.removeItem("STAINAI_ACCESS_TOKEN");
    } catch (e) {}

    setUser(null);

    const iframe = document.createElement("iframe");
    iframe.style.display = "none";
    iframe.src = "https://stainaiviewer.azurewebsites.net/auth/logout-silent/";
    document.body.appendChild(iframe);

    setTimeout(() => {
      iframe.remove();
    }, 3000);
  };

  // Newly added function to handle opening the viewer with token authentication
  const handleOpenViewer = async (e) => {
    e.preventDefault();

    try {
      const stainaiURL = process.env.REACT_APP_STAINAI_URL;
      const storedUser = localStorage.getItem("STAINAI_USER_PROFILE");
      const parsedUser = storedUser ? JSON.parse(storedUser) : null;

      if (!parsedUser) {
        // window.location.href = "/stainai/user/signin";
        // return;
        // Open the viewer in a new tab and redirect to signin page in the current tab
        window.open("about:blank", "stainaiViewerWindow");

        localStorage.setItem("STAINAI_AFTER_LOGIN", "open_viewer");
        window.location.href = "/stainai/user/signin";
        return;
      }

      const response = await fetch(`${stainaiURL}/user/create-viewer-token`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userid: parsedUser.userid,
          email: parsedUser.email,
          firstname: parsedUser.firstname,
          lastname: parsedUser.lastname,
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.token) {
        alert(result.message || "Failed to open viewer");
        return;
      }

      const viewerUrl = `https://stainaiviewer.azurewebsites.net/auth/login-bridge/?token=${encodeURIComponent(result.token)}`;
      window.open(viewerUrl, "_blank");
    } catch (error) {
      console.error("Error opening viewer:", error);
      alert("Failed to open viewer");
    }
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.logoGroup}>
        <img src={hulogo} className={classes.hulogo} onClick={() => window.location.href = 'https://howard.edu/'} />
        <img src={logo} className={classes.logo} onClick={() => window.location.href = '/stainai'} />
      </div>
      <div className={classes.desktopMenu}>
        <ul>
          <li>
            <a>ABOUT</a>
            <div className={classes.dropdownContent}>
              <a href="https://imaging.howard.edu/">Molecular Imaging Laboratory</a>
              <a href="/stainai/learn-more">About StainAI</a>
            </div>
          </li>
          <li>
            <a href="#">TRY IT</a>
            <div className={classes.dropdownContent}>
              <a href="/stainai/upload-images">Upload Your Data</a>
              <a href="#" onClick={handleOpenViewer}>See Your Result</a>
              <a href="https://stainaimicroglia.azurewebsites.net/" target="_blank">Stainai Microglia</a>
            </div>
          </li>
          <li>
            <a href="/stainai/contact-us">CONTACT US</a>
          </li>
          <li className={classes.login}>
            <BsFillPersonFill size={25} />
            {user ? <a href="/stainai/user/dashboard">{user?.firstname} {user?.lastname}</a> : <a href="/stainai/user/signin"> SIGNIN</a>}
          </li>
          <li>
            {user &&
              <a onClick={handleLogout}>
                Sign Out
              </a>
            }
          </li>
        </ul>
      </div>
      <div className={classes.mobileMenu}>
        <button onClick={toggleMobileMenu} className={classes.menuButton}>
          <FaBars size={32} />
        </button>
        {isMobileMenuOpen && (
          <div className={classes.mobileDropdown}>
            <ul>
              <li>About
                <ul>
                  <li>
                    <a href="https://imaging.howard.edu/">Molecular Imaging Laboratory</a>
                  </li>
                  <li>
                    <a href="/stainai/learn-more">About StainAI</a>
                  </li>
                </ul>
              </li>
              <li>Try it
                <ul>
                  <li>
                    <a href="/stainai/upload-images">Upload Your Data</a>
                  </li>
                  <li>
                    <a href="#" onClick={handleOpenViewer}>See Your Result</a>
                  </li>
                  <li>
                    <a href="https://stainaimicroglia.azurewebsites.net/" target="_blank">Stainai Microglia</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="/stainai/contact-us">CONTACT US</a>
              </li>
              <li>
                {user ? <a href="/stainai/user/dashboard">{user?.firstname} {user?.lastname} </a> : <a href="/stainai/user/signin">SIGNIN</a>}
              </li>
              <li>
                {user &&
                  <a onClick={handleLogout}>
                    Sign Out
                  </a>
                }
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;