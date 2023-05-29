import { styled } from "styled-components";

type Props = {
  sidebarItems: { title: string; func: () => void }[];
};

const SidebarComponent: React.FC<Props> = ({ sidebarItems }) => {
  return (
    <SidebarBox>
      {sidebarItems.map((item, index) => (
        <li key={`sidebarItem-${index}`} onClick={item.func}>
          {item.title}
        </li>
      ))}
    </SidebarBox>
  );
};

export default SidebarComponent;

const SidebarBox = styled.div``;
