import React from "react";
import { Form,InputGroup,FormControl } from "react-bootstrap";

const CityName = (props) => {
  return (
    <Form className="mt-3">
      <InputGroup className="mb-3">
        <FormControl
          type="text"
          placeholder="Enter city name"
          onChange={props.getCity}
          value={props.cityname}
          onKeyPress={props.getData}
        />
      </InputGroup>
    </Form>
  );
};

export default CityName;
