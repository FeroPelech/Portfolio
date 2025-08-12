import React from "react";

const CharacterListItem = ({ item }) => {
  return (
    <div className="card">
      <div className="card-front">
        <img src={item.img} alt="character" />
      </div>
      <div className="card-back"></div>
    </div>
  );
};

export default CharacterListItem;
