import Image from "next/image";
import React from "react";
import { RiMoneyDollarBoxLine } from "react-icons/ri";
import { AiFillGift } from "react-icons/ai";

const Bank_offer = () => {
  return (
    <div className="offer_cart_component">
      <div className="offer_cart_child">
        <div className="offer_cart">
          <div className="offer_cart_text_image">
            <div className="offer_text_left">
              <h6 className="text_icon">
                <RiMoneyDollarBoxLine />
                <span> Money Talk</span>
              </h6>
              <h2 className="left_offer">GET 10% OFF</h2>
              <p className="invest">
                When you spend <span style={{ color: "#fa3a3a" }}>$30</span>
              </p>
              <p className="valid">Valid for 30 days</p>
            </div>
            <div className="cart_imag">
              <Image
                src="https://i.ibb.co/drTvjFT/1.png"
                width={150}
                height={150}
                alt="cart image"
              />
            </div>
          </div>
        </div>
        <div className="offer_cart_footer_left">
          <h2>
            Code: JKLL23348DF <span>Happy Shop!</span>
          </h2>
        </div>
      </div>

      {/* right side offer cart */}

      <div className="offer_cart_child">
        <div className="offer_cart">
          <div className="offer_cart_text_image">
            <div className="offer_text_left">
              <h6 className="text_icon">
                <AiFillGift style={{ color: "#fa3a3a" }} />
                <span> Money works</span>
              </h6>
              <h2 className="right_offer">GET 10% OFF</h2>
              <p className="invest">
                When you spend <span>$30</span>
              </p>
              <p className="valid">Valid for 30 days</p>
            </div>
            <div className="cart_imag">
              <Image
                src="https://i.ibb.co/TWfHBMR/2-1.png"
                width={150}
                height={150}
                alt="cart image"
              />
            </div>
          </div>
        </div>
        <div className="offer_cart_footer_right">
          <h2>
            Code: S23DHTDFH23 <span>Happy Shop!</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Bank_offer;
