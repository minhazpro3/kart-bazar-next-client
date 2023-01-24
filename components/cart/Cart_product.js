import Image from "next/image";
import React from "react";

const Cart_product = () => {
  return (
    <div className="cart_single_component">
      {/* profile title  */}
      <div className="cart_image_title">
        <div className="cart_image">
          <Image
            src="https://themes.pixelstrap.com/fastkart/assets/images/vegetable/product/1.png"
            alt="product"
            fill
          />
        </div>
        <div className="title_texts">
          <h3>Bell pepper</h3>
          <p>Sold By: Fresho</p>
          <p>Quantity: 1000gm</p>
        </div>
      </div>

      {/* pricing */}
      <div className="cart_pricing_qty">
        <div className="cart_price">
          <p>Price</p>
          <h5>
            $34.00 <s>$55.00</s>
          </h5>
          <h5 id="save">You Save: $20.00</h5>
        </div>

        <div className="cart_qty">
          <h3>Qty</h3>
          <div className="qty_buttons">
            <button id="minus">&#8722;</button>
            <span>0</span>
            <button id="plus">&#43;</button>
          </div>
        </div>
        <div className="cart_total">
          <h3>Total</h3>
          <h5>$24.00</h5>
        </div>
      </div>

      {/* actions */}
      <div className="actions_types">
        <h3>Action</h3>
        <p id="save_later">Save for later</p>
        <p id="cart_remove">Remove</p>
      </div>
    </div>
  );
};

export default Cart_product;
