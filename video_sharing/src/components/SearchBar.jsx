import { useState } from "react";
import { Paper, TextField } from "@mui/material";
import React from "react";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleChange = (event) => setSearchTerm(event.target.value);
  const onKeyPress = (event) => {
    onsubmit(searchTerm);
  };

  return (
    <Paper element={6} styling={{ padding: "25px" }}>
      <TextField
        fullWidth
        label="Search..."
        value={searchTerm}
        onChange={handleChange}
        onKeyDown={onKeyPress}
      />
    </Paper>
  );
};

export default SearchBar;
