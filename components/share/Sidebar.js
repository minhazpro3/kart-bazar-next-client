import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import { CgProfile } from "react-icons/cg";
import Link from "next/link";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSidebarToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="sidebarMain">
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <ul>
          <li>Item</li>
          <li className="has-dropdown">
            <span>Pages</span>
            <ul>
              <li>
                <Link href="/auth/signin">Login</Link>
              </li>
              <li>Submenu Item 2</li>
              <li>Submenu Item 3</li>
            </ul>
          </li>
          <li>Menu Item 3</li>
        </ul>
      </div>
      <div className={`${isOpen==true?"mobile_nav_fixed":"mobile_nav"}`}>
        <div>
          {!isOpen ? (
            <button
              className={`${isOpen ? " " : "close_menu"}`}
              onClick={handleSidebarToggle}
            >
              <AiOutlineMenu />
            </button>
          ) : (
            <button
              className={`${isOpen ? "sidebar-toggle" : " "}`}
              onClick={handleSidebarToggle}
            >
              <RxCross1 />
            </button>
          )}
        </div>
        <h2>
          KART <span>BAZAR</span>
        </h2>
        <div className="nav_profile">
          <CgProfile />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
