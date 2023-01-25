import Image from "next/image";
import Link from "next/link";
import React from "react";
import big_sale from "../../public/big_sale.png";

const Cart_grand_total = () => {
  return (
    <div>
      <div className="grand_total_component">
        <div className="offer_bigSale_image">
          <Image src={big_sale} alt="big sale image" fill />
        </div>
        <div className="apply_coupon">
          <h3>Cart Total</h3>
          <label>Coupon Apply</label>
          <br />

          <input type="text" placeholder="Enter Coupon Code Here" required />
          <button className="coupon_apply">Apply</button>
          <div className="cart_subtotal">
            <h5>Subtotal</h5>
            <h5>$30.00</h5>
          </div>
          <div className="cart_discount">
            <h5>Coupon Discount</h5>
            <h5>$30.00</h5>
          </div>
          <div className="cart_shipping">
            <h5>Shipping</h5>
            <h5>$30.00</h5>
          </div>

          <div className="grand_price">
            <h5>Total (USD)</h5>
            <h5 id="only_price">$233.00</h5>
          </div>
          <div className="hr"> </div>
          <div className="checkout_button_div">
            <Link className="checkout_button" href="#">
              Process to checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart_grand_total;
