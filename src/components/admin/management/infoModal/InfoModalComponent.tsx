import { styled } from "styled-components";

import UploadContainer from "../../upload/UploadContainer";
import ProductDetailContainer from "../../productDetail/ProductDetailContainer";

type Props = {
  isModify: boolean;
  toggleModal: () => void;
  toggleModify: (option?: string) => void;
  listItem: ItemList | null;
};

const InfoModalComponent: React.FC<Props> = ({
  isModify,
  listItem,
  toggleModal,
  toggleModify,
}) => {
  return (
    <ModalBox>
      <ModalActiveBox>
        <button
          onClick={() => {
            toggleModal();
            toggleModify("close");
          }}>
          X
        </button>
        {isModify ? (
          <UploadContainer listItem={listItem}></UploadContainer>
        ) : (
          <ProductDetailContainer listItem={listItem}></ProductDetailContainer>
        )}
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
