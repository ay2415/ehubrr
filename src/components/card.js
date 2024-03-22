import React from "react";
import "./card.css";

export default function Card(props) {
  return (
    <>
      <div className="productCard">
        <div className="productDiscount">{props.discount}</div>
        <div className="product">
          <div className="productImage">
            <img src={props.image} alt="imageOne" />
          </div>
          <div className="productDetails">
            <div className="accessories">{props.type}</div>
            <div className="productName">{props.name}</div>
            <div className="productCost">{props.cost}</div>
          </div>
        </div>
      </div>
    </>
  );
}