import Fab from "@mui/material/Fab";
import React, { useState } from "react";

const CreateArea = () => {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  return (
    <div>
      <form className="create-note">
        <input
          type="text"
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
        <textarea
          name="content"
          rows="3"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
        ></textarea>
        <Fab onClick={submitNote}></Fab>
      </form>
    </div>
  );
};

export default CreateArea;
