import { styled } from "styled-components";
import SideBarContainer from "./sidebar/SidebarContainer";

const AdminComponent = () => {
  return (
    <AdminBox>
      <SideBarContainer></SideBarContainer>
      <div>내용</div>
    </AdminBox>
  );
};

export default AdminComponent;

const AdminBox = styled.div`
  display: flex;
`;
