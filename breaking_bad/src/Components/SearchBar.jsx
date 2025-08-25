import { useState } from "react";
import useCharacters from "../Hooks/useCharacters";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const { characters, loading } = useCharacters(query);
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
