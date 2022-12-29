import Image from "next/image";
import React from "react";
import banner1 from "../../public/banner-left.jpg";
import banner2 from "../../public/banner-right.jpg";

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
            Exclusive offer<span> 30% Off</span>
          </p>
          <h2>STAY HOME & DELIVERED YOUR</h2>
          <h2>DAILY NEEDS</h2>
          <p>
            Many organizations have issued official statements encouraging
            people to reduce their intake of sugary drinks.
          </p>
          <button>Shop Now</button>
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
        <div className="banner_text_right"></div>
      </div>
    </div>
  );
};

export default Banner;
