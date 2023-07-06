import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import UploadComponent from "./UploadComponent";
import { action as utilsAction } from "../../../store/utils";

type Props = {
  listItem: ItemList | null;
};
const UploadContainer: React.FC<Props> = ({ listItem }) => {
  const isModify = useSelector((state: any) => state.utils.modify);
  const dispatch = useDispatch();
  const [selectedFile, setSelectedFile] = useState<File | null>();
  const [productType, setProductType] = useState("");
  const [productKind, setProductKind] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [info, setInfo] = useState("");
  const [previewURL, setPreviewURL] = useState<string | null>(null);
  const [productKindList, setProductKindList] = useState<string[]>([]);
  const productTypeList = ["커피", "굿즈"];
  const productKindListObj = [
    ["커피", "라떼"],
    ["키링", "머그컵", "텀블러"],
  ];

  const handleFileUpload = async () => {
    try {
      const formData = new FormData();
      if (
        selectedFile != null &&
        productType != "null" &&
        productKind != "" &&
        price != "" &&
        info != ""
      ) {
        formData.append("file", selectedFile);
        formData.append("name", name);
        formData.append("productType", productType);
        formData.append("productKind", productKind);
        formData.append("price", String(price));
        formData.append("info", info);
      } else {
        alert("모두 정확히 입력하세요");
      }
      // 이미지를 업로드하기 위해 서버로 요청을 보냅니다.
      const result = await axios.post("/api/upload/product", formData);
      // 업로드 결과를 처리합니다.
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDivClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    setSelectedFile(file || null);
    const reader = new FileReader();
    if (file != null) {
      reader.onload = () => {
        setPreviewURL(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();

    const files = e.dataTransfer.files;

    if (files.length > 0) {
      setSelectedFile(files[0]);
    }
    const reader = new FileReader();
    reader.onload = () => {
      setPreviewURL(reader.result as string);
    };
    reader.readAsDataURL(files[0]);
  };
  const toggleModify = (option?: string) => {
    if (option == "close") {
      dispatch(utilsAction.closeModify());
    } else {
      dispatch(utilsAction.toggleModify());
    }
  };
  useEffect(() => {
    if (listItem != null) {
      setProductKind(listItem?.productKind);
      setName(listItem?.productName);
      setPrice(listItem?.price);
      setInfo(listItem?.info);
    }
  }, []);
  useEffect(() => {
    const index = productTypeList.indexOf(productType);
    setProductKindList(productKindListObj[index]);
  }, [productType]);
  return (
    <UploadComponent
      previewURL={previewURL}
      handleFileUpload={handleFileUpload}
      setProductType={setProductType}
      setProductKind={setProductKind}
      setName={setName}
      setPrice={setPrice}
      setInfo={setInfo}
      handleDrop={handleDrop}
      handleFileChange={handleFileChange}
      handleDivClick={handleDivClick}
      productList={productTypeList}
      productKindList={productKindList}
      productType={productType}
      productKind={productKind}
      name={name}
      price={price}
      info={info}
      inputRef={inputRef}
      isModify={isModify}
      toggleModify={toggleModify}></UploadComponent>
  );
};

export default UploadContainer;
