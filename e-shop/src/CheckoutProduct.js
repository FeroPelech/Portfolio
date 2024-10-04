import React from "react";
import "./CheckoutProduct.css";

function CheckoutProduct() {
  return (
    <div className="checkoutProduct">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR_G7hyzoSHA_XyjfZX6KILSSAhFhTSjRzOO6JZDuZDvXOwD7amfpx&usqp=CAE&s"
        alt=""
        className="checkoutProduct__title"
      />
      <div className="product__info">
        <p className="checkoutProduct__title">
          The pack fits a full-frame DSLR camera, along with three to five
          lenses, and up to a 15 laptop. Customizable dividers and a FIELD PACK
          provide handy
        </p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>20</strong>
        </p>
        <div className="checkoutProduct__rating">⭐⭐</div>
        <button>Remove from basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
