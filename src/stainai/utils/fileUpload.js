import { BlobServiceClient } from "@azure/storage-blob";

const createBlobInContainer = async (username, project, file, idx) => {

  const sasToken = process.env.REACT_APP_AZURE_STORAGE_SAS_TOKEN;

  const uploadUrl = `https://pathoradi.blob.core.windows.net/?${sasToken}`;

  const blobService = new BlobServiceClient(uploadUrl);

  const containerClient = blobService.getContainerClient(`uploaded/${username}/${project}/imagebatch-${idx}`);
  const blobClient = containerClient.getBlockBlobClient(file.name);


  const options = { blobHTTPHeaders: { blobContentType: file.type } };

  await blobClient.uploadData(file, options);
};


const uploadFileToBlob = async (username, project, files, idx) => {
  if (!files) return;

  // Use map to create an array of promises
  const uploadPromises = files.map(async (file) => {
    // upload file
    await createBlobInContainer(username, project, file, idx);
  });

  // Wait for all promises to resolve
  await Promise.all(uploadPromises);
};

export default uploadFileToBlob;
