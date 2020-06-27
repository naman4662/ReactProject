import React from "react";

const List = (props) => {
    return (
    <>
      <div className="todo_style">
        <i className="fa fa-times" onClick={() => {
            props.onSelect(props.id)
        }} />
        <li>{props.data}</li>
      </div>
    </>
  );
};

export default List;
