import { PureComponent } from "react";
import "./SearchBar.css";
export class SearchBar extends PureComponent {
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
