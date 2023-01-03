import Image from "next/image";
import React from "react";
import { Rating } from "react-simple-star-rating";

const RecentlyAdded = () => {
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
      <h2>Recently Added</h2>
      <div className="recently_added_cart">
        <div className="recently_added_cart_image">
          <Image
            src="https://themes.pixelstrap.com/fastkart/assets/images/veg-3/cate1/1.png"
            alt="cart image"
            fill
          />
        </div>
        <div className="recently_added_cart_texts">
          <h3>Tuffets Britannia Cheezza </h3>
          <Rating initialValue={4} readonly size={15} />
          <h6>$45.00</h6>
        </div>
      </div>
    </div>
  );
};

export default RecentlyAdded;
