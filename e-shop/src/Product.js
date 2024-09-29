import React from "react";
import "./Product.css";

export default function Product() {
  return (
    <div>
      <div className="product">
        <div className="product__info">
          <p>Title</p>
          <p className="product__price">30€</p>
          <div className="product__rating">⭐⭐</div>
          <img
            src="https://images.unsplash.com/photo-1547949003-9792a18a2601?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Bag"
          />
          <button>Add to Basket</button>
        </div>
      </div>
    </div>
  );
}
