import { useEffect, useState } from "react";
import classes from "./form.module.sass";
import cn from "classnames";

import { FormProvider, useForm } from "react-hook-form";
import { GrMail } from "react-icons/gr";
import { BsFillCheckSquareFill } from "react-icons/bs";
import { FaUserCog } from "react-icons/fa";

import { Input } from "../../../../base-components/pathoradi/Input";
import {
  name_validation,
  email_validation,
  slide_validation,
  pixel_validation,
  project_validation,
  species_validation,
  treatment_validation,
  organ_validation,
  organ_other_validation,
  anatomical_validation,
  strain_validation,
  structure_validation,
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

  // Create a function for reusable perpose
  const generateRandomString = (myLength) => {
    const chars =
      "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz1234567890";
    const randomArray = Array.from(
      { length: myLength },
      (v, k) => chars[Math.floor(Math.random() * chars.length)]
    );

    const randomString = randomArray.join("");
    return randomString;
  };

  const [toUpload, setToUpload] = useState({
    username: `${user.info.firstname} ${user.info.lastname}`,
    email: user.info.email,
    project: `MorStain-${
      new Date().getMonth() + 1
    }${new Date().getDate()}${new Date().getFullYear()}-${generateRandomString(
      5
    )}`,
    pixel: "",
    slide: "",
    species: "rat",
    strain: "",
    organ: "brain",
    anatomical: "Cerebral Cortex",
    structure: "",
    treatment: "",
    images: [],
    status: "",
  });

  // console.log(toUpload)

  const onSubmit = methods.handleSubmit(async (data) => {
    // const localURL = "http://localhost:3000/uploadInfo/create";
    // const prURL = process.env.REACT_APP_PATHO_RADI_URL;

    const morstainURL = process.env.REACT_APP_MORSTAIN_URL;
    // const morstainURL = "http://localhost:3000";

    const userid = user.info.userid;
    // console.log(data)

    const STORAGE_URL = "https://pathoradi.blob.core.windows.net/uploaded"

    // console.log(toUpload.images);

    const images = toUpload.images.map(image => `${STORAGE_URL}/${toUpload.username}/${toUpload.project}/${image}`).join(', ')

    // console.log(images)

    axios
      .post(`${morstainURL}/uploadInfo/create`, {
        username: toUpload.username,
        project: toUpload.project,
        pixel: toUpload.pixel,
        slide: toUpload.slide,
        species: toUpload.species,
        strain: toUpload.strain,
        organ: toUpload.organ !== 'other' ? toUpload.organ : toUpload.other,
        anatomical: toUpload.anatomical,
        structure: toUpload.structure,
        treatment: toUpload.treatment,
        images: images,
        status: toUpload.status,
        userid: userid,
        email: user.info.email
      })
      .then((res) => {
        // console.log(res.data.insertId);
        
        methods.reset();
        setSuccess(true);
      });

    const containerName = "uploaded";

    const fileString = await uploadFileToBlob(
      toUpload.username,
      toUpload.project,
      toUpload.rawImages
    );

    // console.log("url string:", fileString);
  });

  const buttonStyling = agree
    ? "p-5 rounded-md bg-blue-600 font-semibold text-white flex items-center gap-1 hover:bg-blue-800"
    : "p-5 rounded-md bg-gray-600 font-semibold text-white flex items-center gap-1";

  const updateUploadedFiles = (files) => {
    // console.log(files);
    setToUpload({
      ...toUpload,
      images: files.map((file) => file.name),
      rawImages: files,
    });
  };

  const input_tailwind =
    "p-5 font-medium rounded-md w-full border border-slate-300 placeholder:opacity-60";

  useEffect(()=>{
    
    if(document.getElementById('organ').value === 'other'){
      document.getElementById('other').style.display = 'block'
    }
    else
      document.getElementById('other').style.display = 'none'

  },[toUpload, setToUpload])



  return (
    <>
      {success ? (
        <p className="font-semibold text-green-500 mb-10 mt-10 flex items-center justify-center gap-1">
          <BsFillCheckSquareFill /> Form has been submitted successfully
        </p>
      ) : (
        <FormProvider {...methods}>
          <form
            onSubmit={(e) => e.preventDefault()}
            noValidate
            autoComplete="off"
            className="container"
          >
            <div className={classes.userInfo}>
              <FaUserCog size={25} />
              <p>UserName: {toUpload.username}</p>
              <p>Email: {toUpload.email}</p>
            </div>
            <div className="grid gap-5 md:grid-cols-1 my-5">
              <Input
                {...project_validation}
                value={toUpload.project}
                toUpload={toUpload}
                setToUpload={setToUpload}
              />
              <Input
                {...pixel_validation}
                value={toUpload.pixel}
                toUpload={toUpload}
                setToUpload={setToUpload}
              />

              <Input
                {...slide_validation}
                value={toUpload.slide}
                toUpload={toUpload}
                setToUpload={setToUpload}
              />

              <Input
                {...species_validation}
                value={toUpload.species}
                toUpload={toUpload}
                setToUpload={setToUpload}
              />

              <Input
                {...strain_validation}
                value={toUpload.strain}
                toUpload={toUpload}
                setToUpload={setToUpload}
              />

              <Input
                {...organ_validation}
                value={toUpload.organ}
                toUpload={toUpload}
                setToUpload={setToUpload}
              />

              <Input
                {...organ_other_validation}
                value={toUpload.organ_other}
                toUpload={toUpload}
                setToUpload={setToUpload}
                className={classes.organOther}
              />

              <Input
                {...anatomical_validation}
                value={toUpload.anatomical}
                toUpload={toUpload}
                setToUpload={setToUpload}
              />

              <Input
                {...structure_validation}
                value={toUpload.structure}
                toUpload={toUpload}
                setToUpload={setToUpload}
              />

              <Input
                {...treatment_validation}
                value={toUpload.treatment}
                toUpload={toUpload}
                setToUpload={setToUpload}
              />

              {/* <label for="species" className="font-semibold capitalize">*Species</label>

              <select name="species" id="species" className={cn(input_tailwind)}>
                <option value="rat">rat</option>
                <option value="mouse">mouse</option>
                <option value="primate">primate</option>
                <option value="bovine">bovine</option>

                <option value="pig">pig</option>
                <option value="bovine">other</option>
              </select> */}

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
