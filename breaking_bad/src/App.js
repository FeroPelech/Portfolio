import React, { useState } from "react";
import Header from "./Components/NavBar";
import SearchBar from "./Components/SearchBar";
import CharacterList from "./Components/CharacterList";

const App = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <CharacterList />
    </div>
  );
};

export default App;
