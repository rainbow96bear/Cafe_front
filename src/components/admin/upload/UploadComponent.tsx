import { DropzoneRootProps, DropzoneInputProps } from "react-dropzone";
import { styled } from "styled-components";
import CursorPointerDiv from "../../../customComponent/CursorPointerDiv";

interface Props {
  getRootProps: <T extends DropzoneRootProps>(props?: T | undefined) => T;
  getInputProps: <T extends DropzoneInputProps>(props?: T | undefined) => T;
  isDragActive: boolean;
  previewURL: string | null;
  handleFileUpload: () => void;
  setProduct: React.Dispatch<React.SetStateAction<string>>;
  setName: React.Dispatch<React.SetStateAction<string>>;
  setPrice: React.Dispatch<React.SetStateAction<string>>;
  setInfo: React.Dispatch<React.SetStateAction<string>>;
}

const UploadComponent: React.FC<Props> = ({
  getRootProps,
  getInputProps,
  isDragActive,
  previewURL,
  handleFileUpload,
  setProduct,
  setName,
  setPrice,
  setInfo,
}) => {
  return (
    <UploadBox>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <CursorPointerDiv>
          <PreviewBox>
            {previewURL ? (
              <PreviewImg src={previewURL} alt="미리보기" />
            ) : isDragActive ? (
              <p>파일을 여기에 놓아주세요.</p>
            ) : (
              <p>이미지 파일을 선택하거나 여기로 드래그하세요.</p>
            )}
          </PreviewBox>
        </CursorPointerDiv>
      </div>
      <InfoBox>
        <div>
          <p>상품 종류</p>
          <select
            onChange={(e) => {
              setProduct(e.target.value);
            }}>
            <option value={""}>상품 종류를 선택하세요</option>
            <option value={"coffee"}>커피</option>
            <option value={"goods"}>굿즈</option>
          </select>
        </div>
        <div>
          <p>상품 명</p>
          <input
            type="name"
            onChange={(e) => {
              setName(e.target.value);
            }}></input>
        </div>
        <div>
          <p>가격</p>
          <input
            type="number"
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
        </div>
        <div>
          <p>상세 정보</p>
          <input
            type="text"
            onChange={(e) => {
              setInfo(e.target.value);
            }}></input>
        </div>
        <div>
          <p></p>
          <button
            onClick={() => {
              handleFileUpload();
            }}>
            등록
          </button>
        </div>
      </InfoBox>
    </UploadBox>
  );
};

export default UploadComponent;

const UploadBox = styled.div`
  display: flex;
  margin: auto;
`;
const PreviewBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 500px;
  border: 1px solid gray;
`;
const PreviewImg = styled.img`
  width: 500px;
  max-height: 500px;
`;

const InfoBox = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  div {
    width: 100%;
    select {
      width: 100%;
    }
    button {
      width: 100%;
    }
  }
`;
