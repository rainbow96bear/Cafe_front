import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import AdminComponent from "./AdminComponent";

const AdminContainer = () => {
  const AccountInfo = useSelector((state: any) => state.web3);
  const navigate = useNavigate();

  useEffect(() => {
    if (AccountInfo.admin == false) {
      navigate("/");
    }
  }, [AccountInfo.admin]);

  return <AdminComponent></AdminComponent>;
};

export default AdminContainer;
