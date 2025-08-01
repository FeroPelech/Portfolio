import React from "react";
import { PureComponent } from "react";
import Header from "./Dashboard/Header/Header.jsx";
import SearchBar from "./Dashboard/Searchbar/SearchBar.jsx";
import EmojiResults from "./Dashboard/Emojis/EmojiResults.jsx";
import Filter from "./Dashboard/Emojis/Filter.js";

class App extends PureComponent {
  state = {
    filteredEmojis: Filter("", 20),
  };

  handleChange = (e) => {
    this.setState({
      filteredEmojis: Filter(e.target.value, 15),
    });
  };
  render() {
    return (
      <div>
        <Header />
        <SearchBar handleChange={this.handleChange} />
        <EmojiResults emojiData={this.state.filteredEmojis} />
      </div>
    );
  }
}
export default App;
