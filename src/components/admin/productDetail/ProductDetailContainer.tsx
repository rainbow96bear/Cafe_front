import { useState } from "react";
import { useDispatch } from "react-redux";

import ProductDetailComponent from "./ProductDetailComponent";
import { action as utilsAction } from "../../../store/utils";
type Props = {
  listItem: ItemList | null;
};
const ProductDetailContainer: React.FC<Props> = ({ listItem }) => {
  const dispatch = useDispatch();
  const toggleModify = () => {
    dispatch(utilsAction.toggleModify());
  };
  return (
    <ProductDetailComponent
      listItem={listItem}
      toggleModify={toggleModify}></ProductDetailComponent>
  );
};
export default ProductDetailContainer;
