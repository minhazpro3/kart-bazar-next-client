import Image from "next/image";
import React from "react";
import banner1 from "../../public/banner-left.jpg";
import banner2 from "../../public/banner-right.jpg";
import { HiArrowNarrowRight } from "react-icons/hi";

const Banner = () => {
  return (
    <div className="main_banner">
      <div className="banner_left">
        <div className="banner_img_left">
          <Image
            src={banner1}
            alt="banner-image"
            fill
            style={{ borderRadius: "5px" }}
          />
        </div>
        <div className="banner_text_left">
          <p>
            Exclusive offer<span id="parseint"> 30% Off</span>
          </p>
          <h2>
            STAY HOME & <br /> DELIVERED YOUR
          </h2>
          <h2 id="daily_need">DAILY NEEDS</h2>
          <p id="some_des">
            Many organizations have issued official statements encouraging
            people to reduce their intake of sugary drinks.
          </p>
          <button className="shop_now">
            Shop Now <HiArrowNarrowRight />
          </button>
        </div>
      </div>
      <div className="banner_right">
        <div className="banner_img_right">
          <Image
            src={banner2}
            alt="banner img"
            fill
            style={{ borderRadius: "5px" }}
          />
        </div>
        <div className="banner_text_right">
          <h2>Home</h2>
        </div>
      </div>
    </div>
  );
};

export default Banner;
