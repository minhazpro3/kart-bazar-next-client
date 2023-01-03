import Image from "next/image";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

const Category = () => {
  const categories = [
    {
      id: 1,
      title: "Rich, Flour & Gains",
      image: "https://i.ibb.co/FXKpGm0/1.png",
    },
    {
      id: 2,
      title: "Rich, Flour & Gains",
      image: "https://i.ibb.co/bK1CDjW/2.png",
    },
    {
      id: 3,
      title: "Rich, Flour & Gains",
      image: "https://i.ibb.co/MPFvwfk/3.png",
    },
    {
      id: 4,
      title: "Rich, Flour & Gains",
      image: "https://i.ibb.co/tpyv4xX/4.png",
    },
    {
      id: 5,
      title: "Rich, Flour & Gains",
      image: "https://i.ibb.co/F795NVN/5.png",
    },
    {
      id: 6,
      title: "Rich, Flour & Gains",
      image: "https://i.ibb.co/qrRwJkW/6.png",
    },
    {
      id: 7,
      title: "Rich, Flour & Gains",
      image: "https://i.ibb.co/bg7Q1F2/7.png",
    },
    {
      id: 8,
      title: "Rich, Flour & Gains",
      image: "https://i.ibb.co/cbgfDKZ/8.png",
    },
  ];

  return (
    <div className="category_div">
      <h1>Shop By Categories</h1>
      <Swiper
        breakpoints={{
          540: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 15,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 15,
          },
        }}
        slidesPerView={1}
        spaceBetween={15}
        loop={true}
        autoplay={{
          delay: 4000,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        {categories?.map((category) => (
          <SwiperSlide key={category.id}>
            <div className="category_cart">
              <div className="category_cart_child">
                <div className="category_image">
                  <Image src={category.image} alt="category" fill />
                </div>
              </div>
              <h2>{category.title}</h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Category;
