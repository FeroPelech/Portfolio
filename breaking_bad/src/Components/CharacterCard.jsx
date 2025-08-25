import React from "react";

const CharacterCard = ({ character }) => {
  return (
    <div className="card">
      <img src={character.img} alt={character.name} width="150" />
      <h3>{character.name}</h3>
      <p>
        <strong>Nickname: </strong>
        {character.nickname}
      </p>
      <p>
        <strong>Actor: </strong>
        {character.portrayed}
      </p>
      <p>
        <strong>Status: </strong>
        {character.status}
      </p>
    </div>
  );
};

export default CharacterCard;
