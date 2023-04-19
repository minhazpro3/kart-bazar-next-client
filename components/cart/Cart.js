import React from "react";
import Cart_banner from "./Cart_banner";
import Cart_grand_total from "./Cart_grand_total";
import Cart_product from "./Cart_product";
import Cart_products from "./Cart_products";
import Footer from "./../share/Footer";
import { useSelector } from "react-redux";
import Head_cos from "../share/Head_cos";

const Cart = () => {
  const state = useSelector((state) => state);
  console.log(state);
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
        <Cart_product />
        <Cart_product />
      </div>
      <div className="cart_main_components" style={{ overflowX: "hidden" }}>
        <Cart_grand_total />
      </div>
      <div style={{ backgroundColor: "#051616" }}>
        <Footer />
      </div>
    </div>
  );
};

export default Cart;
