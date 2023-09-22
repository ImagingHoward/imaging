import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import classes from "./reset.module.sass";
import axios from "axios";

import NavBar from "../../base/navbar/nav-bar.component";
import background from "../../assets/signin.png";

const Reset = () => {

  let params = new URL(document.location).searchParams;

  const [allow, Setallow] = useState(false);
  const [email, SetEmail] = useState(params.get("email"));
  const [token, SetToken] = useState(params.get("token"));
  
  // let email = params.get("email");
  // let token = params.get("token");

  if (!email && !token) return (window.location = "/morstainai/user");

  useEffect(() => {
    const morstainURL = process.env.REACT_APP_MORSTAIN_URL;
    //const morstainURL = "http://localhost:3000";

    axios
      .get(`${morstainURL}/resetPassword?email=${email}&token=${token}`)
      .then((res) => {
        console.log(res.data.allow);
        Setallow(res.data.allow);
      });
  }, [params]);


  const [success, setSuccess] = useState(false);
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

    axios
      .post(`${morstainURL}/resetPassword/update`, {
        email: email,
        token: token,
        password: data.password,
      })
      .then((res) => {
        // console.log(res.data);
        return (window.location = "/morstainai/user")
      });
  };

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
          <div className={classes.subtitle}>Reset Your MorStain Password</div>

          {allow ? (
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
                  value={email}
                  disabled
                />
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
                      value === password.current ||
                      "The passwords do not match",
                  })}
                />
                {errors.cpassword && <p>{errors.cpassword.message}</p>}
              </div>

              <input type="submit" onClick={handleSubmit(onSubmit)} value="Reset Password" />
            </form>
          ) : (
            <div className={classes.error}>
              Your email or toke is invalided. Please go back to{" "}
              <a href="/morstainai/user">sign in</a> page
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Reset;
