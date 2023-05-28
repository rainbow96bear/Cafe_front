import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import AdminComponent from "./AdminComponent";

const AdminContainer = () => {
  const AccountInfo = useSelector((state: any) => state.web3);
  const navigate = useNavigate();
  useEffect(() => {
    console.log(AccountInfo);
    // 어드민이 아니면 이동하기
    if (AccountInfo.admin == false) {
      navigate("/");
    }
  }, [AccountInfo.admin]);
  return <AdminComponent></AdminComponent>;
};

export default AdminContainer;
