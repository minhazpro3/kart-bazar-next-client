import Image from "next/image";
import React from "react";
import { Rating } from "react-simple-star-rating";
import { AiOutlineMinus } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
const Product_cart = (props) => {
  const { title, price, category, unit, ratting, link } = props.product;
  return (
    <div className="product_cart">
      <div className="product_cart_img_div">
        <div className="product_cart_img">
          <Image src={link} alt="product" fill />
        </div>
      </div>
      <div className="product_cart_texts">
        <p className="category">{category}</p>
        <h3 className="title">{title} </h3>
        <Rating initialValue={ratting} readonly size={15} />
        <p className="unit">{unit}</p>

        <h5 className="price">
          ${price}.00 <s>$34.00</s>
        </h5>

        <div className="add_to_cart">
          <h4>
            <span>
              <AiOutlineMinus />
            </span>
            00
            <span>
              <AiOutlinePlus />
            </span>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Product_cart;
