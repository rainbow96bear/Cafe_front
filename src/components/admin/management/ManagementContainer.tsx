import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import QueryString from "qs";

import MangementComponent from "./ManagementComponent";

const MangementContainer = () => {
  const [list, setList] = useState([]);
  const location = useLocation();

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

  return <MangementComponent list={list}></MangementComponent>;
};

export default MangementContainer;
