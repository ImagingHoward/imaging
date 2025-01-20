import React, { useRef, useState, useContext } from "react";
import { useForm } from "react-hook-form";
import classes from "./signin.module.sass";
import NavBar from "../../../shared-components/navbar/nav-bar.component";
import background from "../../../../assets/signin.png";

import UserContext from "../../../../hook/auth/user.hook";

const SignIn = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const { user, setUser } = useContext(UserContext);

  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm({});

  const password = useRef({});

  password.current = watch("password", "");

  const onSubmit = async (data) => {
    const stainaiURL = process.env.REACT_APP_STAINAI_URL;
    try {
      const response = await fetch(`${stainaiURL}/user/signin`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        console.log(result)
        localStorage.setItem('STAINAI_USER_PROFILE', JSON.stringify(result.user));
        setUser(result.user);
        return (window.location = "/stainai");
      } else {
        setErrorMessage(result.message)
      }
    } catch (error) {
      // Handle network or other errors
      console.error("Error during signin:", error);
      setErrorMessage('Error during signin');
    }
  };

  return (
    <>
      <div className={classes.header}>
        <NavBar />
      </div>
      <div className={classes.wrapper}>
        <div className={classes.usernav}>
          <a href="/stainai/user/singup"> Create your STAIN.AI ID</a>
        </div>
        <div className={classes.signin}>
          <div
            className={classes.logo}
            style={{
              background: `url(${background}) center center / cover no-repeat`,
            }}
          >
            STAIN.AI
          </div>

          {errorMessage && (
            <div className={classes.errorMessage}>{errorMessage}</div>
          )}

          <form onSubmit={(e) => e.preventDefault()}>
            <div className={classes.morstainid}>
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
            </div>

            <input
              type="submit"
              onClick={handleSubmit(onSubmit)}
              value="Sing In"
            />
          </form>
          <div className={classes.forget}>
            <a href="/stainai/user/request-password-reset">
              Forget STAIN.AI ID Password?
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;