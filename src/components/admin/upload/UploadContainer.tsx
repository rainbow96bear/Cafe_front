import { useEffect, useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import API from "../../../API/API";

import UploadComponent from "./UploadComponent";

const UploadContainer = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [product, setProduct] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [info, setInfo] = useState("");
  const [previewURL, setPreviewURL] = useState<string | null>(null);

  const handleFileUpload = async () => {
    try {
      const formData = new FormData();
      if (selectedFile != null && product != "" && price != "" && info != "") {
        formData.append("image", selectedFile);
        formData.append("name", name);
        formData.append("product", product);
        formData.append("price", String(price));
        formData.append("info", info);
      } else {
        alert("모두 정확히 입력하세요");
      }

      // 이미지를 업로드하기 위해 서버로 요청을 보냅니다.
      const response = await API.post("/api/upload/product", formData);

      // 업로드 결과를 처리합니다.
      // console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      // 파일을 선택하거나 드래그하여 놓았을 때 호출됩니다.
      const file = acceptedFiles[0];
      setSelectedFile(file);

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
      previewURL={previewURL}
      handleFileUpload={handleFileUpload}
      setProduct={setProduct}
      setName={setName}
      setPrice={setPrice}
      setInfo={setInfo}></UploadComponent>
  );
};

export default UploadContainer;
