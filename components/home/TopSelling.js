import Image from "next/image";
import React from "react";
import { Rating } from "react-simple-star-rating";

const TopSelling = () => {
  return (
    <div>
      {" "}
      <h2>Top Selling</h2>
      <div className="recently_added_cart">
        <div className="recently_added_cart_image">
          <Image
            src="https://themes.pixelstrap.com/fastkart/assets/images/veg-3/cate1/1.png"
            alt="cart image"
            fill
          />
        </div>
        <div className="recently_added_cart_texts">
          <h3>Tuffets Britannia Cheezza </h3>
          <Rating initialValue={4} readonly size={15} />
          <h6>$45.00</h6>
        </div>
      </div>
    </div>
  );
};

export default TopSelling;
