import Image from "next/image";
import React from "react";
import mega from "../../public/mega sale.jpg";
import banner from "../../public/bg-img.jpg";
import { BiSearchAlt2 } from "react-icons/bi";

const Filter = () => {
  return (
    <div>
      <div className="filter_section" style={{ zIndex: 20 }}>
        <div className="filter_banner">
          <Image fill src={banner} alt="shope banner image" />
        </div>

        <div className="banner_text">
          <h2>Get your grocery in 25 minutes</h2>
          <h3>
            Hot mega sale ! <span>Up to 80%</span>
          </h3>
          <div className="filter_input">
            <input
              className="input"
              type="text"
              placeholder="Search by product name"
            />
            <BiSearchAlt2 className="search_icon" />
          </div>
        </div>
        <h2>Sort By Filters</h2>
        <div className="filter_text_image">
          <div>
            <div className="filter_by_etc">
              <select>
                <option>Category</option>
                <option>vegetable </option>
              </select>
              <select>
                <option>Sort by rating</option>
                <option>1 </option>
                <option>2 </option>
                <option>3 </option>
                <option>4 </option>
                <option>5 </option>
              </select>
              <select>
                <option>Sort by type</option>
                <option>Recently added </option>
                <option>Top selling </option>
              </select>
              <select>
                <option>Sort by price</option>
                <option>1 to 100 </option>
                <option>101 to 200 </option>
                <option>201 to 400 </option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <h5>Search by result:</h5>
    </div>
  );
};

export default Filter;
