import React, { useRef, useState } from "react";
import classes from "./signin.module.sass";

import NavBar from "../../base/navbar/nav-bar.component";
import background from "../../assets/signin.png";
import { BsFillPersonFill } from "react-icons/bs";
import { HiArrowRight } from "react-icons/hi";

import { useForm } from "react-hook-form";
import axios from "axios";

const SignIn = () => {
  const [allow, SetAllow] = useState(null);

  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm({});

  const password = useRef({});

  password.current = watch("password", "");

  const onSubmit = async (data) => {
    const morstainURL = process.env.REACT_APP_MORSTAIN_URL;
    // const morstainURL = "http://localhost:3000";
    // console.log(data)

    axios
      .post(`${morstainURL}/singin`, {
        email: data.email,
        password: data.password,
      })
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("MORSTAIN_USER_PROFILE", JSON.stringify(res.data));
        if(res.data.allow)
          return (window.location = "/morstainai")
        else
          SetAllow(false);
      });
  };

  return (
    <>
      <NavBar />
      <div className={classes.wrapper}>
        <div className={classes.usernav}>
          <a href="/morstainai/user/singup"> Create your Mostain ID</a>
        </div>
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
          <div cl
          assName={classes.subtitle}>Manage Your MorStain ID</div>

          {allow === false && 
          <div className={classes.error}>Email or Password is Invalid!</div>}

          <form onSubmit={(e) => e.preventDefault()}>
            <div className={classes.morstainid}>
              {/* <input placeholder="Password" className={classes.input} />
                <input
                  placeholder="Comfirm Password"
                  className={classes.input}
                /> */}
              <label>Email</label>
              <input
                name="email"
                type="text"
                id="email"
                {...register("email", {
                  required: "required",
                  pattern: {
                    value:
                      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: "not valid",
                  },
                })}
              />
              {errors.email && <p>{errors.email.message}</p>}
              <label>Password</label>
              <input
                name="password"
                type="password"
                id="password"
                {...register("password", {
                  required: "You must specify a password",
                  minLength: {
                    value: 8,
                    message: "Password must have at least 8 characters",
                  },
                })}
              />
              {errors.password && <p>{errors.password.message}</p>}
              <label>Comfirm password</label>
              <input
                name="cpassword"
                type="password"
                id="cpassword"
                {...register("cpassword", {
                  validate: (value) =>
                    value === password.current || "The passwords do not match",
                })}
              />
              {errors.cpassword && <p>{errors.cpassword.message}</p>}
            </div>

            <input type="submit" onClick={handleSubmit(onSubmit)} value="Sing In" />
          </form>

          <div className={classes.rememberme}>
            <input type="checkbox" className={classes.checkbox} />
            Remember me
          </div>
          <div className={classes.forget}>
            <a href="/morstainai/user/forget-password"> Forget Morstain ID or Password?</a>
           </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
