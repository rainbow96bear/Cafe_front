import { styled } from "styled-components";
import { Route, Routes } from "react-router-dom";

import SideBarContainer from "./sidebar/SidebarContainer";
import UploadContainer from "./upload/UploadContainer";
import MangementContainer from "./management/ManagementContainer";

const AdminComponent = () => {
  return (
    <AdminBox>
      <SideBarArea>
        <SideBarContainer></SideBarContainer>
      </SideBarArea>
      <DisplayBox>
        <Routes>
          <Route
            path="/management"
            element={<MangementContainer></MangementContainer>}></Route>
          <Route
            path="/upload"
            element={
              <UploadContainer listItem={null}></UploadContainer>
            }></Route>
        </Routes>
      </DisplayBox>
    </AdminBox>
  );
};

export default AdminComponent;

const AdminBox = styled("div")({
  display: "flex",
});

const SideBarArea = styled("div")({});

const DisplayBox = styled("div")({ margin: "auto" });
