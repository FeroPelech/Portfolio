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
    const fetchCharacters = async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          `https://www.breakingbadapi.com/api/characters?name=${query}`
        );
      } catch (error) {
        console.error("Error fetching characters: ", error);
      }
    };
  });
  return <div>useCharacters</div>;
};

export default useCharacters;
