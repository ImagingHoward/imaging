import React, { useState, useRef } from "react";
import classes from "./upload.module.sass";
import Hero from "../../../base-components/hero/hero.component";

import { FaCloudUploadAlt } from "react-icons/fa";
import { MdCloudUpload } from "react-icons/md";
import FileUpload from "./file-upload/file-upload.component";

import axios from "axios";

import { send } from "emailjs-com";

const Upload = () => {
  const [toUpload, setToUpload] = useState({
    username: "",
    email: "",
    project: "",
    thickness: "",
    pixel: "",
    sample: "",
    rawImages: [],
  });

  const [submit, setSubmit] = useState(false);

  const updateUploadedFiles = (files) => {
    setToUpload({ ...toUpload, rawImages: files });
  };

  const handleChange = (e) => {
    setToUpload({ ...toUpload, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // need to checkout how to use Azuer node.js api
    // const localURL = 'http://localhost:3000/uploadInfo/create';
    // const pathoradiURL = 'https://prbase.azurewebsites.net/uploadInfo/create';
    console.log(process.env.REACT_APP_PATHO_RADI_URL);
    axios
      .post(`${process.env.REACT_APP_PATHO_RADI_URL}`, {
        username: toUpload.username,
        email: toUpload.email,
        project: toUpload.project,
        thickness: toUpload.thickness,
        pixel: toUpload.pixel,
        sample: toUpload.sample,
        rawImages: "",
      })
      .then((res) => {
        console.log(res.data.insertId);
        setSubmit(true);
      });
  };

  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.navPath}>
          HOME » <a href="/pathoradi">PathRadi</a> » <strong>upload</strong>
        </div>
        <div className={classes.blockHeader}>
          <div>
            <FaCloudUploadAlt size={25} /> Upload Raw Image(s)
          </div>
        </div>
        {submit ? (
          <div>
            <p>Email sent with Processed ID. </p>
            Please click the <a href="">Visualization page</a> to see the
            resulte.
          </div>
        ) : (
          <div className={classes.upload}>
            <form onSubmit={handleSubmit}>
              <div className={classes.field}>
                <label htmlFor="name"> User Name</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Your name"
                  value={toUpload.username}
                  onChange={handleChange}
                />
              </div>
              <div className={classes.field}>
                <label htmlFor="email"> Email </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Your email"
                  value={toUpload.email}
                  onChange={handleChange}
                />
              </div>
              <div className={classes.field}>
                <label htmlFor="project"> Project Name</label>
                <input
                  type="text"
                  id="project"
                  name="project"
                  placeholder="Project name"
                  value={toUpload.project}
                  onChange={handleChange}
                />
              </div>
              <div className={classes.field}>
                <label htmlFor="thickness"> Slide thickness</label>
                <input
                  type="text"
                  id="thickness"
                  name="thickness"
                  placeholder="Thickness"
                  value={toUpload.thickness}
                  onChange={handleChange}
                />
              </div>
              <div className={classes.field}>
                <label htmlFor="pixel"> Pixel resolution of the slides</label>
                <input
                  type="text"
                  id="pixel"
                  name="pixel"
                  placeholder="Pixel"
                  value={toUpload.pixel}
                  onChange={handleChange}
                />
              </div>
              <div className={classes.field}>
                <label htmlFor="sample"> Sample ID(optional)</label>
                <input
                  type="text"
                  id="sample"
                  name="sample"
                  placeholder="sample"
                  value={toUpload.sample}
                  onChange={handleChange}
                />
              </div>
              <div className={classes.field}>
                <FileUpload
                  accept=".jpg,.png,.jpeg"
                  label="Upload raw image to get result"
                  multiple
                  updateFilesCb={updateUploadedFiles}
                />
              </div>

              <div className={classes.submitField}>
                <input type="submit" name="submit" value="SUBMIT" />
                <input type="submit" name="submit" value="CLEAR" />
              </div>
            </form>
          </div>
        )}
      </div>
    </>
  );
};

export default Upload;