import React from "react";
import Header from "./Components/NavBar";
import SearchBar from "./Components/SearchBar";
import CharacterList from "./Components/CharacterList";

const App = () => {
  return (
    <div className="App">
      <Header />
      <SearchBar />
    </div>
  );
};

export default App;
