import React from "react";
import { FaShippingFast, FaCircleNotch } from "react-icons/fa";
import { FiGift } from "react-icons/fi";
import { GiTimeBomb } from "react-icons/gi";
import { MdPayments } from "react-icons/md";

const Surety = () => {
  return (
    <div>
      <div className="surety_cart">
        <div className="surety_type">
          <FaShippingFast className="icon" size={40} />
          <div >
            <h3 >Free Shipping</h3>
            <p>Free Shipping world wide</p>
          </div>
        </div>
        <div className="surety_type">
          <GiTimeBomb className="icon" size={40} />
          <div >
            <h3 >24 x 7 Service</h3>
            <p>Online Service For 24 x 7</p>
          </div>
        </div>
        <div className="surety_type">
          <MdPayments className="icon" size={40} />
          <div >
            <h3 >Online Pay</h3>
            <p>Online Payment Available</p>
          </div>
        </div>
        <div className="surety_type">
          <FiGift className="icon" size={40} />
          <div >
            <h3 >Festival Offer</h3>
            <p>Super Sale Upto 50% off</p>
          </div>
        </div>
        <div className="surety_type">
          <FaCircleNotch className="icon" size={40} />
          <div >
            <h3 >100% Original</h3>
            <p>100% Money Back</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Surety;
