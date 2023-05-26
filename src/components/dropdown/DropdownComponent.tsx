import { styled } from "styled-components";

import CursorPointerDiv from "../../customComponent/CursorPointerDiv";

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
          <li>admin</li>
        </ItemBox>
      )}
    </>
  );
};

export default DropdownComponent;

const ItemBox = styled.ul`
  border: 1px solid red;
  width: fir-content;
  padding: 5px;
  position: absolute;
  right: 0px;
  top: 15px;
  li {
    list-style-type: none;
  }
`;
