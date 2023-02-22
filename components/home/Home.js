import React, { useState } from "react";
import Footer from "../share/Footer";
import Bank_offer from "./Bank_offer";
import Banner from "./Banner";

import Category from "./Category";
import Delivery from "./Delivery";
import Product from "./Product";
import Surety from "./Surety";
import TopProducts from "./TopProducts";
import Head_cos from "./../share/Head_cos";
import Header from "../share/Header";

const Home = () => {
  return (
    <div>
      <div>
        <Head_cos />
      </div>

      <div className="container_home">
        {/* <Banner /> */}

        {/* <Category />
        <Product />
        <TopProducts />
        <Bank_offer />
        <Delivery />
        <Surety /> */}
      </div>
      <Header />
      {/* <div style={{ backgroundColor: "#051616" }}>
        <Footer />
      </div> */}
    </div>
  );
};

export default Home;
