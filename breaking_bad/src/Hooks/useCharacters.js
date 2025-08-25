import { useEffect, useState } from "react";

export default function useCharacters(query) {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCharacters() {
      setLoading(true);
      try {
        const res = await fetch("https://rickandmortyapi.com/api/character");
        const data = await res.json();

        // Ochrana – ak API nevráti pole, dáme prázdne
        if (data.results && Array.isArray(data.results)) {
          setCharacters(data.results);
        } else {
          console.error("Unexpected API response:", data);
          setCharacters([]);
        }
      } catch (error) {
        console.error("Fetch error:", error);
        setCharacters([]);
      } finally {
        setLoading(false);
      }
    }

    fetchCharacters();
  }, []);

  // filter podľa query
  const filtered = characters.filter((c) =>
    c.name.toLowerCase().includes(query.toLowerCase())
  );

  return { characters: filtered, loading };
}
