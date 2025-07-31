import { PureComponent } from "react";
import "./SearchBar.css";
import Filter from "./Dashbord/Emoji/Filter";
export class SearchBar extends PureComponent {
  state = {
    filteredEmojis: Filter("", 20),
  };

  render() {
    return (
      <div className="search-input">
        <div>
          <input className="input-text" placeholder="Search Emoji" />
        </div>
      </div>
    );
  }
}

export default SearchBar;
