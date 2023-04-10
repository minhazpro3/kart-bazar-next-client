import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { AiOutlineMenu } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";

const Head_cos = () => {
  const [showDropdown1, setShowDropdown1] = useState(false);
  const [showDropdown2, setShowDropdown2] = useState(false);

  const toggleDropdown1 = () => setShowDropdown1(!showDropdown1);
  const toggleDropdown2 = () => setShowDropdown2(!showDropdown2);
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const toggleSidebar = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="container">
      <nav className="navbar">
        <div className="navbar__logo">Logo</div>
        <ul className="navbar__links">
          <li className="navbar__link">
            <a href="#">Home</a>
          </li>
          <li className="navbar__link dropdown">
            <a href="#">Dropdown 1</a>
            <ul className="dropdown__menu">
              <li className="dropdown__menu-item">
                <a href="#">Dropdown Item 1</a>
              </li>
              <li className="dropdown__menu-item">
                <a href="#">Dropdown Item 2</a>
              </li>
              <li className="dropdown__menu-item">
                <a href="#">Dropdown Item 3</a>
              </li>
            </ul>
          </li>
          <li className="navbar__link dropdown">
            <a href="#">Dropdown 2</a>
            <ul className="dropdown__menu">
              <li className="dropdown__menu-item">
                <a href="#">Dropdown Item 1</a>
              </li>
              <li className="dropdown__menu-item">
                <a href="#">Dropdown Item 2</a>
              </li>
              <li className="dropdown__menu-item">
                <a href="#">Dropdown Item 3</a>
              </li>
            </ul>
          </li>
           <li>
          <CgProfile />
        </li>
        </ul>
       
      </nav>
    </div>
  );
};

export default Head_cos;
