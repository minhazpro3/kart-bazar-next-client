import React from "react";
import Cart_banner from "./Cart_banner";
import Cart_grand_total from "./Cart_grand_total";
import Cart_product from "./Cart_product";
import Cart_products from "./Cart_products";

const Cart = () => {
  return (
    <div>
      <div className="cart_main_banner">
        <div className="cart_main_banner_container">
          <Cart_banner />
        </div>
      </div>

      <div className="cart_main_components">
        {/* <Cart_products /> */}
        <Cart_product />
        <Cart_grand_total />
      </div>
    </div>
  );
};

export default Cart;
