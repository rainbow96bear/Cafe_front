import { styled } from "styled-components";

import CursorPointerDiv from "../CursorPointerDiv";

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
          {items.map((item) => (
            <li
              onClick={() => {
                item.func();
              }}>
              {item.text}
            </li>
          ))}
        </ItemBox>
      )}
    </>
  );
};

export default DropdownComponent;

const ItemBox = styled.ul`
  border: 1px solid lightgray;
  background-color: white;
  width: fir-content;
  padding: 10px;
  margin: auto;
  position: absolute;
  top: 40px;
  right: -9px;
  li {
    list-style-type: none;
    border-bottom: 1px solid lightgray;
    padding-bottom: 5px;
  }
`;
