import React from "react";
import Quotes from "./Dashboard/Quotes/Quotes";
import Buttons from "./Dashboard/Components/Buttons";
import Footer from "./Dashboard/Components/Footer";
import QuotesAuthor from "./Dashboard/Components/QuoteAuthor";
import QuotesText from "./Dashboard/Components/QuotesText";

const App = () => {
  return (
    <div className="App">
      <Quotes />
      <Buttons />
      <Footer />
      <QuotesAuthor />
      <QuotesText />
    </div>
  );
};

export default App;
