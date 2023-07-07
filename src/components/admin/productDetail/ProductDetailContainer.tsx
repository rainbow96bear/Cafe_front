import { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import QueryString from "qs";

import ProductDetailComponent from "./ProductDetailComponent";
import { action as utilsAction } from "../../../store/utils";
import { action as modalAction } from "../../../store/modal/managementModal";
import axios from "axios";
type Props = {
  listItem: ItemList | null;
};
const ProductDetailContainer: React.FC<Props> = ({ listItem }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const toggleModify = () => {
    dispatch(utilsAction.toggleModify());
  };
  const modalToggle = () => {
    dispatch(modalAction.toggle());
  };
  const deleteItem = async () => {
    const queryData = QueryString.parse(location.search, {
      ignoreQueryPrefix: true,
    });
    const result = await axios.delete("/api/product/delete", {
      params: queryData,
      data: {
        productID: listItem?.id,
      },
    });
    if (result.data != "error") {
      modalToggle();
    }
  };
  return (
    <ProductDetailComponent
      listItem={listItem}
      toggleModify={toggleModify}
      deleteItem={deleteItem}></ProductDetailComponent>
  );
};
export default ProductDetailContainer;
