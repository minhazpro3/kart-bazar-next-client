import React from "react";
import Footer from "../share/Footer";
import Bank_offer from "./Bank_offer";
import Banner from "./Banner";

import Category from "./Category";
import Delivery from "./Delivery";
import Product from "./Product";
import Surety from "./Surety";
import TopProducts from "./TopProducts";
import Head_cos from "./../share/Head_cos";

const Home = () => {
  return (
    <div>
      <Head_cos />
      <div className="container_home">
        <Banner />
        <Category />
        <Product />
        <TopProducts />
        <Bank_offer />
        <Delivery />
        <Surety />
      </div>
      <div style={{ backgroundColor: "#051616" }}>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
