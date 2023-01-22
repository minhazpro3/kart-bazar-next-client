import Image from "next/image";
import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";

const Product_details = ({ setModal, modal }) => {
  //   const [modal, setModal] = useState(false);

  //   const toggleModal = () => {
  //     setModal(!modal);
  //   };

  //   if (modal) {
  //     document.body.classList.add("active-modal");
  //   } else {
  //     document.body.classList.remove("active-modal");
  //   }

  return (
    <div>
      <div className="modal_shadow">
        <div className="modal_product">
          <div onClick={() => setModal(!modal)} className="delete_icon">
            <h6>&#215;</h6>
          </div>
          <div className="modal_product_content">
            <div className="modal_product_image">
              <Image
                src="https://themes.pixelstrap.com/fastkart/assets/images/product/category/1.jpg"
                alt="product image"
                fill
              />
            </div>
            <div className="modal_product_texts">
              <h2 className="product_title">
                PEANUT BUTTER BITE PREMIUM BUTTER COOKIES 600
              </h2>
              <h2 className="product_price">$40.00</h2>
              <p className="review_count">
                {" "}
                <Rating initialValue={4} readonly size={15} />
                <small className="review_length">(5 Review)</small>{" "}
                <small className="last_sold">12 sold in last 24 hours</small>
              </p>
              <h4 className="product_details_title">Product details</h4>
              <p className="product_description">
                Candy canes sugar plum tart cotton candy chupa chups sugar plum
                chocolate I love. Caramels marshmallow icing dessert candy canes
                I love soufflé I love toffee. Marshmallow pie sweet sweet roll
                sesame snaps tiramisu jelly bear claw. Bonbon muffin I love
                carrot cake sugar plum dessert bonbon.
              </p>

              <div className="product_types">
                <p>Brand Name: Moncat Cafe</p>
                <p>Product Code: c2309489</p>
                <p>Type of Product: White cream cake</p>
              </div>

              <h6 className="product_size">
                Size:{" "}
                <select>
                  <option selected disabled>
                    -- Choose on --
                  </option>
                  <option>1/2 kg</option>
                  <option>1 kg</option>
                  <option>2 kg</option>
                  <option>2 kg up</option>
                </select>{" "}
              </h6>
              <div className="product_details_button">
                <button className="button_add">Add To Cart </button>
                <button className="button_cart">Go to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product_details;
