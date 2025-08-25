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
      {loading && <p>Loading...</p>}
      <ul>
        {characters.map((char) => (
          <li key={char.char_id}>
            <img src={char.img} alt={char.name} width="100" />
            <p>{char.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;
