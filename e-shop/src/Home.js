import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div>
      <div className="home">
        <div className="home__container">
          <img
            src="https://plus.unsplash.com/premium_photo-1677995700941-100976883af7?q=80&w=2123&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="home__image"
          />

          <div className="home__row">
            <Product
              id="2156287"
              title="The pack fits a full-frame DSLR camera, along with three to five lenses, and up to a 15 laptop. Customizable dividers and a FIELD PACK provide handy"
              price={11.96}
              rating={5}
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR_G7hyzoSHA_XyjfZX6KILSSAhFhTSjRzOO6JZDuZDvXOwD7amfpx&usqp=CAE&s"
            />
            <Product />
          </div>

          <div className="home__row">
            <Product />
            <Product />
            <Product />
          </div>

          <div className="home__row">
            <Product />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
