import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { GrMail } from "react-icons/gr";
import { BsFillCheckSquareFill } from "react-icons/bs";

import { Input } from "../../../../base-components/pathoradi/Input";
import {
  name_validation,
  email_validation,
  slide_validation,
  pixel_validation,
} from "../../../../../utils/inputValidations";

import uploadFileToBlob from "../../../../../utils/fileUpload";

import FileUpload from "../upload/file-upload/file-upload.component";

import axios from "axios";
import UseUserContext from "../../../../../hook/auth/user.hook";

export const UploadForm = () => {
  const methods = useForm();
  const [success, setSuccess] = useState(false);
  const [agree, setAgree] = useState(false);
  const user = UseUserContext();

  const [toUpload, setToUpload] = useState({
    username:  `${
      user.info
        .firstname
    } ${user.info.lastname}`,
    email:  
      user.info
        .email
    ,
    thickness: "",
    pixel: "",
    images: [],
  });

  const onSubmit = methods.handleSubmit(async (data) => {
    // const localURL = "http://localhost:3000/uploadInfo/create";
    // const prURL = process.env.REACT_APP_PATHO_RADI_URL;

    const morstainURL = process.env.REACT_APP_MORSTAIN_URL;
    // const morstainURL = "http://localhost:3000";

    const userid = user.info.userid;

    axios
      .post(`${morstainURL}/uploadInfo/create`, {
        username: toUpload.username,
        email: toUpload.email,
        thickness: toUpload.thickness,
        pixel: toUpload.pixel,
        images: toUpload.images,
        userid: userid,
      })
      .then((res) => {
        console.log(res.data.insertId);
        // upload image to blob storage

        methods.reset();
        setSuccess(true);
      });

    const containerName = "uploaded";

    const fileString = await uploadFileToBlob(
      toUpload.username,
      toUpload.rawImages
    );
    console.log("url string:", fileString);
  });

  const buttonStyling = agree
    ? "p-5 rounded-md bg-blue-600 font-semibold text-white flex items-center gap-1 hover:bg-blue-800"
    : "p-5 rounded-md bg-gray-600 font-semibold text-white flex items-center gap-1";

  const updateUploadedFiles = (files) => {
    console.log(files);
    setToUpload({
      ...toUpload,
      images: files.map((file) => file.name).join(","),
      rawImages: files,
    });
  };

  return (
    <>
      {success ? (
        <p className="font-semibold text-green-500 mb-10 mt-10 flex items-center justify-center gap-1">
          <BsFillCheckSquareFill /> Form has been submitted successfully
        </p>
      ) : (
        <FormProvider {...methods}>
          <div>
            UserName:{toUpload.username}
          </div>
          <div>
            Email:{toUpload.email}
          </div>
          <form
            onSubmit={(e) => e.preventDefault()}
            noValidate
            autoComplete="off"
            className="container"
          >
            <div className="grid gap-5 md:grid-cols-2">
              {/* <Input
                {...name_validation}
                value={user.info.firstname}
                toUpload={toUpload}
                setToUpload={setToUpload}
                // disabled={true}
              />
              <Input
                {...email_validation}
                value={user.info.email}
                toUpload={toUpload}
                setToUpload={setToUpload}
                // disabled={true}
              /> */}
              <Input
                {...slide_validation}
                value={toUpload.thickness}
                toUpload={toUpload}
                setToUpload={setToUpload}
              />
              <Input
                {...pixel_validation}
                value={toUpload.pixel}
                toUpload={toUpload}
                setToUpload={setToUpload}
              />
              {/* <Input {...password_validation} /> */}
              {/* <Input {...desc_validation} className="md:col-span-2" /> */}
            </div>
            <div>
              <div>
                <FileUpload
                  accept=".jpg,.png,.jpeg"
                  label="Upload raw image to get result"
                  multiple
                  updateFilesCb={updateUploadedFiles}
                />
              </div>
            </div>
            <div className="mt-5">
              {/* {success && (
                <p className="font-semibold text-green-500 mb-5 flex items-center gap-1">
                  <BsFillCheckSquareFill /> Form has been submitted successfully
                </p>
              )} */}
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
                  <GrMail />
                  Submit
                </button>
              </div>
            </div>
          </form>
        </FormProvider>
      )}
    </>
  );
};
