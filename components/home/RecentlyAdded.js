import Image from "next/image";
import React from "react";
import { Rating } from "react-simple-star-rating";

const RecentlyAdded = () => {
  const products = [
    {
      id: 1,
      title: "Chocolate Chip Cookies",
      image: "https://i.ibb.co/FXKpGm0/1.png",
      category: "Vegetable",
      ratting: 4,
      unit: "Pcs",
      price: 34,
      quantity: 3,
    },
    {
      id: 2,
      title: "Chocolate Chip Cookies",
      image: "https://i.ibb.co/bK1CDjW/2.png",
      category: "Vegetable",
      ratting: 4,
      unit: "Pcs",
      price: 34,
      quantity: 3,
    },
    {
      id: 3,
      title: "Chocolate Chip Cookies",
      image: "https://i.ibb.co/MPFvwfk/3.png",
      category: "Vegetable",
      ratting: 4,
      unit: "Pcs",
      price: 34,
      quantity: 3,
    },
    {
      id: 4,
      title: "Chocolate Chip Cookies",
      image: "https://i.ibb.co/tpyv4xX/4.png",
      category: "Vegetable",
      ratting: 4,
      unit: "Pcs",
      price: 34,
      quantity: 3,
    },
    {
      id: 5,
      title: "Chocolate Chip Cookies",
      image: "https://i.ibb.co/F795NVN/5.png",
      category: "Vegetable",
      ratting: 4,
      unit: "Pcs",
      price: 34,
      quantity: 3,
    },
    {
      id: 6,
      title: "Chocolate Chip Cookies",
      image: "https://i.ibb.co/qrRwJkW/6.png",
      category: "Vegetable",
      ratting: 4,
      unit: "Pcs",
      price: 34,
      quantity: 3,
    },
    {
      id: 7,
      title: "Chocolate Chip Cookies",
      image: "https://i.ibb.co/bg7Q1F2/7.png",
      category: "Vegetable",
      ratting: 4,
      unit: "Pcs",
      price: 34,
      quantity: 3,
    },
    {
      id: 8,
      title: "Chocolate Chip Cookies",
      image: "https://i.ibb.co/cbgfDKZ/8.png",
      category: "Vegetable",
      ratting: 4,
      unit: "Pcs",
      price: 34,
      quantity: 3,
    },
  ];
  return (
    <div>
      <h1>Recently Added</h1>
      {products?.map((product) => (
        <div key={product.id} className="recently_added_cart">
          <div className="recently_added_cart_image">
            <Image src={product.image} alt="cart image" fill />
          </div>
          <div className="recently_added_cart_texts">
            <p>Tuffets Britannia Cheezza </p>
            <Rating className="rating" initialValue={4} readonly size={15} />
            <br />
            <span>$ 45.00</span>
            <button className="rated_cart_button">add to cart &#8594;</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecentlyAdded;
