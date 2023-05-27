import { useState } from "react";
import DropdownComponent from "./DropdownComponent";

type Props = {
  title: string;
  items: DropdownItems[];
};

const DropdownContainer: React.FC<Props> = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <DropdownComponent
      toggleDropdown={toggleDropdown}
      isOpen={isOpen}
      title={title}
      items={items}></DropdownComponent>
  );
};

export default DropdownContainer;
