import Image from "next/image";
import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";

const Delivery = () => {
  return (
    <div className="delivery_cart_component">
      <div className="delivery_cart_left">
        <div className="delivery_cart_left_image">
          <Image src="https://i.ibb.co/QYQWJnY/delivery.png" alt="" fill />
        </div>
        <div className="delivery_texts">
          <h3>Safe Delivery to the door</h3>
          <h6>Make money on your terms. Anytime and anyhow.</h6>
          <p>
            <span>
              {" "}
              <AiFillCheckCircle />{" "}
            </span>
            Get live order tracking
          </p>
          <p>
            <span>
              {" "}
              <AiFillCheckCircle />{" "}
            </span>
            Get latest feature updates
          </p>
          <button className="delivery_more_button">More &#8594;</button>
        </div>
      </div>
      <div className="delivery_cart_right ">
        <div className="delivery_cart_right_image">
          <Image
            src="https://i.ibb.co/1ntJP7Q/side.jpg"
            alt="delivery icon"
            fill
          />
        </div>
      </div>
    </div>
  );
};

export default Delivery;
