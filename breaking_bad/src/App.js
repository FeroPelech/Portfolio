import { useState, useEffect } from "react";
import Header from "./Components/NavBar";
import SearchBar from "./Components/SearchBar";
import CharacterList from "./Components/CharacterList";
import axios from "axios";

const App = () => {
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(true);
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
      <CharacterList item={item} key={item.char_id} />
    </div>
  );
};

export default App;
