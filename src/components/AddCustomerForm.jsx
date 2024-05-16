import axios from 'axios';
import React, { useState } from 'react'
import { Form, Button } from "react-bootstrap";
import { json } from 'react-router-dom';

const AddCustomerForm = ({id}) => {
    const [customer, setCustomer] = useState({name:'', email: '', phone: ''});
    const [message, setMessage] = useState("");

    const handleChange = (event) => {
      event.preventDefault(); 
    let { name, value } = event.target; 

    
    const newData = { ...customer };

      
    for (let [key, val] of Object.entries(newData)) {
        if (key === name) {
          newData[key] = value; 
        }
      }
      console.log(newData); 
      setCustomer(newData); 
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        let response = null;
        if (id) {
            response = await axios.put(`http://127.0.0.1:5000/customers/${id}`,
                 customer,
                 {header: {'Content-Type': 'application/json'}} 
            );
            console.log(response.data);
            setMessage("Successfully Updated Customer!");
        } else{
            response = await axios.post(`http://127.0.0.1:5000/customers`,
               customer, {header: {'Content-Type': 'application-json'}} 
            );
            console.log(response.data);
            setMessage('Successfully Created Customer!')
        }
    }



  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Phone</Form.Label>
        <Form.Control
          type="tel"
          name="phone"
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Button type="submit">Add Customer</Button>
      {message && <div>{message}</div>}
    </Form>
  );
}

export default AddCustomerForm
