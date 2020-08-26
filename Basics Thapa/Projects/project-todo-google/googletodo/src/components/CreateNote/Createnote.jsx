import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import { Button } from "@material-ui/core";
import "./createnote.css";
const Createnote = (props) => {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const dataFunc = (event) => {
    console.log(event.target.value);
    const { name, value } = event.target;

    setNote((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  const addEvent = (event) => {
    props.passNote(note)
    event.preventDefault()

  }

  return (
    <div className="main-note">
      <form className="main-form">
        <input
          type="text"
          placeholder="Title"
          className="main-input"
          onChange={dataFunc}
          value={note.title}
          name="title"
        />
        <textarea
          rows="12"
          column="10"
          placeholder="Write a note"
          onChange={dataFunc}
          value={note.content}
          name="content"
        ></textarea>
        <Button onClick={addEvent}>
          <AddIcon />
        </Button>
      </form>
    </div>
  );
};

export default Createnote;
