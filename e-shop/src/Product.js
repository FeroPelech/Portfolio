import React, { useState } from "react";
import "./Product.css";
import {useState}

export default function Product({ id, title, image, price, rating }) {
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <strong>{price}</strong>
          <small>€</small>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} alt="Bag" />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

//⭐⭐
