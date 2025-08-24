import React, { useState } from "react";
import SearchBar from "./Components/SearchBar";
import CharacterList from "./Components/CharacterList";
import useCharacters from "./Hooks/useCharacters";

const App = () => {
  const [query, setQuery] = useState("");
  const { characters, loading } = useCharacters(query);
  return <div>App</div>;
};

export default App;
