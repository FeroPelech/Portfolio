import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const App = () => {
  return (
    <div className="App">
      <div className="header__logo"></div>

      <div className="header__search"></div>

      <div className="header__nav">
        <div className="nav__item">
          <span className="nav__itemLineOne">Hello Guest</span>
          <span className="nav__itemLineTwo">Sign In</span>
        </div>
        <div className="nav__item">
          <span className="nav__itemLineOne">Your</span>
          <span className="nav__itemLineTwo">Shop</span>
        </div>
        <div className="nav__item">
          <ShoppingCartIcon />
          <span className="nav__itemLineTwo">0</span>
        </div>
      </div>
    </div>
  );
};

export default App;
