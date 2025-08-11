import { useState, useEffect } from "react";
import Header from "./Components/NavBar";
import SearchBar from "./Components/SearchBar";
import CharacterList from "./Components/CharacterList";
import axios from "axios";

const App = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchItems = async () => {
      const results = axios.get(`/characters?name=${query}`);
      setItems(results.data);
      setLoading(false);
    };
    fetchItems();
  }, [query]);

  return (
    <div className="App">
      <Header />
      <SearchBar setQuery={(query) => setQuery(query)} />
      <CharacterList />
    </div>
  );
};

export default App;
