import { useEffect, useState } from "react";
import classes from "./upload-form.module.sass";
import classnames from "classnames";
import axios from "axios";

import { FaUserCog, FaProjectDiagram } from "react-icons/fa";
import FileUpload from "../file-upload/file-upload.component";
import UseUserContext from "../../../../hook/auth/user.hook";
import uploadFileToBlob from "../../../../utils/fileUpload";
import Spinner from "../../../shared-components/spinner/spinner.component";

const UploadForm = () => {
  const user = UseUserContext();
  const [agree, setAgree] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const [currentBatch, setCurrentBatch] = useState(1);
  const [toUpload, setToUpload] = useState({
    username: `${user.info.firstname} ${user.info.lastname}`,
    email: user.info.email,
    project: `Stain.AI-${
      new Date().getMonth() + 1
    }${new Date().getDate()}${new Date().getFullYear()}`,
    uploadInfo: {
      [currentBatch]: {
        species: "",
        strain: "",
        treatment: "",
        organ: "",
        slice: "",
        pixel: "",
        region: "",
        structure: "",
        images: [],
        rawImages: "",
      },
    },
  });

  const buttonStyling = agree
    ? "p-5 rounded-md bg-blue-600 font-semibold text-white flex items-center gap-1 hover:bg-blue-800"
    : "p-5 rounded-md bg-gray-600 font-semibold text-white flex items-center gap-1";

  const updateUploadedFiles = (files, idx) => {
    setToUpload((oldState) => ({
      ...oldState,
      uploadInfo: {
        ...oldState.uploadInfo,
        [idx]: {
          ...oldState.uploadInfo[idx],
          images: files.map((file) => file.name),
          rawImages: files,
        },
      },
    }));
  };

  const handleField = (e, idx, field) => {
    setCurrentBatch(idx);
    setToUpload((oldState) => ({
      ...oldState,
      uploadInfo: {
        ...oldState.uploadInfo,
        [idx]: {
          ...oldState.uploadInfo[idx],
          [field]: e.target.value,
        },
      },
    }));
  };

  const newLine = (idx, updateUploadedFiles) => (
    <div className={classnames(classes.row)}>
      <div className={classes.imageBatchNum}>
        <div className={classes.lightgrey}>Image Batch</div>
        <div>{idx + 1}</div>
      </div>
      <div className={classes.imageBatchInfo}>
        <div className={classnames(classes.col, classes.lightpurple)}>
          <div className={classes.imageBatchHeader}>TISSUE</div>
          <div className={classes.row}>
            <div className={classes.col}>
              <label>*Species</label>
              <input
                name="species"
                type="text"
                id="species"
                defaultValue={currentBatch[idx + 1]?.species}
                onChange={(e) => handleField(e, idx + 1, "species")}
              />
            </div>
            <div className={classes.col}>
              <label>Strain</label>
              <input
                name="strain"
                type="text"
                id="strain"
                defaultValue={currentBatch[idx + 1]?.strain}
                onChange={(e) => handleField(e, idx + 1, "strain")}
              />
            </div>
            <div className={classes.col}>
              <label>Animal Treatment</label>
              <input
                name="treatment"
                type="text"
                id="treatment"
                defaultValue={currentBatch[idx + 1]?.treatment}
                onChange={(e) => handleField(e, idx + 1, "treatment")}
              />
            </div>
            <div className={classes.col}>
              <label>*Organ</label>
              <input
                name="organ"
                type="text"
                id="organ"
                defaultValue={currentBatch[idx + 1]?.organ}
                onChange={(e) => handleField(e, idx + 1, "organ")}
              />
            </div>
          </div>
        </div>
        <div className={classnames(classes.col, classes.lightyellow)}>
          <div className={classes.imageBatchHeader}>IMAGE METADATA</div>
          <div className={classes.row}>
            <div className={classes.col}>
              <label>*Slice Thickness(um)</label>
              <input
                name="slice"
                type="text"
                id="slice"
                defaultValue={currentBatch[idx + 1]?.slice}
                onChange={(e) => handleField(e, idx + 1, "slice")}
              />
            </div>
            <div className={classes.col}>
              <label>*Pixel Size(um)</label>
              <input
                name="pixel"
                type="text"
                id="pixel"
                defaultValue={currentBatch[idx + 1]?.pixel}
                onChange={(e) => handleField(e, idx + 1, "pixel")}
              />
            </div>
            <div className={classes.col}>
              <label>*Anatomical Region</label>
              <input
                name="region"
                type="text"
                id="region"
                defaultValue={currentBatch[idx + 1]?.region}
                onChange={(e) => handleField(e, idx + 1, "region")}
              />
            </div>
            <div className={classes.col}>
              <label>Structure Detail</label>
              <input
                name="structure"
                type="text"
                id="structure"
                defaultValue={currentBatch[idx + 1]?.structure}
                onChange={(e) => handleField(e, idx + 1, "structure")}
              />
            </div>
          </div>
        </div>
        <div className={classnames(classes.col, classes.lightblue)}>
          {/* <div className={classes.imageBatchHeader}>UPLOAD FILES</div>  */}
          <div style={{ width: "100%" }}>
            <FileUpload
              accept=".jpg,.png,.jpeg, .tif"
              // label="Upload raw image to get result"
              multiple
              updateFilesCb={updateUploadedFiles}
              idx={idx + 1}
            />
          </div>
        </div>
      </div>
    </div>
  );

  const [divs, setDivs] = useState([
    <div key="0">{newLine(0, updateUploadedFiles)}</div>,
  ]);

  const addNewDiv = () => {
    setDivs([
      ...divs,
      <div key={divs.length}>{newLine(divs.length, updateUploadedFiles)}</div>,
    ]);
    setCurrentBatch(divs.length + 1);
    setToUpload((oldState) => ({
      ...oldState,
      uploadInfo: {
        ...oldState.uploadInfo,
        [divs.length + 1]: {
          species: "",
          strain: "",
          treatment: "",
          organ: "",
          slice: "",
          pixel: "",
          region: "",
          structure: "",
          images: [],
          rawImages: "",
        },
      },
    }));
  };

  const onSubmit = async () => {
    // console.log(toUpload);
    const stainURL = process.env.REACT_APP_STAINAI_URL;
    // const stainURL = "http://localhost:3000";
    const userid = user.info.userid;

    axios
      .post(`${stainURL}/uploadInfo/create`, {
        ...toUpload,
        userid,
      })
      .then((res) => {
        setLoading(true);

        Object.keys(toUpload.uploadInfo).map((idx) => {
          uploadFileToBlob(
            toUpload.username,
            toUpload.project,
            toUpload.uploadInfo[idx].rawImages,
            idx
          );
        });
        setLoading(false);
        setSuccess(true);
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      {success ? (
        <p className="font-semibold text-green-500 mb-10 mt-10 flex items-center justify-center gap-1">
          Form has been submitted successfully
        </p>
      ) : loading ? (
        <Spinner />
      ) : (
        <div className={classes.wrapper}>
          {/* <FormProvider {...methods}> */}
          <form
            onSubmit={(e) => e.preventDefault()}
            noValidate
            autoComplete="off"
            // className="container"
          >
            <div className={classnames(classes.row, classes.lightgrey)}>
              <div className={classes.row2}>
                <div>
                  <FaUserCog />{" "}
                </div>
                <div>Use Name: {toUpload.username}</div>
                <div>Email: {toUpload.email}</div>
              </div>
              <div className={classes.row2}>
                <div>
                  <FaProjectDiagram />
                </div>
                <div>
                  <label>*Project</label>
                  <input
                    name="Project"
                    type="text"
                    id="Project"
                    defaultValue={toUpload.project}
                    onChange={(e) => {
                      setToUpload((oldState) => ({
                        ...oldState,
                        project: e.target.value,
                      }));
                    }}
                  />
                </div>
              </div>
            </div>
            <div className={classes.uploadForm}>
              {divs.map((div, index) => (
                <div key={index}>{div}</div>
              ))}
              <div
                className={classnames(
                  classes.col,
                  classes.lightgrey,
                  classes.newbatch
                )}
                style={{ padding: "20px 0" }}
                onClick={addNewDiv}
              >
                + Add new batch
              </div>
            </div>
            <div>
              <input
                type="checkbox"
                onChange={() => {
                  setAgree(!agree);
                }}
              />{" "}
              Agree: This web application tool is designed to assist academic
              institutes in quantifying cells for research and educational
              purposes. While we strive to ensure the accuracy and reliability
              of the results, we cannot guarantee the absolute precision of the
              calculations. The accuracy of cell counting may vary based on
              image quality and user input. The tool is not a substitute for
              professional medical or scientific analysis. Users are encouraged
              to verify the results independently for critical applications. The
              developers of this tool disclaim any responsibility for the
              accuracy, completeness, or reliability of the results obtained.
              Users are solely responsible for the interpretation and use of the
              data generated by this application. By using this web application,
              you agree to these terms and acknowledge the limitations of the
              tool.
            </div>
            <div className="flex justify-end">
              <button
                className={buttonStyling}
                disabled={!agree ? true : false}
                onClick={onSubmit}
              >
                Submit
              </button>
            </div>
          </form>
          {/* </FormProvider> */}
        </div>
      )}
    </>
  );
};

export default UploadForm;
