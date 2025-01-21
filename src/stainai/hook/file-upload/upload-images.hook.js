import React, { useEffect, useState, useContext } from "react";
import UserContext from "../auth/user.hook";
import uploadFileToBlob from "../../utils/upload-file-to-blob";

const defaultBatch = {
  species: "rat",
  strain: "",
  treatment: "",
  organ: "brain",
  slice: "",
  pixel: "",
  region: "Cerebral Cortex",
  structure: "",
  images: [],
  rawImages: [],
};

export const useUploadImages = () => {
  const { user, setUser } = useContext(UserContext);
  const [batches, setBatches] = useState({
    loading: false,
    username: "",
    email: "",
    project: `STAIN.AI-${new Date().getMonth() + 1
      }${new Date().getDate()}${new Date().getFullYear()}-${Math.floor(Math.random() * 10000)}`,
    uploadInfo: [defaultBatch],
    message: "",
  });

  useEffect(() => {
    setBatches({
      ...batches,
      username: `${user?.firstname} ${user?.lastname}`,
      email: user?.email || "",
    });
  }, [user]);

  const handleField = (e, idx, field) => {
    const { value } = e.target;
    setBatches((prevBatches) => {
      const updatedUploadInfo = [...prevBatches.uploadInfo];
      updatedUploadInfo[idx] = {
        ...updatedUploadInfo[idx],
        [field]: value
      };

      return {
        ...prevBatches,
        uploadInfo: updatedUploadInfo,
      };
    });

    const organElement = document.getElementById(`organ_${idx}`);
    const otherOrganElement = document.getElementById(`otherOrgan_${idx}`);

    if (organElement && otherOrganElement) {
      otherOrganElement.style.display = organElement.value === 'other' ? 'block' : 'none';
    }
  };

  const addNewBatch = (e) => {
    e.preventDefault();
    setBatches((prevBatches) => ({
      ...prevBatches,
      uploadInfo: [...prevBatches.uploadInfo, defaultBatch]
    }));
  };

  const updateUploadedFiles = (files, idx) => {
    setBatches((prevBatches) => {
      const updatedUploadInfo = [...prevBatches.uploadInfo];
      updatedUploadInfo[idx] = {
        ...updatedUploadInfo[idx],
        images: files.map((file) => file.name),
        rawImages: files,
      };

      return {
        ...prevBatches,
        uploadInfo: updatedUploadInfo,
      };
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setBatches((prevBatches) => ({
      ...prevBatches,
      loading: true,
    }));

    console.log(batches)

    try {
      const uploadPromises = batches.uploadInfo.map(
        async (batch, idx) => {
          await uploadFileToBlob(
            batches.username,
            batches.project,
            batch.rawImages,
            idx
          );
        }
      );

      // Wait for all uploadFileToBlob promises to resolve
      await Promise.all(uploadPromises);

      const stainaiURL = process.env.REACT_APP_STAINAI_URL;

      // Send the uploaded images Info to the Database
      const response = await fetch(`${stainaiURL}/upload-images`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...batches,
          username: `${user?.firstname} ${user?.lastname}`,
          userid: user?.userid,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        console.log('response.ok');
        setBatches((prevBatches) => ({
          ...prevBatches,
          loading: false,
          message: `<p>Thank you for submitting your images to STAIN.AI!</p> <p>Your process id is ${batches.project}. </p> <p>We will notify you once the process is completed.</p>`,
        }));
      }
    } catch (error) {
      setBatches((prevBatches) => ({
        ...prevBatches,
        loading: false,
        message: `An error occurred - ${error}. Please try again later.`,
      }));
    }
  };

  return {
    batches,
    setBatches,
    handleField,
    addNewBatch,
    updateUploadedFiles,
    onSubmit,
  };
};