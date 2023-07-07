import React from "react";
import classes from "./signin.module.sass";

import background from "../../assets/signin.png";
import { BsFillPersonFill } from "react-icons/bs";
import { HiArrowRight } from "react-icons/hi";

const SignIn = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.usernav}>Create your Mostain ID</div>
      <div className={classes.signin}>
        <div
          className={classes.logo}
          style={{
            background: `url(${background}) center center / cover no-repeat`,
          }}
        >
          MorStainAI
        </div>
        <div className={classes.title}>MorStain ID</div>
        <div className={classes.subtitle}>Manage Your MorStain ID</div>
        <div  className={classes.morstainid}>
            <input
                placeholder="MorStain ID"
                className={classes.input}
            />
             <HiArrowRight size={25} />
        </div>
        <div className={classes.rememberme}>
          <input type="checkbox" className={classes.checkbox} />
          Remember me
        </div>
        <div className={classes.forget}>Forget Morstain ID or Password?</div>
      </div>
    </div>
  );
};

export default SignIn;
