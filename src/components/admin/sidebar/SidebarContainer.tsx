import { useState } from "react";

import SidebarComponent from "./SidebarComponent";

const SidebarContainer = () => {
  const [sidebarItems, setSidebarItems] = useState(["상품관리", "통계"]);
  return <SidebarComponent sidebarItems={sidebarItems}></SidebarComponent>;
};

export default SidebarContainer;
