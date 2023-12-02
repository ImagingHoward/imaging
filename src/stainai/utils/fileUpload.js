import { BlobServiceClient } from "@azure/storage-blob";

// <snippet_createBlobInContainer>
const createBlobInContainer = async (username, project, file, idx) => {
  const containerName = `uploaded`;
  const sasToken = process.env.REACT_APP_AZURE_STORAGE_SAS_TOKEN;
  const storageAccountName = process.env.REACT_APP_AZURE_STORAGE_RESOURCE_NAME;
  // </snippet_package>

  // <snippet_get_client>
  const uploadUrl = `https://pathoradi.blob.core.windows.net/?${sasToken}`;
  // console.log(uploadUrl);

  // get BlobService = notice `?` is pulled out of sasToken - if created in Azure portal
  const blobService = new BlobServiceClient(uploadUrl);
  // get Container - full public read access
  const containerClient = blobService.getContainerClient(`uploaded/${username}/${project}/imagebatch-${idx}`);
  // </snippet_get_client>

  // create blobClient for container
  const blobClient = containerClient.getBlockBlobClient(file.name);

  // set mimetype as determined from browser with file upload control
  const options = { blobHTTPHeaders: { blobContentType: file.type } };

  // upload file
  await blobClient.uploadData(file, options);
};
// </snippet_createBlobInContainer>

// <snippet_uploadFileToBlob>
const uploadFileToBlob =  (username, project, files, idx) => {
  if (!files) return;

  return new Promise((resolve, reject) => {
    files.forEach( (file) => {
      // upload file
      createBlobInContainer(username, project, file, idx);
    })

    if(success){
      resolve();
    }else{
      reject(new Error('Upload failed'));
    }

  });

};
// </snippet_uploadFileToBlob>

export default uploadFileToBlob;
