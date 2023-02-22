import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSidebarToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <ul>
          <li>Menu Item 1</li>
          <li className="has-dropdown">
            <span>Menu Item 2</span>
            <ul>
              <li>Submenu Item 1</li>
              <li>Submenu Item 2</li>
              <li>Submenu Item 3</li>
            </ul>
          </li>
          <li>Menu Item 3</li>
        </ul>
      </div>
      <button
        className={`${isOpen ? "sidebar-toggle" : "close_menu"}`}
        onClick={handleSidebarToggle}
      >
        <AiOutlineMenu />
      </button>
    </>
  );
};

export default Header;
