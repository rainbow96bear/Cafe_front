import { styled } from "styled-components";

import CursorPointerDiv from "../CursorPointerDiv";
import SimpleLink from "../SimpleLink";
type Props = {
  toggleDropdown: () => void;
  isOpen: boolean;
  title: string;
  items: DropdownItems[];
};

const DropdownComponent: React.FC<Props> = ({
  toggleDropdown,
  isOpen,
  title,
  items,
}) => {
  return (
    <>
      <CursorPointerDiv
        onClick={() => {
          toggleDropdown();
        }}>
        {title}
      </CursorPointerDiv>
      {isOpen && (
        <ItemBox>
          {items.map((item, index) => (
            <SimpleLink
              key={`list-${index}`}
              to={item.path}
              onClick={() => {
                {
                  item.func ? item.func() : console.log();
                }
                toggleDropdown();
              }}>
              {item.text}
            </SimpleLink>
          ))}
        </ItemBox>
      )}
    </>
  );
};

export default DropdownComponent;

const ItemBox = styled.ul`
  display: flex;
  flex-direction: column;
  border: 1px solid lightgray;
  background-color: white;
  width: fir-content;
  padding: 10px;
  margin: auto;
  position: absolute;
  top: 40px;
  right: -9px;
  div {
    width: 100%;
  }
  li {
    list-style-type: none;
    border-bottom: 1px solid lightgray;
    padding-bottom: 5px;
  }
`;
