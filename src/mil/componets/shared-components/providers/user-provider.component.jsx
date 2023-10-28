import React, { useCallback, useState } from "react";
import { UserContext } from "../../../hook/auth/user.hook";

const UserProvider = (props) => {
  const [state, setState] = useState();


  localStorage.getItem("STAINAI_USER_PROFILE") &&setState(() => ({
    info: JSON.parse(localStorage.getItem("STAINAI_USER_PROFILE"))
  }));

  return (
    <UserContext.Provider value={{ ...state }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserProvider;
