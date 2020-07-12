import {Component} from 'react';
import {FileLoading} from '../../reducers/vis-state-updaters';

export type LoadDataModalProps = {
  // call backs
  onFileUpload: (files: File[]) => void;
  onLoadCloudMap: (provider: any, vis: any) => void;
  fileLoading?: FileLoading,
  loadingMethods: {
    id: string;
    label: string;
    elementType: Component;
    tabElementType?: Component;
  }[];
};

export default function LoadDataModalFactory(): React.Component<LoadDataModalProps>;
