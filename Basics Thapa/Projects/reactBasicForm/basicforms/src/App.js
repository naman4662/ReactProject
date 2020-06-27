import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, Alert } from "react-bootstrap";
import "./index.css";

const App = () => {
  const [fullName, setfullName] = useState({
    fname: "",
    lname: "",
    email: "",
    phoneno: "",
    msg:""
  });
  const [fullNameVal, setfullNameVal] = useState({
    fname: "",
    lname: "",
    email: "",
    phoneno: "",
    msg:""
  });

  const dataEnter = (event) => {
    
    setfullNameVal(() => {
      return {
        fname: fullName.fname,
        lname: fullName.lname,
        email: fullName.email,
        phoneno:fullName.phoneno,
        msg:"Thanks for registration a mail has been sent to"
      };
    });
    event.preventDefault();
  };

  const printName = (event) => {
    // const value = event.target.value;
    // const name = event.target.name;
    const {name,value} = event.target

    setfullName((preValue) => {
      console.log(preValue);
      return {
        ...preValue,
        [name]:value
      }
      // if (name === "firstName") {
      //   return {
      //     fname: value,
      //     lname: preValue.lname,
      //     email: preValue.email,
      //     phoneNum: preValue.phoneno,
      //     msg:"Thanks for registration a mail has been sent to"
      //   };
      // } else if (name === "lastName") {
      //   return {
      //     fname: preValue.fname,
      //     lname: value,
      //     email: preValue.email,
      //     phoneNum: preValue.phoneno,
      //     msg:"Thanks for registration a mail has been sent to"
      //   };
      // } else if (name === "email") {
      //   return {
      //     fname: preValue.fname,
      //     lname: preValue.lname,
      //     email: value,
      //     phoneNum: preValue.phoneno,
      //     msg:"Thanks for registration a mail has been sent to"
      //   };
      // } else if (name === "phoneNum") {
      //   return {
      //     fname: preValue.fname,
      //     lname: preValue.lname,
      //     email: preValue.phoneno,
      //     phoneNum: value,
      //     msg:"Thanks for registration a mail has been sent to"
      //   };
      // }
    });
  };

  return (
    <>
      <Form className="text-main" onSubmit={dataEnter}>
        <Alert variant="success">
          <Alert.Heading>
            Hey, {fullNameVal.fname} {fullNameVal.lname} {fullNameVal.msg} {fullNameVal.email}
          </Alert.Heading>
        </Alert>
        <Form.Group controlId="formBasicEmail">
          <Form.Label className="main-head">First Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Name"
            name="fname"
            onChange={printName}
            value={fullName.fname}
          />
        </Form.Group>

        <Form.Group controlId="forLastName">
          <Form.Label className="main-head">LastName </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your last name"
            name="lname"
            onChange={printName}
            value={fullName.lname}
          />
        </Form.Group>

        <Form.Group controlId="formEmailPassword">
          <Form.Label className="main-head">Email </Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            name="email"
            onChange={printName}
            value={fullName.email}
          />
        </Form.Group>

        <Form.Group controlId="forNumber">
          <Form.Label className="main-head">Phone Number </Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter your contact number"
            name="phoneno"
            onChange={printName}
            value={fullName.phoneno}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default App;
