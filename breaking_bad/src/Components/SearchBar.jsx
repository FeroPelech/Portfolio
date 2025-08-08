import React, { useState } from "react";

const SearchBar = ({ setQuery }) => {
  const [text, setText] = useState("");

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
