import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import classes from "./reset-password.module.sass";
import background from "../../../../assets/signin.png";

import NavBar from "../../../shared-components/navbar/nav-bar.component";


const ResetPasword = () => {
  let params = new URL(document.location).searchParams;
  const [token, SetToken] = useState(params.get("token"));
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

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

    if (data.password !== data.cpassword) {
      return;
    }

    // Send token, password, and cpassword to the backend
    try {
      const response = await fetch(`${stainaiURL}/user/reset-password`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token: token,
          password: data.password,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        // If the reset is successful, show success message
        setSuccess(true);
        setErrorMessage(null); // Clear any previous errors
      } else {
        // Handle failed password reset (e.g., token invalid)
        setSuccess(false);
        setErrorMessage(result.message || "An error occurred while resetting your password.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSuccess(false);
      setErrorMessage("An error occurred while processing your request.");
    }
  };

  return (
    <>
      <div className={classes.header}>
        <NavBar />
      </div>
      <div className={classes.wrapper}>
        <div className={classes.signin}>
          <div
            className={classes.logo}
            style={{
              background: `url(${background}) center center / cover no-repeat`,
            }}
          >
            STAIN.AI
          </div>
          <div className={classes.subtitle}>Reset Your STAIN.AI Password</div>

          {/* Display success message */}
          {success && (
            <p className={classes.successMessage}>
              Your password has been reset successfully. please <a href="/stainai/user/signin">click here</a> to sigin.
            </p>
          )}

          {/* Display error message */}
          {errorMessage && !success && (
            <p className={classes.errorMessage}>
              {errorMessage}
              <br />
              If you're having trouble, please <a href="/stainai/user/request-password-reset">click here</a> to request a new password reset link.
            </p>
          )}

          {
            !success &&
            <form onSubmit={(e) => e.preventDefault()}>
              <div className={classes.morstainid}>
                {/* <label>Email</label>
              <input
                name="email"
                type="text"
                id="email"
                value={email}
                disabled
              /> */}
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
          }
        </div>
      </div>
    </>
  );
};

export default ResetPasword;