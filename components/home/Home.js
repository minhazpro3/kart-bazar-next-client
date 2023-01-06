import React from "react";
import Bank_offer from "./Bank_offer";
import Banner from "./Banner";
import Category from "./Category";
import Product from "./Product";
import TopProducts from "./TopProducts";

const Home = () => {
  return (
    <div className="container_home">
      <Banner />
      <Category />
      <Product />
      <TopProducts />
      <Bank_offer />
    </div>
  );
};

export default Home;
