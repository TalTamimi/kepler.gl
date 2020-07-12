import {Component} from 'react';
import {FileLoading, FileLoadingProgress} from '../../../reducers/vis-state-updaters';

export type FileUploadProps = {
  onFileUpload: (files: File[]) => void;
  validFileExt: string[];
  fileLoading?: FileLoading;
  fileLoadingProgress?: FileLoadingProgress;
  intl: any;
  theme: object;
};

export const WarningMsg: Component;

export const FileUpload: Component<FileUploadProps>;

export default function FileUploadFactory(): Component<FileUploadProps>;
