import { useState } from "react";

const SearchBar = ({ query, setQuery }) => {
  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search characters..."
      />
    </div>
  );
};

export default SearchBar;
