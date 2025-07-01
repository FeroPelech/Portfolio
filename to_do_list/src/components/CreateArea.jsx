import { SendTwoTone } from "@mui/icons-material";
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
        <input type="text" name="title" placeholder="Title" />
        <textarea
          name="content"
          rows="3"
          placeholder="Take a note..."
        ></textarea>
      </form>
    </div>
  );
};

export default CreateArea;
