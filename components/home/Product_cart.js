import Image from "next/image";
import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";
import { AiOutlineFolderView } from "react-icons/ai";
import { BsCartCheck } from "react-icons/bs";
import Product_details from "./../utils/Product_details";
const Product_cart = (props) => {
  const { title, price, category, unit, ratting, link } = props.product;
  const { modal, setModal } = props;

  return (
    <div className="product_cart_main">
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
            <button className="add_to_cart_product">
              {" "}
              + Add to Cart &#8594;
            </button>
          </div>
        </div>
      </div>
      <div className="cart_hover_button">
        <button onClick={() => setModal(!modal)} className=" button">
          <AiOutlineFolderView />
        </button>

        <button className=" button">
          <BsCartCheck />
        </button>
      </div>
    </div>
  );
};

export default Product_cart;
