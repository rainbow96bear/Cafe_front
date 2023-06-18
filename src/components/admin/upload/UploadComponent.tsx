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
  name: string;
  price: string;
  info: string;
  inputRef: React.RefObject<HTMLInputElement>;
  isModify: boolean;
  setIsModify: React.Dispatch<React.SetStateAction<boolean>>;
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
  name,
  price,
  info,
  inputRef,
  isModify,
  setIsModify,
}) => {
  return (
    <UploadBox>
      <TopArea>
        <input
          type={"file"}
          hidden
          onChange={handleFileChange}
          ref={inputRef}
        />
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
                <div>여기를 클릭하거나</div>
                <div>파일을 여기로 드래그하세요.</div>
              </TextDiv>
            )}
          </PreviewBox>
        </CursorPointerDiv>
        <InfoBox>
          상품
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
          상품 종류
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
          상품 명
          <input
            type="name"
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={name}></input>
          가격
          <input
            type="number"
            onChange={(e) => {
              setPrice(e.target.value);
            }}
            value={price}
          />
        </InfoBox>
      </TopArea>
      <BottomArea>
        상세 정보
        <textarea
          onChange={(e) => {
            setInfo(e.target.value);
          }}
          value={info}></textarea>
        <ButtonArea>
          {isModify ? (
            <>
              <button
                onClick={() => {
                  setIsModify(!isModify);
                }}>
                수정 취소
              </button>
              <button
                onClick={() => {
                  setIsModify(!isModify);
                }}>
                수정 완료
              </button>
            </>
          ) : (
            <button
              onClick={() => {
                handleFileUpload();
              }}>
              등록
            </button>
          )}
        </ButtonArea>
      </BottomArea>
    </UploadBox>
  );
};

export default UploadComponent;

const UploadBox = styled("div")({
  width: "fit-content",
  margin: "50px",
});
const TopArea = styled("div")({
  "& div": {
    flex: "1",
  },
  display: "flex",
});
const BottomArea = styled("div")({
  marginTop: "20px",
  "& textarea": {
    width: "100%",
    maxWidth: "583px",
    height: "80px",
    padding: "0px",

    resize: "none",
  },
});
const PreviewBox = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "300px",
  height: "300px",
  border: "1px solid gray",
});
const PreviewImg = styled("img")({
  width: "500px",
  maxHeight: "500px",
});

const InfoBox = styled("div")({
  boxSizing: "border-box",
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "column",
  paddingLeft: "20px",
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
const ButtonArea = styled("div")({
  "& button": {
    width: "100%;",
  },
});
