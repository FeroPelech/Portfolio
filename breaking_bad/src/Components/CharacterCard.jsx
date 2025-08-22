import React from "react";

const CharacterCard = ({ character }) => {
  return (
    <div className="card">
      <img src={character.img} alt={character.name} />
      <h3>{character.name}</h3>
      <p>
        <strong>Nickname: </strong>
        {character.nickname}
      </p>
    </div>
  );
};

export default CharacterCard;
