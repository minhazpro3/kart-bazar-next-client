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
      link: "https://themes.pixelstrap.com/fastkart/assets/images/veg-3/cate1/1.png",
      category: "Vegetable",
      ratting: 4,
      unit: "Pcs",
      price: 34,
      quantity: 3,
    },
    {
      id: 4,
      title: "Chocolate Chip Cookies",
      link: "https://themes.pixelstrap.com/fastkart/assets/images/veg-3/cate1/1.png",
      category: "Vegetable",
      ratting: 4,
      unit: "Pcs",
      price: 34,
      quantity: 3,
    },
    {
      id: 5,
      title: "Chocolate Chip Cookies",
      link: "https://themes.pixelstrap.com/fastkart/assets/images/veg-3/cate1/1.png",
      category: "Vegetable",
      ratting: 4,
      unit: "Pcs",
      price: 34,
      quantity: 3,
    },
    {
      id: 6,
      title: "Chocolate Chip Cookies",
      link: "https://themes.pixelstrap.com/fastkart/assets/images/veg-3/cate1/1.png",
      category: "Vegetable",
      ratting: 4,
      unit: "Pcs",
      price: 34,
      quantity: 3,
    },
    {
      id: 7,
      title: "Chocolate Chip Cookies",
      link: "https://themes.pixelstrap.com/fastkart/assets/images/veg-3/cate1/1.png",
      category: "Vegetable",
      ratting: 4,
      unit: "Pcs",
      price: 34,
      quantity: 3,
    },
    {
      id: 8,
      title: "Chocolate Chip Cookies",
      link: "https://themes.pixelstrap.com/fastkart/assets/images/veg-3/cate1/1.png",
      category: "Vegetable",
      ratting: 4,
      unit: "Pcs",
      price: 34,
      quantity: 3,
    },
    {
      id: 9,
      title: "Chocolate Chip Cookies",
      link: "https://themes.pixelstrap.com/fastkart/assets/images/veg-3/cate1/1.png",
      category: "Vegetable",
      ratting: 4,
      unit: "Pcs",
      price: 34,
      quantity: 3,
    },
    {
      id: 10,
      title: "Chocolate Chip Cookies",
      link: "https://themes.pixelstrap.com/fastkart/assets/images/veg-3/cate1/1.png",
      category: "Vegetable",
      ratting: 4,
      unit: "Pcs",
      price: 34,
      quantity: 3,
    },
  ];

  return (
    <div>
      <div className="product_component">
        {products?.map((product) => (
          <Product_cart product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default Product;
