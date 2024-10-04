import React from "react";
import "./CheckoutProduct.css";

function CheckoutProduct() {
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
      <button>Add to Basket</button>
    </div>
  );
}

export default CheckoutProduct;
