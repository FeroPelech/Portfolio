import { useState } from "react";
import { Paper, TextField } from "@mui/material";
import React from "react";

const SearchBar = () => {
  return (
    <Paper element={6} styling={{ padding: "25px" }}>
      <TextField fullWidth label="Search..." />
    </Paper>
  );
};

export default SearchBar;
