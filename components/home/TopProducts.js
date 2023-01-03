import React from "react";
import RecentlyAdded from "./RecentlyAdded";
import TopRated from "./TopRated";
import TopSelling from "./TopSelling";

const TopProducts = () => {
  return (
    <div>
      <div className="top_products_cart">
        <RecentlyAdded />
        <TopRated />
        <TopSelling />
      </div>
    </div>
  );
};

export default TopProducts;
