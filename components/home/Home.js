import React from "react";
import Banner from "./Banner";
import Category from "./Category";
import Product from "./Product";

const Home = () => {
  return (
    <div className="container_home">
      <Banner />
      {/* <Category /> */}
      <Product />
    </div>
  );
};

export default Home;
