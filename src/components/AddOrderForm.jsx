import axios from "axios";
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";

const AddOrderForm = ({ id }) => {
  const [order, setOrder] = useState({ date: "", customer_id: "" });
  const [message, setMessage] = useState("");
    // const { id } = useParams(); // Fetch the id from URL parameters
    const navigate = useNavigate();

  const handleChange = (event) => {
    event.preventDefault();
    let { name, value } = event.target;

    const newData = { ...order };

    for (let [key, val] of Object.entries(newData)) {
      if (key === name) {
        newData[key] = value;
      }
    }
    console.log(newData);
    setOrder(newData);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    let response = null;
    if (id) {
      response = await axios.put(
        `http://127.0.0.1:5000/orders/${id}`,
        order,
        { headers: { "Content-Type": "application/json" } }
      );
      console.log(response.data);
      setMessage("Successfully Updated Order!");
    } else {
      response = await axios.post(`http://127.0.0.1:5000/orders`, order, {
        headers: { "Content-Type": "application-json" },
      });
      console.log(response.data);
      setMessage("Successfully Created Order!");
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Date</Form.Label>
        <Form.Control
          type="date"
          name="date"
          value={order.date}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Customer ID</Form.Label>
        <Form.Control
          type="number"
          name="customer_id"
          value={order.customer_id}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Button type="submit">{id ? "Update Order" : "Add Order"}</Button>
      {message && <div>{message}</div>}
    </Form>
  );
};

export default AddOrderForm;
