import { useSelector, useDispatch } from "react-redux";

import InfoModalComponent from "./InfoModalComponent";
import { action } from "../../../../store/modal/managementModal";

const InfoModalContainer = () => {
  const isOpen = useSelector((state: any) => state.modal.isOpen);
  const dispatch = useDispatch();
  const modalToggle = () => {
    dispatch(action.toggle());
  };
  return (
    <InfoModalComponent
      isOpen={isOpen}
      modalToggle={modalToggle}></InfoModalComponent>
  );
};

export default InfoModalContainer;
