import { styled } from "styled-components";
import CursorPointerDiv from "../../../customComponent/CursorPointerDiv";

interface Props {
  previewURL: string | null;
  handleFileUpload: () => void;
  setProductType: React.Dispatch<React.SetStateAction<string>>;
  setProductKind: React.Dispatch<React.SetStateAction<string>>;
  setName: React.Dispatch<React.SetStateAction<string>>;
  setPrice: React.Dispatch<React.SetStateAction<string>>;
  setInfo: React.Dispatch<React.SetStateAction<string>>;
  handleDrop: (e: React.DragEvent<HTMLDivElement>) => void;
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleDivClick: () => void;
  productList: string[];
  productKindList: string[];
  productType: string;
  productKind: string;
  inputRef: React.RefObject<HTMLInputElement>;
}

const UploadComponent: React.FC<Props> = ({
  previewURL,
  handleFileUpload,
  setProductType,
  setProductKind,
  setName,
  setPrice,
  setInfo,
  handleDrop,
  handleFileChange,
  handleDivClick,
  productList,
  productKindList,
  productType,
  productKind,
  inputRef,
}) => {
  return (
    <UploadBox>
      <input type={"file"} hidden onChange={handleFileChange} ref={inputRef} />
      <CursorPointerDiv
        onClick={handleDivClick}
        onDragEnter={(e) => {
          e.preventDefault();
        }}
        onDragLeave={(e) => {
          e.preventDefault();
        }}
        onDragOver={(e) => {
          e.preventDefault();
        }}
        onDrop={(e) => {
          handleDrop(e);
        }}>
        <PreviewBox>
          {previewURL ? (
            <PreviewImg src={previewURL} alt="미리보기" />
          ) : (
            <TextDiv>
              <div>여기를 클릭하여 이미지 파일을 선택하거나</div>
              <div>여기로 드래그하세요.</div>
            </TextDiv>
          )}
        </PreviewBox>
      </CursorPointerDiv>
      <InfoBox>
        <div>
          <p>상품</p>
          <select
            value={productType}
            onChange={(e) => {
              setProductType(e.target.value);
            }}>
            <option value={""} disabled>
              상품을 선택하세요
            </option>
            {productList.map((item, index) => (
              <option value={item} key={`product-${index}`}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <div>
          <p>상품 종류</p>
          <select
            value={productKind}
            onChange={(e) => {
              setProductKind(e.target.value);
            }}>
            <option value={""} disabled>
              상품 종류를 선택하세요
            </option>
            {productKindList?.map((item, index) => (
              <option value={item} key={`kind-${index}`}>
                {item}
              </option>
            ))}
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

const UploadBox = styled("div")({
  display: "flex",
  justifyContent: "center",
  margin: "50px",
});
const PreviewBox = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "500px",
  height: "500px",
  border: "1px solid gray",
});
const PreviewImg = styled("img")({
  width: "500px",
  maxHeight: "500px",
});

const InfoBox = styled("div")({
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  padding: "20px",
  "& input[type='number']::-webkit-outer-spin-button": {
    WebkitAppearance: "none",
    margin: "0",
  },
  "& input[type='number']::-webkit-inner-spin-button": {
    WebkitAppearance: "none",
    margin: "0",
  },
  "& div": {
    width: "100%",
    "& select": {
      width: "100%",
    },
    "& button": {
      width: "100%",
    },
  },
});
const TextDiv = styled("div")({
  display: "flex",
  flexDirection: "column",
  alingItems: "center",
  justifyContent: "center",
  "& div": {
    margin: "auto",
  },
});
