import { styled } from "styled-components";

type Props = {
  listItem: ItemList | null;
  toggleModify: () => void;
};
const ProductDetailComponent: React.FC<Props> = ({
  listItem,
  toggleModify,
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
      <ModifyBtn
        onClick={() => {
          toggleModify();
        }}>
        수정
      </ModifyBtn>
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
const ModifyBtn = styled("button")({
  width: "100%",
});
