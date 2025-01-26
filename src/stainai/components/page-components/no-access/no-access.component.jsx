import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import classes from "./no-access.module.sass";
import axios from "axios";

import NavBar from "../../shared-components/navbar/nav-bar.component";
import background from "../../../assets/signin.png";

const NoAccess = () => {
  return (
    <div className={classes.note}>
      You don't access right. Please{" "}
      <a href="/stainai/user/signin">Singin</a> or{" "}
      <a href="/stainai/user/singup">Create your Mostain ID</a>.
    </div>
  );
};

export default NoAccess;