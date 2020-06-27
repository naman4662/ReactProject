import React, { useState } from "react";
import "./index.css";
import List from "./List";

const App = () => {
  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);
  const additem = (event) => {
    console.log(event.target.value);
    setInputList(event.target.value);
  };

  const addItemToList = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  };

  const crossClicked = (id) => {
        setItems((oldItems) => {
          return oldItems.filter((itemVal,index) => {
            return index!==id
          })
        })
        // debugger
        // console.log(event.target)
        // event.target.nextElementSibling.remove()
        // event.target.remove()

    }
  return (
    <>
      <div className="main-back">
        <div className="main-center">
          <h1>To Do List</h1>
          <input
            type="text"
            name="item"
            id="item"
            onChange={additem}
            value={inputList}
          />
          <button onClick={addItemToList}> + </button>

          <ol>
            {items.map((item, index) => {
              return (
                <List
                  key={index}
                  id={index}
                  data={item}
                  onSelect={crossClicked}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default App;
