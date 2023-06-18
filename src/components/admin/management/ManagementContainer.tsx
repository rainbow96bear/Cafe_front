import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import QueryString from "qs";

import MangementComponent from "./ManagementComponent";
import { action } from "../../../store/modal/managementModal";

const MangementContainer = () => {
  const [list, setList] = useState([]);
  const [listItem, setListItem] = useState<ItemList | null>(null);
  const isOpen = useSelector((state: any) => state.modal.isOpen);
  const dispatch = useDispatch();
  const location = useLocation();

  const modalToggle = () => {
    dispatch(action.toggle());
  };

  useEffect(() => {
    const queryData = QueryString.parse(location.search, {
      ignoreQueryPrefix: true,
    });

    const getList = async () => {
      const result = await axios.get("/api/productList/getList", {
        params: queryData,
      });
      setList(result.data);
    };

    getList();
  }, [location.search]);

  return (
    <MangementComponent
      list={list}
      isOpen={isOpen}
      modalToggle={modalToggle}
      setListItem={setListItem}
      listItem={listItem}></MangementComponent>
  );
};

export default MangementContainer;
