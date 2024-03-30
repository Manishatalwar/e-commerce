import React from "react";
import "./Offers.css";
import exclusive_image from "../Assets/taylor-swift.png";
const Offers = () => {
  return (
     
    <div className="offers">
      <div className="offers-left">
        <h1>Special</h1>
        <h1>Deals For You</h1>
        <p>ONLY ON BEST SELLERS PRODUCTS</p>
        <p>Explore our top-rated products at unbeatable prices!</p>
        {/* <button>Check now</button> */}
      </div>
      <div className="offers-right">
        <img src={exclusive_image} alt="" />
      </div>
    </div>
  );
};

export default Offers;
