import React from "react";
import CharacterCard from "./CharacterCard";

const CharacterList = ({ characters }) => {
  if (characters.length === 0) {
    return <p>No characters found.</p>;
  }

  return (
    <div className="character-list">
      {characters.map((char) => (
        <CharacterCard key={char.char_id} character={char} />
      ))}
    </div>
  );
};

export default CharacterList;
