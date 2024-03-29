import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import classes from "./no-access.module.sass";
import axios from "axios";

import NavBar from "../../base/navbar/nav-bar.component";
import background from "../../assets/signin.png";

const NoAccess = () => {
  return (
    <>
      <NavBar />

      <div className={classes.wrapper}>
        <div className={classes.signin}>
          <div
            className={classes.logo}
            style={{
              background: `url(${background}) center center / cover no-repeat`,
            }}
          >
            MorStainAI
          </div>
          {/* <div className={classes.title}>MorStain ID</div> */}
          {/* <div className={classes.subtitle}>Forget Your MorStain Password</div> */}

          <p className={classes.note}>
            You don't access right. Please <a href="/morstainai/user">Singin</a>{" "}
            or{" "}
            <a href="/morstainai/user/singup">Create your Mostain ID</a>.
          </p>
        </div>
      </div>
    </>
  );
};

export default NoAccess;