import { styled } from "styled-components";

type Props = {
  listItem: ItemList | null;
  toggleModify: () => void;
  deleteItem: () => void;
};
const ProductDetailComponent: React.FC<Props> = ({
  listItem,
  toggleModify,
  deleteItem,
}) => {
  console.log(listItem);
  return (
    <DetailBox>
      <DetailFirstRow>
        <DetailImg
          src={
            "http://localhost:8080/imgsrc/" + listItem?.fileName
          }></DetailImg>
        <DetailSimpleInfoBox>
          <div>{listItem?.productKind}</div>
          <div>{listItem?.productName}</div>
          <div>{listItem?.price}</div>
        </DetailSimpleInfoBox>
      </DetailFirstRow>
      <DetailInfo>{listItem?.info}</DetailInfo>
      <BtnBox>
        <FunctionBtn
          onClick={() => {
            toggleModify();
          }}>
          수정
        </FunctionBtn>
        <FunctionBtn
          onClick={() => {
            deleteItem();
          }}>
          삭제
        </FunctionBtn>
      </BtnBox>
    </DetailBox>
  );
};
export default ProductDetailComponent;

const DetailBox = styled("div")({});
const DetailFirstRow = styled("div")({
  display: "flex",
});
const DetailImg = styled("img")({
  border: "1px solid black",
  width: "200px",
  height: "200px",
});
const DetailSimpleInfoBox = styled("div")({});
const DetailInfo = styled("div")({});
const BtnBox = styled("btn")({
  width: "100%",
  display: "flex",
});
const FunctionBtn = styled("button")({
  flex: "1",
});
