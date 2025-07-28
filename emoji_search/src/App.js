import React from "react";
import { PureComponent } from "react";
import Header from "./Dashboard/Header/Header.jsx";
import SearchBar from "./Dashboard/Searchbar/SearchBar.jsx";
// import EmojiResults from "./Dashboard/Emojis/EmojiResults.jsx";
import Filter from "./Dashboard/Emojis/Filter.js";

class App extends PureComponent {
  state = {
    filteredEmojis: Filter("", 20),
  };
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
