import React from "react";
import "./note.css";
import { Button } from "@material-ui/core";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

const Note = (props) => {
    const deleteNote = ()=> {
        props.delete(props.id)
    }
  return (
    <div className="sub-note">
      <h1>{props.title}</h1>
      <br />
      <p> {props.content}</p>
      <Button onClick={deleteNote}>
        <DeleteForeverIcon />
      </Button>
    </div>
  );
};

export default Note;
