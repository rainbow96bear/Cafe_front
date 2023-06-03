import { styled } from "styled-components";

type Props = {
  list: any;
};

const MangementComponent: React.FC<Props> = ({ list }) => {
  console.log(list);
  return (
    <div>
      {list?.map((item: any, index: number) => (
        <ListTable key={`item-${index}`}>
          <ul>{item.productName}</ul>
          <ul>{item.productKind}</ul>
          <ul>{item.price}</ul>
          <ul>{item.info}</ul>
        </ListTable>
      ))}
    </div>
  );
};

export default MangementComponent;

const ListTable = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  "& ul": {
    // padding: "auto",
    border: "1px solid red",
  },
});
