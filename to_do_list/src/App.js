import React, { useState } from "react";
import Header from "./components/Header";
import CreateArea from "./components/CreateArea";

const App = () => {
  const [notes, setNotes] = useState([]);

  return (
    <div className="App">
      <Header />
      <CreateArea onAdd={addNote} />
    </div>
  );
};

export default App;
