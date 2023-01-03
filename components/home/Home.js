import React from "react";
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
    </div>
  );
};

export default Home;
