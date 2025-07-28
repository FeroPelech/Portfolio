import React from "react";
import Header from "./Dashboard/Header/Header.jsx";
import SearchBar from "./Dashboard/Searchbar/SearchBar.jsx";
// import EmojiResults from "./Dashboard/Emojis/EmojiResults.jsx";
import Filter from "./Dashboard/Emojis/Filter";
import { PureComponent } from "react";

class App extends PureComponent {
  render() {
    return (
      <div>
        <Header />
        <SearchBar />
      </div>
    );
  }
}
export default App;
