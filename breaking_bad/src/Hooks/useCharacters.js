import { useState, useEffect } from "react";
import axios from "axios";

const useCharacters = (query) => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query) {
      setCharacters([]);
      return;
    }
  });
  return <div>useCharacters</div>;
};

export default useCharacters;
