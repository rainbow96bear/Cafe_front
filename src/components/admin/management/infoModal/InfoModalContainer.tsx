import { useSelector, useDispatch } from "react-redux";

import InfoModalComponent from "./InfoModalComponent";
import { action } from "../../../../store/modal/managementModal";

type Props = {
  listItem: ItemList | null;
};

const InfoModalContainer: React.FC<Props> = ({ listItem }) => {
  const isOpen = useSelector((state: any) => state.modal.isOpen);
  const dispatch = useDispatch();
  const modalToggle = () => {
    dispatch(action.toggle());
  };
  return (
    <InfoModalComponent
      isOpen={isOpen}
      modalToggle={modalToggle}
      listItem={listItem}></InfoModalComponent>
  );
};

export default InfoModalContainer;
