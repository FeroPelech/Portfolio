import React from "react";
import "./Product.css";

export default function Product({ id, title, image, price, rating }) {
  return (
    <div>
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
          <img src={image} alt="Bag" />
          <button>Add to Basket</button>
        </div>
      </div>
    </div>
  );
}

//⭐⭐
