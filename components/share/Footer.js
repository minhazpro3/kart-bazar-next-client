import React from "react";

import { FaFacebook } from "react-icons/fa";
import { BiCurrentLocation } from "react-icons/bi";
import { FiPhoneCall } from "react-icons/fi";
import { MdMarkEmailRead } from "react-icons/md";

import {
  AiFillGoogleCircle,
  AiFillTwitterCircle,
  AiFillYoutube,
  AiFillLinkedin,
  AiFillPrinter,
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
            <h3>About Kart Bazar</h3>
            <div className="about_links_f">
              <Link className="about_link_f" href="#">
                About us
              </Link>
              <Link className="about_link_f" href="#">
                Contact us
              </Link>
              <Link className="about_link_f" href="#">
                Terms & Condition
              </Link>
              <Link className="about_link_f" href="#">
                Careers{" "}
              </Link>
              <Link className="about_link_f" href="#">
                Services
              </Link>
            </div>
            <div className="contact_info">
              <h3>Store information</h3>
              <h6>
                {" "}
                <BiCurrentLocation /> Kart Bazar Store, Bogura-5800
              </h6>
              <h6>
                {" "}
                <FiPhoneCall /> Call us: 1233489950
              </h6>
              <h6>
                <MdMarkEmailRead /> Email us: support@kartbazar.com
              </h6>
              <h6>
                <AiFillPrinter /> Fax: 124334
              </h6>
            </div>
          </div>
          <div className="footer_project_links">
            <h3>Useful Link</h3>
            <Link className="project_page_link" href="#">
              Your Order
            </Link>
            <br />
            <Link className="project_page_link" href="#">
              Your Account
            </Link>
            <br />
            <Link className="project_page_link" href="#">
              Track Order
            </Link>
            <br />
            <Link className="project_page_link" href="#">
              Your Cart
            </Link>
            <br />
            <Link className="project_page_link" href="#">
              FAQs
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
