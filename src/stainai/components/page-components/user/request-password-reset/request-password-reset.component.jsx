import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import classes from "./request-password-reset.module.sass";
import background from "../../../../assets/signin.png";

import NavBar from "../../../shared-components/navbar/nav-bar.component";


const RequestPasswordReset = () => {
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm({});

  const onSubmit = async (data) => {
    const stainaiURL = process.env.REACT_APP_STAINAI_URL;

    // Send token, password, and cpassword to the backend
    try {
      const response = await fetch(`${stainaiURL}/user/request-password-reset`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: data.email
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
          <div className={classes.subtitle}>Forget Your MorStain Password</div>
          {/* Display success message */}
          {success && (
            <p className={classes.successMessage}>
              A password reset link has been sent to your email. Please check your inbox.
            </p>
          )}

          {/* Display error message */}
          {errorMessage && !success && (
            <p className={classes.errorMessage}>
              {errorMessage}
            </p>
          )}
          {!success &&
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
              </div>
              <input
                type="submit"
                onClick={handleSubmit(onSubmit)}
                value="Reset Password"
              />
            </form>
          }
        </div>
      </div>
    </>
  );
};

export default RequestPasswordReset;