import React from "react";
import Quotes from "./Dashboard/Quotes/Quotes";
import Buttons from "./Dashboard/Components/Buttons";
import Footer from "./Dashboard/Components/Footer";
import QuoteAuthor from "./Dashboard/Components/QuoteAuthor";

const App = () => {
  return (
    <div className="App">
      <Quotes />
      <Buttons />
      <Footer />
      <QuoteAuthor />
    </div>
  );
};

export default App;
