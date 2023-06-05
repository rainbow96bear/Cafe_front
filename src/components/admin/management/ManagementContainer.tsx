import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import QueryString from "qs";

import MangementComponent from "./ManagementComponent";
import { action } from "../../../store/modal/managementModal";

const MangementContainer = () => {
  const [list, setList] = useState([]);
  const isOpen = useSelector((state: any) => state.modal.isOpen);
  const dispatch = useDispatch();
  const location = useLocation();
  console.log(isOpen);
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
      modalToggle={modalToggle}></MangementComponent>
  );
};

export default MangementContainer;
