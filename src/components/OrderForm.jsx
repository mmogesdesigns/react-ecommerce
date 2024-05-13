import React, { useState, useEffect } from "react";
import apiService from "../services/apiService";

const OrderForm = ({ setOrderId }) => {
  const [products, setProducts] = useState([]);
  const [orderDetails, setOrderDetails] = useState({
    product: "",
    quantity: 1,
  });

  useEffect(() => {
    apiService
      .listProducts()
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setOrderDetails((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    apiService
      .placeOrder(orderDetails)
      .then((response) => {
        alert("Order placed successfully!");
        setOrderId(response.data.id); 
      })
      .catch((error) => console.error("Error placing order:", error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <select
        name="product"
        value={orderDetails.product}
        onChange={handleChange}
        required
      >
        {products.map((product) => (
          <option key={product.id} value={product.id}>
            {product.name}
          </option>
        ))}
      </select>
      <input
        type="number"
        name="quantity"
        value={orderDetails.quantity}
        onChange={handleChange}
        min="1"
        required
      />
      <button type="submit">Place Order</button>
    </form>
  );
};

export default OrderForm;
