import { useState, useEffect } from "react";
import axios from "axios";

const useCharacters = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  return <div>useCharacters</div>;
};

export default useCharacters;
