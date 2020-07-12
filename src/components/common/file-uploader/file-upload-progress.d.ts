import {FunctionComponent} from 'react';
import {FileUpload} from "./file-upload";
import fileUploadProgress from "./file-upload-progress";

export type FileUploadProgressProps = {
  fileLoadingProgress?: object;
  theme: object;
};

const FileUploadProgress: FunctionComponent<FileUploadProgressProps>;
export default FileUploadProgress;
