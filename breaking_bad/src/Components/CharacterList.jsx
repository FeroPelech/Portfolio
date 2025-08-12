import React from "react";

const CharacterList = ({ items }) => {
  return items.map((item) => <CharacterListItem />);
};

export default CharacterList;
