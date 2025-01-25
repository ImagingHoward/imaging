import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import classes from "./register.module.sass";
import background from "../../../../assets/signin.png";

import NavBar from "../../../shared-components/navbar/nav-bar.component";

const Register = () => {
  const [success, setSuccess] = useState(false);
  const [isExist, setIsExist] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm({});

  const password = useRef({});
  password.current = watch("password", "");

  const onSubmit = async (data) => {
    try {
      const stainaiURL = process.env.REACT_APP_STAINAI_URL;

      const response = await fetch(`${stainaiURL}/user/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        // If registration is successful
        setSuccess(true);
        setIsExist(false);
      } else if (result.message === "Email already exists") {
        // If email already exists
        setIsExist(true);
        setSuccess(false);
      } else {
        // Handle other errors
        setSuccess(false);
        setIsExist(false);
        console.error("Unexpected error:", result);
      }
    } catch (error) {
      // Handle network or other errors
      console.error("Error during registration:", error);
      setSuccess(false);
      setIsExist(false);
    }
  };

  return (
    <>
      <div className={classes.header}>
        <NavBar />
      </div>
      <div className={classes.wrapper}>
        <div className={classes.signup}>
          <div
            className={classes.logo}
            style={{
              background: `url(${background}) center center / cover no-repeat`,
            }}
          >
            STAIN.AI
          </div>
          <div className={classes.title}>
            A STAIN.AI account grants you access to all AI-Stain services.
          </div>
        </div>
        {/* Display success message */}
        {success && (
          <p className={classes.successMessage}>
            Thank you for registering. Please check your Email.
          </p>
        )}
        {/* Display email exists message */}
        {!success && isExist && (
          <p className={classes.existsMessage}>
            Email already exists. Please use a different email.
          </p>
        )}

        {!success &&
          (<form onSubmit={(e) => e.preventDefault()}>
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
            <input
              type="submit"
              onClick={handleSubmit(onSubmit)}
              value="Register"
            />
          </form>
          )}
      </div>
    </>
  );
};

export default Register;