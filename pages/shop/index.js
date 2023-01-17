import React from "react";
import Head_cos from "../../components/share/Head_cos";
import Shop_main from "./../../components/shop/Shop_main";

const index = () => {
  return (
    <div>
      <Head_cos />
      <div className="shop ">
        <Shop_main />
      </div>
    </div>
  );
};

export default index;
