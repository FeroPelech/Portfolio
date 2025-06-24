import { useState } from "react";
import { Paper, TextField } from "@mui/material";
import React from "react";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleChange = (event) => setSearchTerm(event.target.value);

  return (
    <Paper element={6} styling={{ padding: "25px" }}>
      <TextField
        fullWidth
        label="Search..."
        value={searchTerm}
        onChange={handleChange}
      />
    </Paper>
  );
};

export default SearchBar;
