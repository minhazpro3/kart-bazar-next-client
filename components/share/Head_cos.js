import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { AiOutlineMenu } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import Link from "next/link";

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
            <Link href="/"> Home </Link>
          </li>
          <li className="navbar__link dropdown">
            <li>Pages</li>
            <ul className="dropdown__menu">
              <li className="dropdown__menu-item">
                <Link href="shop"> Shop</Link>
              </li>
              <li className="dropdown__menu-item">
                <Link href="cart"> cart</Link>
              </li>
              <li className="dropdown__menu-item">
                <Link href="shop"> login</Link>
              </li>
              <li className="dropdown__menu-item">
                <Link href="auth/signup"> Register</Link>
              </li>
            </ul>
          </li>
          <li className="navbar__link dropdown">
            <a href="#">About us</a>
            <ul className="dropdown__menu">
              <li className="dropdown__menu-item">
                <a href="#">Contact</a>
              </li>
              <li className="dropdown__menu-item">
                <a href="#">Careers</a>
              </li>
              <li className="dropdown__menu-item">
                <a href="#">Our team</a>
              </li>
            </ul>
          </li>
          <li className="profile_logo">
            <CgProfile size={25} />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Head_cos;
