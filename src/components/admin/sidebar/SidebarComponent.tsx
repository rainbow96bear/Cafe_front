import { styled } from "styled-components";

type Props = {
  sidebarItems: string[];
};

const SidebarComponent: React.FC<Props> = ({ sidebarItems }) => {
  return (
    <SidebarBox>
      {sidebarItems.map((item, index) => (
        <li key={`sidebarItem-${index}`}>{item}</li>
      ))}
    </SidebarBox>
  );
};

export default SidebarComponent;

const SidebarBox = styled.div``;
