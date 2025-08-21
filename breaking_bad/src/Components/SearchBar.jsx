import React from "react";

const SearchBar = ({ query, setQuery }) => {
  return (
    <div>
      <input type="text" value={query} />
    </div>
  );
};

export default SearchBar;
