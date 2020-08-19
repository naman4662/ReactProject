import React, { useState } from "react";
import { FormControl, InputLabel, Input,Button } from "@material-ui/core";

const CreateTransaction = () => {
    const [text,setText]=useState("")
    const [amount,setAmount]=useState(0)
  return (
    <div>
      <h3>Add new transaction</h3>
      <hr />
      <form className="myform">
        <FormControl>
          <InputLabel htmlFor="my-input">Add text ..</InputLabel>
          <Input
            className="inputlabel"
            id="my-input"
            aria-describedby="my-helper-text"
            value={text}
            onChange={(event) => setText(event.target.value)}
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="my-amount">
            Add amount positive(+) or negative(-)
          </InputLabel>
          <Input
            className="inputlabel"
            id="my-amount"
            aria-describedby="my-helper-text"
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
          />
        </FormControl>
        <Button variant="contained"  fullWidth color="primary">
          Add transaction
        </Button>
      </form>
    </div>
  );
};

export default CreateTransaction;
