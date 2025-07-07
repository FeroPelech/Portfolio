import Fab from "@mui/material/Fab";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";

const CreateArea = (props) => {
  const [isExpanded, setExpanded] = useState(false);

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

  function submitNote(e) {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    e.preventDefault();
  }

  function expand() {}

  return (
    <div>
      <form className="create-note">
        {isExpanded && (
          <input
            type="text"
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        )}
        <textarea
          name="content"
          rows={isExpanded ? 3 : 1}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
        ></textarea>
        <Fab onClick={submitNote}>
          <AddIcon />
        </Fab>
      </form>
    </div>
  );
};

export default CreateArea;
