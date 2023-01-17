import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { AiOutlineMenu } from "react-icons/ai";

const Head_cos = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <nav>
        <div className="navbar">
          <AiOutlineMenu className="bx_menu" />

          <div className="logo">
            {show && <span onClick={() => setShow(true)}>open</span>}
            <a href="#">Logo </a>
          </div>
          <div className={`${show ? "nav_links" : "nav_links_0"}`}>
            <div className="sidebar_logo">
              <span>Kart Bazar</span> <RxCross2 />
            </div>
            <ul className="links">
              <li>
                <a href="#">Home</a>
              </li>
              <li style={{ zIndex: "21" }}>
                <a href="#">Pages</a>
                <MdKeyboardArrowDown className="arrow" />
                <ul className="pages_sub_menu  sub_menu">
                  <li>
                    <a href="/">Home </a>
                  </li>
                  <li>
                    <a href="#">About us</a>
                  </li>
                  <li>
                    <a href="#">Contact us</a>
                  </li>
                  <li>
                    <a href="#">Payment</a>
                  </li>
                </ul>
              </li>
              <li style={{ marginLeft: "3px", zIndex: "20" }}>
                <a href="#">Services</a>
                <MdKeyboardArrowDown className="arrow" />
                <ul className="pages_sub_menu  sub_menu">
                  <li>
                    <a href="#">Home </a>
                  </li>
                  <li>
                    <a href="#">About us</a>
                  </li>
                  <li>
                    <a href="#">Contact us</a>
                  </li>
                  <li>
                    <a href="#">Payment</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">About us</a>
              </li>
            </ul>
          </div>
          <div className="profile">Hey Md</div>
        </div>
      </nav>
    </div>
  );
};

export default Head_cos;
