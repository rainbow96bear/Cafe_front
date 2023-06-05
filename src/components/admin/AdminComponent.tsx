import { styled } from "styled-components";
import { Route, Routes } from "react-router-dom";

import SideBarContainer from "./sidebar/SidebarContainer";
import UploadContainer from "./upload/UploadContainer";
import MangementContainer from "./management/ManagementContainer";

const AdminComponent = () => {
  return (
    <AdminBox>
      <SideBarContainer></SideBarContainer>
      <DisplayBox>
        <Routes>
          <Route
            path="/management"
            element={<MangementContainer></MangementContainer>}></Route>
          <Route
            path="/upload"
            element={<UploadContainer></UploadContainer>}></Route>
        </Routes>
      </DisplayBox>
    </AdminBox>
  );
};

export default AdminComponent;

const AdminBox = styled("div")({
  display: "flex",
});
const DisplayBox = styled("div")({
  width: "50%",
  margin: "auto",
});
