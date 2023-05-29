import { styled } from "styled-components";
import { Route, Routes } from "react-router-dom";

import SideBarContainer from "./sidebar/SidebarContainer";
import UploadContainer from "./upload/UploadContainer";
import MangementContainer from "./management/ManagementContainer";

const AdminComponent = () => {
  return (
    <AdminBox>
      <SideBarContainer></SideBarContainer>
      <Routes>
        <Route
          path="/management"
          element={<MangementContainer></MangementContainer>}></Route>
        <Route
          path="/upload"
          element={<UploadContainer></UploadContainer>}></Route>
      </Routes>
    </AdminBox>
  );
};

export default AdminComponent;

const AdminBox = styled.div`
  display: flex;
`;
