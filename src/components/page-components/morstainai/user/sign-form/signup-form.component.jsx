import React, { useState }  from "react";
import classes from "./signup-form.module.sass";

import NavBar from "../../base/navbar/nav-bar.component";
import background from "../../assets/signin.png";

import { FormProvider, useForm } from "react-hook-form";
import { GrMail } from "react-icons/gr";

import { Input } from "../../../../base-components/singup/Input";

import {
  name_validation,
  email_validation,
  firstname_validation,
  lastname_validation,
  organization_validation,
  password_validation,
  comfirmpassword_validation
} from "../../../../../utils/inputValidations";

const SignUpForm = () => {
  
  const methods = useForm();
  const [success, setSuccess] = useState(false);
  const [agree, setAgree] = useState(false);

  const [userInfo, setUserInfo] = useState({
    firstname: "",
    lastname: "",
    organization: "",
    email: "",
    password: "",
    comfirmpassword: ""
  });

  const onSubmit = methods.handleSubmit(async (data) => {
    
  });

  const buttonStyling = agree
    ? "p-5 rounded-md bg-blue-600 font-semibold text-white flex items-center gap-1 hover:bg-blue-800"
    : "p-5 rounded-md bg-gray-600 font-semibold text-white flex items-center gap-1";


  return (
    <>
      <NavBar />
      <div className={classes.wrapper}>
        {/* <div className={classes.usernav}>
          <a href="/morstainai/user"> SignIn</a>
        </div> */}
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

        <FormProvider {...methods}>
          <form
            onSubmit={(e) => e.preventDefault()}
            noValidate
            autoComplete="off"
            className="container"
          >
            <div className="grid gap-5 md:grid-cols-2">
              <Input
                {...firstname_validation}
                value={userInfo.firstname}
                userInfo={userInfo}
                setUserInfo={setUserInfo}
              />
              <Input
                {...lastname_validation}
                value={userInfo.lastname}
                userInfo={userInfo}
                setUserInfo={setUserInfo}
              />
              <Input
                {...organization_validation}
                value={userInfo.organization}
                userInfo={userInfo}
                setUserInfo={setUserInfo}
              />
              <Input
                {...email_validation}
                value={userInfo.email}
                userInfo={userInfo}
                setUserInfo={setUserInfo}
              />
              <Input
                {...password_validation}
                value={userInfo.password}
                userInfo={userInfo}
                setUserInfo={setUserInfo}
              />
              <Input
                {...comfirmpassword_validation}
                value={userInfo.comfirmpassword}
                userInfo={userInfo}
                setUserInfo={setUserInfo}
              />
            </div>
            <div className="mt-5">
              <div className="font-semibold mb-6 flex items-center gap-1">
                <input
                  type="checkbox"
                  onClick={() => {
                    setAgree(!agree);
                  }}
                />{" "}
                Agree: xxxxxxxxxxxxxxxxxxxxxxxxx
              </div>
              <div className="flex justify-end">
                <button
                  onClick={onSubmit}
                  className={buttonStyling}
                  disabled={!agree ? true : false}
                >
                  Register
                </button>
              </div>
            </div>
          </form>
        </FormProvider>
      </div>
    </>
  );
};

export default SignUpForm;
