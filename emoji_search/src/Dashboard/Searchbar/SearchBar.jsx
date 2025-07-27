import { PureComponent } from "react";

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
