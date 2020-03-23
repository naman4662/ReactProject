import React from 'react';
import {Form,FormControl,Button} from 'react-bootstrap';

export const SearchList = ({placeholder,handleChange}) => (
    <Form inline>
      <FormControl type="text" placeholder={placeholder} className="mr-sm-2 mb-2 w-100" onChange={handleChange} />
      <Button variant="outline-success" className="mr-sm-2 mb-2 w-100">Search</Button>
    </Form>
    // <input type='search' placeholder={placeholder} onChange={handleChange} />    
)