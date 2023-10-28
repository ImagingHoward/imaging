import React, { useContext } from "react";

const UseUserContext = () => {
  return {
    info: localStorage.getItem("MORSTAIN_USER_PROFILE")
      ? JSON.parse(localStorage.getItem("MORSTAIN_USER_PROFILE"))
      : "",
  };
};

export default UseUserContext;
