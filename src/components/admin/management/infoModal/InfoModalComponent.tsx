import { styled } from "styled-components";

type Props = {
  isOpen: boolean;
  modalToggle: () => void;
};

const InfoModalComponent: React.FC<Props> = ({ isOpen, modalToggle }) => {
  return (
    <ModalBox>
      <ModalActiveBox>
        <div>안녕</div>
        <button
          onClick={() => {
            modalToggle();
          }}>
          x
        </button>
      </ModalActiveBox>
      <ModalBackground></ModalBackground>
    </ModalBox>
  );
};

export default InfoModalComponent;

const ModalBox = styled("div")({
  position: "absolute",
  left: "0px",
  top: "0px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
const ModalBackground = styled("div")({
  backgroundColor: "lightgray",
  opacity: "0.5",
  width: "100vw",
  height: "100vh",
});
const ModalActiveBox = styled("div")({
  position: "absolute",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "white",
  width: "800px",
  height: "600px",
  zIndex: "10",
});
