import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";

import classes from "./signup-form.module.sass";

import NavBar from "../../base/navbar/nav-bar.component";
import background from "../../assets/signin.png";
import axios from "axios";

const SignUpForm = () => {
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
      .post(`${morstainURL}/userInfo/create`, {
        firstname: data.firstname,
        lastname: data.lastname,
        organization: data.organization,
        email: data.email,
        // password: data.password,
      })
      .then((res) => {
        //console.log(res.data.insertId);
        setSuccess(true);
      });

    //-------------------------
    // Sign in
    // Post email/password 
    // return: allow (true/false) userUser()

    // check sign in or not to dsipaly user name on navbar!!

    // log out

    // user manage page
    
    // alert(JSON.stringify(data));
  };

  return (
    <>
      <NavBar />
      <div className={classes.wrapper}>
        <div className={classes.signup}>
          <div
            className={classes.logo}
            style={{
              background: `url(${background}) center center / cover no-repeat`,
            }}
          >
            MorStainAI
          </div>
          <div className={classes.title}>
            A MorStainAI account grants you access to all AI-Stain services.
          </div>
        </div>
        {success ? (
          <p className="font-semibold text-green-500 mb-10 mt-10 flex items-center justify-center gap-1">
            Thank you for register. Please check your Email.
          </p>
        ) : (
          <form onSubmit={(e) => e.preventDefault()}>
            <div>
              <label>First Name</label>
              <input
                name="firstname"
                type="text"
                id="firstname"
                {...register("firstname", {
                  required: "required",
                  maxLength: {
                    value: 30,
                    message: "30 characters max",
                  },
                })}
              />
              {errors.firstname && <p>{errors.firstname.message}</p>}

              <label>Last Name</label>
              <input
                name="lastname"
                type="text"
                id="lastname"
                {...register("lastname", {
                  required: "required",
                  maxLength: {
                    value: 30,
                    message: "30 characters max",
                  },
                })}
              />
              {errors.lastname && <p>{errors.lastname.message}</p>}
            </div>

            <label>Organization</label>
            <input
              name="organization"
              type="text"
              id="organization"
              {...register("organization", {
                required: "required",
                maxLength: {
                  value: 30,
                  message: "30 characters max",
                },
              })}
            />
            {errors.organization && <p>{errors.organization.message}</p>}

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

            {/* <label>Password</label>
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
            {errors.cpassword && <p>{errors.cpassword.message}</p>} */}
            
            <input type="submit" onClick={handleSubmit(onSubmit)} value="Register" />
          </form>
        )}
      </div>
    </>
  );
};

export default SignUpForm;
