import React, { useState } from "react";

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
      <div onClick={() => setModal(!modal)} className="modal_shadow">
        <div className="modal_product">
          <div className="delete_icon">
            <h6>&#215;</h6>
          </div>
          <div className="modal_product_content"></div>
        </div>
      </div>
    </div>
  );
};

export default Product_details;
