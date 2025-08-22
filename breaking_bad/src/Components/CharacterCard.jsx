import React from "react";

const CharacterCard = ({ character }) => {
  return (
    <div className="card">
      <img src={character.img} alt={character.name} />
    </div>
  );
};

export default CharacterCard;
