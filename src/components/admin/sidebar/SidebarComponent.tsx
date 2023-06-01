import { styled } from "styled-components";

type Props = {
  sidebarItems: { title: string; func: () => void }[];
};

const SidebarComponent: React.FC<Props> = ({ sidebarItems }) => {
  return (
    <SidebarBox>
      {sidebarItems.map((item, index) => (
        <div key={`sidebarItem-${index}`} onClick={item.func}>
          {item.title}
        </div>
      ))}
    </SidebarBox>
  );
};

export default SidebarComponent;

const SidebarBox = styled("div")({
  borderRight: "3px solid black",
  "& div": {
    margin: "10px 30px",
  },
});
