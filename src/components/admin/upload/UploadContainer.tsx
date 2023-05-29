import { useEffect, useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";

import UploadComponent from "./UploadComponent";

const UploadContainer = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewURL, setPreviewURL] = useState<string | null>(null);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);

  const handleFileUpload = async (file: File) => {
    try {
      const formData = new FormData();
      formData.append("image", file);

      // 이미지를 업로드하기 위해 서버로 요청을 보냅니다.
      const response = await axios.post("/upload", formData);

      // 업로드 결과를 처리합니다.
      console.log(response.data);

      // 업로드된 이미지 URL을 상태에 저장하여 미리보기에 사용합니다.
      setUploadedImage(response.data.imageUrl);
    } catch (error) {
      console.error(error);
    }
  };
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      // 파일을 선택하거나 드래그하여 놓았을 때 호출됩니다.
      const file = acceptedFiles[0];
      setSelectedFile(file);
      handleFileUpload(file);
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewURL(reader.result as string);
      };
      reader.readAsDataURL(file);
    },
    [handleFileUpload]
  );
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  const params = new URLSearchParams(window.location.search);

  useEffect(() => {
    console.log(params.get("product"));
  }, [params.get("product")]);

  return (
    <UploadComponent
      getRootProps={getRootProps}
      getInputProps={getInputProps}
      isDragActive={isDragActive}
      previewURL={previewURL}></UploadComponent>
  );
};

export default UploadContainer;
