import { DropzoneRootProps, DropzoneInputProps } from "react-dropzone";

interface Props {
  getRootProps: <T extends DropzoneRootProps>(props?: T | undefined) => T;
  getInputProps: <T extends DropzoneInputProps>(props?: T | undefined) => T;
  isDragActive: boolean;
  previewURL: string | null;
}

const UploadComponent: React.FC<Props> = ({
  getRootProps,
  getInputProps,
  isDragActive,
  previewURL,
}) => {
  return (
    <div>
      {" "}
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        {previewURL ? (
          <img src={previewURL} alt="미리보기" />
        ) : isDragActive ? (
          <p>파일을 여기에 놓아주세요.</p>
        ) : (
          <p>이미지 파일을 선택하거나 여기로 드래그하세요.</p>
        )}
      </div>
    </div>
  );
};

export default UploadComponent;
