import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSidebarToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="sidebarMain">
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
      <div className="mobile_nav">
        <div>
          <button
            className={`${isOpen ? "sidebar-toggle" : "close_menu"}`}
            onClick={handleSidebarToggle}
          >
            <AiOutlineMenu />
          </button>
        </div>
        <h2>
          KART <span>BAZAR</span>
        </h2>
        <div className="nav_profile">
          <h6>Profile</h6>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
