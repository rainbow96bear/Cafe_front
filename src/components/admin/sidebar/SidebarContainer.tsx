import { useState } from "react";

import SidebarComponent from "./SidebarComponent";
import { useNavigate } from "react-router-dom";

const SidebarContainer = () => {
  const navigate = useNavigate();
  const sidebarItems = [
    {
      title: "커피 관리",
      func: () => {
        navigate("/admin/management?product=coffee");
      },
    },
    {
      title: "굿즈 관리",
      func: () => {
        navigate("/admin/management?product=goods");
      },
    },
    {
      title: "물품 등록",
      func: () => {
        navigate("/admin/upload");
      },
    },
  ];
  return <SidebarComponent sidebarItems={sidebarItems}></SidebarComponent>;
};

export default SidebarContainer;
