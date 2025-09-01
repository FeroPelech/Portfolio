import React from "react";
import Quotes from "./Dashboard/Quotes/Quotes";
import Buttons from "./Dashboard/Components/Buttons";
import Footer from "./Dashboard/Components/Footer";

const App = () => {
  return (
    <div className="App">
      <Quotes />
      <Buttons />
      <Footer />
    </div>
  );
};

export default App;
