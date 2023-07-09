import { useSelector, useDispatch } from "react-redux";

import InfoModalComponent from "./InfoModalComponent";
import { action } from "../../../../store/modal/managementModal";
import { action as utilsAction } from "../../../../store/utils";

type Props = {
  listItem: ItemList | null;
};

const InfoModalContainer: React.FC<Props> = ({ listItem }) => {
  const isModify = useSelector((state: any) => state.utils.modify);
  const dispatch = useDispatch();
  const toggleModal = () => {
    dispatch(action.toggle());
  };
  const toggleModify = (option?: string) => {
    if (option == "close") {
      dispatch(utilsAction.closeModify());
    } else {
      dispatch(utilsAction.toggleModify());
    }
  };
  return (
    <InfoModalComponent
      isModify={isModify}
      toggleModal={toggleModal}
      toggleModify={toggleModify}
      listItem={listItem}></InfoModalComponent>
  );
};

export default InfoModalContainer;
