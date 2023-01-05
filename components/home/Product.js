import Image from "next/image";
import React from "react";

import Product_cart from "./Product_cart";

const Product = () => {
  const products = [
    {
      id: 1,
      title: "Chocolate Chip Cookies",
      link: "https://themes.pixelstrap.com/fastkart/assets/images/veg-3/cate1/1.png",
      category: "Vegetable",
      ratting: 4,
      unit: "Pcs",
      price: 34,
      quantity: 3,
    },
    {
      id: 2,
      title: "Chocolate Chip Cookies",
      link: "https://themes.pixelstrap.com/fastkart/assets/images/veg-3/cate1/1.png",
      category: "Vegetable",
      ratting: 4,
      unit: "Pcs",
      price: 34,
      quantity: 3,
    },
    {
      id: 3,
      title: "Chocolate Chip Cookies",
      link: "https://i.ibb.co/cbgfDKZ/8.png",
      category: "Vegetable",
      ratting: 4,
      unit: "Pcs",
      price: 34,
      quantity: 3,
    },
    {
      id: 4,
      title: "Chocolate Chip Cookies",
      link: "https://i.ibb.co/bg7Q1F2/7.png",
      category: "Vegetable",
      ratting: 4,
      unit: "Pcs",
      price: 34,
      quantity: 3,
    },
    {
      id: 5,
      title: "Chocolate Chip Cookies",
      link: "https://i.ibb.co/qrRwJkW/6.png",
      category: "Vegetable",
      ratting: 4,
      unit: "Pcs",
      price: 34,
      quantity: 3,
    },
    {
      id: 6,
      title: "Chocolate Chip Cookies",
      link: "https://i.ibb.co/F795NVN/5.png",
      category: "Vegetable",
      ratting: 4,
      unit: "Pcs",
      price: 34,
      quantity: 3,
    },
    {
      id: 7,
      title: "Chocolate Chip Cookies",
      link: "https://i.ibb.co/tpyv4xX/4.png",
      category: "Vegetable",
      ratting: 4,
      unit: "Pcs",
      price: 34,
      quantity: 3,
    },
    {
      id: 8,
      title: "Chocolate Chip Cookies",
      link: "https://i.ibb.co/MPFvwfk/3.png",
      category: "Vegetable",
      ratting: 4,
      unit: "Pcs",
      price: 34,
      quantity: 3,
    },
    {
      id: 9,
      title: "Chocolate Chip Cookies",
      link: "https://i.ibb.co/bK1CDjW/2.png",
      category: "Vegetable",
      ratting: 4,
      unit: "Pcs",
      price: 34,
      quantity: 3,
    },
    {
      id: 10,
      title: "Chocolate Chip Cookies",
      link: "https://i.ibb.co/FXKpGm0/1.png",
      category: "Vegetable",
      ratting: 4,
      unit: "Pcs",
      price: 34,
      quantity: 3,
    },
  ];

  return (
    <div>
      <h1>Our Products</h1>
      <div className="product_component">
        {products?.map((product) => (
          <Product_cart product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default Product;
