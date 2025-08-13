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
          <li>
            <strong>Actor Name: </strong>
            {item.portrayed}
          </li>
          <li>
            <strong>Nickk Name: </strong>
            {item.nickname}
          </li>
          <li>
            <strong>Birthday: </strong>
            {item.birthday}
          </li>
          <li>
            <strong>Status: </strong>
            <span
              style={{ color: item.status === "Alive" ? "green" : "red" }}
            ></span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CharacterListItem;
