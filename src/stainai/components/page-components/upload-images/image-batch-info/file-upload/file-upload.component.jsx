import React, { useRef, useState } from "react";
import classes from "./file-upload.module.sass";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useFileUpload } from "../../../../../hook/file-upload/file-upload.hook";

const FileUpload = ({
  label,
  updateFilesCb,
  maxFileSizeInBytes = 1000000000000,
  idx,
  multiple = false,
  accept,
  ...otherProps
}) => {
  const fileInputField = useRef(null);
  const {
    files,
    convertBytesToKB,
    handleNewFileUpload,
    removeFile,
  } = useFileUpload({ maxFileSizeInBytes, multiple, updateFilesCb, idx });

  const handleUploadBtnClick = () => {
    fileInputField.current?.click();
  };

  return (
    <div>
      <label>{label}</label>
      <div className={classes.wrapper}>
        <button type="button" onClick={handleUploadBtnClick}>
          <span>Upload {multiple ? "files" : "a file"}</span>
        </button>

        <section>
          <p>Drag and drop your files anywhere</p>
          <input
            type="file"
            ref={fileInputField}
            onChange={handleNewFileUpload}
            title=""
            value=""
            multiple={multiple}
            {...otherProps}
          />
        </section>

        <span>Uploaded Files:</span>
        <article>
          <section className={classes.toUploadSection}>
            {files.map((file, index) => {
              const isImageFile = file.type.startsWith("image/");
              return (
                <section key={file.name}>
                  <div>
                    {isImageFile && (
                      <img
                        src={URL.createObjectURL(file)}
                        alt={`file preview ${index}`}
                      />
                    )}
                    <div>
                      <span>{file.name}</span>
                      <aside>
                        <span>{convertBytesToKB(file.size)} KB</span>
                        <RiDeleteBin5Line
                          size={25}
                          onClick={() => removeFile(file.name)}
                        />
                      </aside>
                    </div>
                  </div>
                </section>
              );
            })}
          </section>
        </article>
      </div>
    </div>
  );
};

export default FileUpload;