import React from "react";
import CharacterListItem from "./CharacterListItem";

const CharacterList = ({ items }) => {
  return items.map((item) => <CharacterListItem />);
};

export default CharacterList;
