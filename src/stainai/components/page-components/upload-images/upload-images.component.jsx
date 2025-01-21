import React, { useState } from "react";
import classes from "./upload-images.module.sass";
import classnames from "classnames";

import NavBar from "../../shared-components/navbar/nav-bar.component";
import Hero from "../../shared-components/hero/hero.component";
import NoAccess from "../no-access/no-access.component";
import ProjectInfo from "./project-info/project-info.component";
import Agreement from "./agreement/agreement.component";
import ImageBatchInfo from "./image-batch-info/image-batch-info.component";
import Spinner from "../../shared-components/spinner/spinner.component";

import { useUploadImages } from "../../../hook/file-upload/upload-images.hook";

const UploadImages = () => {
  const [agree, setAgree] = useState(false);
  const { batches, setBatches, handleField, updateUploadedFiles, addNewBatch, onSubmit } = useUploadImages();

  return (
    <>
      <div className={classes.header}>
        <NavBar />
        <Hero
          logo=""
          title=""
          blur=""
          button=""
          url=""
        />
      </div>
      <div className={classes.wrapper}>
        {!batches.email && <NoAccess />}

        {batches.loading
          ? <Spinner className={classes.spinner} />
          : batches.message.length > 0
            ? <div className={classes.message} dangerouslySetInnerHTML={{ __html: batches.message }} />
            : <form className={classes.form}>
              <ProjectInfo
                batches={batches}
                setBatches={setBatches}
              />

              <div className={classes.imageBatchInof}>
                {batches.uploadInfo.map((batch, idx) => (
                  <ImageBatchInfo
                    key={idx}
                    idx={idx}
                    handleField={handleField}
                    updateUploadedFiles={updateUploadedFiles}
                  />
                ))}
                <button onClick={addNewBatch}>+ Add New Batch</button>
              </div>

              <Agreement setAgree={setAgree} agree={agree} />
              <div className={classes.submitButton}>
                <button
                  className={classnames(classes.submit, agree && classes.active)}
                  disabled={!agree ? true : false}
                  onClick={onSubmit}
                >
                  Submit
                </button>
              </div>
            </form>
        }
      </div>

    </>
  );
};

export default UploadImages;