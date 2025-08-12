import React from "react";

const CharacterListItem = ({ item }) => {
  return (
    <div className="card">
      <div className="card-front">
        <img src={item.img} alt="character" />
      </div>
      <div className="card-back">
        <h1>{item.name}</h1>
        <ul>
          <li></li>
        </ul>
      </div>
    </div>
  );
};

export default CharacterListItem;
