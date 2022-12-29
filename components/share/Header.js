import React, { useState } from "react";

const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <div>
      <div className="header">
        <div className="logo-container">
          <h3 className="logo">Logo</h3>
        </div>

        <div className="nav_links">
          <ul className={click ? "nav-options active" : "nav-options"}>
            <li className="option" onClick={closeMobileMenu}>
              <a href="#">ABOUT</a>
            </li>
            <li className="option" onClick={closeMobileMenu}>
              <a href="#">CONTACT</a>
            </li>
            <li className="option" onClick={closeMobileMenu}>
              <a href="#">BLOG</a>
            </li>
            <li className="option mobile-option" onClick={closeMobileMenu}>
              <a href="#">SIGN-IN</a>
            </li>
            <li className=" option mobile-option" onClick={closeMobileMenu}>
              <a href="" className="sign-up">
                SIGN-UP
              </a>
            </li>
          </ul>
        </div>
        {/* <ul className="signin-up">
          <li className="sign-in" onClick={closeMobileMenu}>
            <a href="#">SIGN-IN</a>
          </li>
          <li onClick={closeMobileMenu}>
            <a href="" className="signup-btn">
              SIGN-UP
            </a>
          </li>
        </ul> */}

        <div className="mobile-menu" onClick={handleClick}>
          {click ? (
            <p className="menu-icon">Menu Icon</p>
          ) : (
            <p className="menu-icon">Menu Icon</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
