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
  boxSizing: "border-box",
  height: "100%",
  borderRight: "3px solid black",
  padding: "20px 30px",
  "& div": {
    marginBottom: "20px",
  },
});
