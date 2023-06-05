import { styled } from "styled-components";

type Props = {
  list: any;
};

const MangementComponent: React.FC<Props> = ({ list }) => {
  console.log(list);
  return (
    <ListBox>
      <ListRow>
        <div>이미지</div>
        <div>상품 명</div>
        <div>상품 종류</div>
        <div>가격</div>
        <div>정보</div>
        <div>수정</div>
      </ListRow>
      {list?.map((item: any, index: number) => (
        <ListRow key={`item-${index}`}>
          <div>
            <img src={"http://localhost:8080/imgsrc/" + item.fileName}></img>
          </div>
          <div>{item.productName}</div>
          <div>{item.productKind}</div>
          <div>{item.price}</div>
          <div>{item.info}</div>
          <div>
            <button>수정</button>
          </div>
        </ListRow>
      ))}
    </ListBox>
  );
};

export default MangementComponent;
const ListBox = styled("div")({ margin: "50px" });
const ListRow = styled("div")({
  display: "flex",
  borderBottom: "1px solid lightblue",

  "& div": {
    flex: "1",
    margin: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& img": {
      width: "100%",
    },
    "& button": {
      height: "fit-content",
    },
  },
});
