import React from "react";

const SearchBar = () => {
  return (
    <div>
      <section>
        <form>
          <input
            type="text"
            className="form-control"
            placeholder="Search Characters"
            autoFocus
            name="search"
            value=""
            onChange=""
            id="search"
          />
        </form>
      </section>
    </div>
  );
};

export default SearchBar;
