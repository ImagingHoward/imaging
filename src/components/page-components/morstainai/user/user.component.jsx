import React from "react";
import classes from "./user.module.sass";

import NavBar from "../base/navbar/nav-bar.component";
import SignIn from "./signin/signin.component";

const User = () => {
  return (
    <>
        <NavBar />
        <SignIn />
    </>
  );
};

export default User;
