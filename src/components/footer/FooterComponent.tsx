import styled from "styled-components";

type Props = {};

const FooterConponent: React.FC<Props> = ({}) => {
  return <FooterBox>footer입니다.</FooterBox>;
};

export default FooterConponent;

const FooterBox = styled("div")({
  boxSizing: "border-box",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  height: "100%",
  padding: "15px",
  borderTop: "2px solid lightgray",
});
