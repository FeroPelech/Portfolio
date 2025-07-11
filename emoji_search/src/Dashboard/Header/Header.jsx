import React, { PureComponent } from "react";
import "./Header.css";

export class Header extends PureComponent {
  render() {
    return (
      <header className="header">
        <img
          src="//cdn.jsdelivr.net/emojione/assets/png/1f638.png"
          alt=""
          height="32"
          width="32"
        />
        Emoji Search
        <img
          src="//cdn.jsdelivr.net/emojione/assets/png/1f63a.png"
          alt=""
          height="32"
          width="32"
        />
      </header>
    );
  }
}

export default Header;
