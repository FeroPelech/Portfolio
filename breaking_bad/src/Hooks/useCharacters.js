import { useState, useEffect } from "react";
import axios from "axios";

const useCharacters = (query) => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {});
  return <div>useCharacters</div>;
};

export default useCharacters;
