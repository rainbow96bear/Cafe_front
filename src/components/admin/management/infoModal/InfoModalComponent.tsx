import { styled } from "styled-components";

import UploadContainer from "../../upload/UploadContainer";

type Props = {
  isOpen: boolean;
  modalToggle: () => void;
  listItem: ItemList | null;
};

const InfoModalComponent: React.FC<Props> = ({
  isOpen,
  modalToggle,
  listItem,
}) => {
  return (
    <ModalBox>
      <ModalActiveBox>
        <button
          onClick={() => {
            modalToggle();
          }}>
          X
        </button>
        {/* isModify를 redux로 변경하기 */}
        {/* isModify? <UploadContainer listItem={listItem}></UploadContainer>:<DetailContainer listItem={listItem}></DetailContainer> */}
        <UploadContainer listItem={listItem}></UploadContainer>
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
  minHeight: "100vh",
});
const ModalActiveBox = styled("div")({
  position: "absolute",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "white",
  width: "800px",
  height: "600px",
  zIndex: "10",
});
