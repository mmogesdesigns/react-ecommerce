import axios from "axios";
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";

const AddProductForm = ({ id }) => {
  const [product, setProduct] = useState({ name: "", price: "" });
  const [message, setMessage] = useState("");
//   const { id } = useParams(); 
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
    setProduct(newData);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    let response = null;
    if (id) {
      response = await axios.put(`http://127.0.0.1:5000/products/${id}`, product, {
        headers: { "Content-Type": "application/json" },
      });
      console.log(response.data);
      setMessage("Successfully Updated Product!");
    } else {
      response = await axios.post(`http://127.0.0.1:5000/products`, product, {
        headers: { "Content-Type": "application/json" },
      });
      console.log(response.data);
      setMessage("Successfully Created Product!");
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={product.name}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Price</Form.Label>
        <Form.Control
          type="number"
          name="price"
          value={product.price}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Button type="submit">{id ? "Update Product" : "Add Product"}</Button>
      {message && <div>{message}</div>}
    </Form>
  );
};

export default AddProductForm;
