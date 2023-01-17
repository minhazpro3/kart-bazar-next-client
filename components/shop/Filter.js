import Image from "next/image";
import React from "react";
import filter_image from "../../public/filter.jpg";
import { BiSearchAlt2 } from "react-icons/bi";

const Filter = () => {
  return (
    <div>
      <div className="filter_section">
        <h2>Sort By Filters</h2>
        <div className="filter_text_image">
          <div className="filter_input">
            <input
              className="input"
              type="text"
              placeholder="Search by pasdasdadroduct name"
            />
            <BiSearchAlt2 className="search_icon" />
            <h5>Search by result:</h5>
          </div>
          <div className="filter_image"></div>
        </div>
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
  );
};

export default Filter;
