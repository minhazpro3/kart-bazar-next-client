import React from "react";

import { FaFacebook } from "react-icons/fa";
import {
  AiFillGoogleCircle,
  AiFillTwitterCircle,
  AiFillYoutube,
  AiFillLinkedin,
} from "react-icons/ai";
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <div className="container_footer">
        <div className="footer_child">
          <div className="footer_title">
            <h2 className="title_f">Kart Bazar</h2>
            <p className="des_f">
              it is a long established fact that a reader will be distracted by
              the readable content.
            </p>
            <div className="icon_f_social">
              <FaFacebook className="social_ico" />
              <AiFillGoogleCircle className="social_ico" />
              <AiFillTwitterCircle className="social_ico" />
              <AiFillYoutube className="social_ico" />
              <AiFillLinkedin className="social_ico" />
            </div>
            <div className="category_links_f">
              <h3>Categories</h3>
              <div className="category_link_f">
                <Link className="link_f" href="#">
                  Fresh Vegetables
                </Link>
                <Link className="link_f" href="#">
                  Hot Spice
                </Link>
                <Link className="link_f" href="#">
                  Brand New Bags
                </Link>
                <Link className="link_f" href="#">
                  New Bakery
                </Link>
                <Link className="link_f" href="#">
                  New Grocery
                </Link>
              </div>
            </div>
          </div>
          <div className="footer_about_project">
            <div>
              <h3>About Kart Bazar</h3>
              <Link href="#">About us</Link>
              <Link href="#">Contact us</Link>
              <Link href="#">Terms & Condition</Link>
              <Link href="#">Careers </Link>
              <Link href="#">Services</Link>
            </div>
            <div>
              <h3>Store information</h3>
              <h6>Kart Bazar Store, Bogura-5800</h6>
              <h6>Call us: 1233489950</h6>
              <h6>Email us: support@kartbazar.com</h6>
              <h6>Fax: 124334</h6>
            </div>
          </div>
          <div className="footer_project_links">
            <h3>Useful Link</h3>
            <Link href="#">Your Order</Link>
            <Link href="#">Your Account</Link>
            <Link href="#">Track Order</Link>
            <Link href="#">Your Cart</Link>
            <Link href="#">FAQs</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
