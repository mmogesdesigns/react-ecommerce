import React, { useState, useEffect } from "react";
import apiService from "../services/apiServices";

const CustomerForm = ({ customerId, setCustomerId }) => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });

  useEffect(() => {
    if (customerId) {
      apiService
        .getCustomer(customerId)
        .then((response) => setFormData(response.data))
        .catch((error) =>
          console.error("Error fetching customer details:", error)
        );
    }
  }, [customerId]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const action = customerId
      ? apiService.updateCustomer(customerId, formData)
      : apiService.createCustomer(formData);
    action
      .then(() => {
        alert("Customer saved successfully!");
        setCustomerId(null);
        setFormData({ name: "", email: "", phone: "" });
      })
      .catch((error) => console.error("Error saving customer:", error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
        required
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        required
      />
      <input
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Phone"
        required
      />
      <button type="submit">{customerId ? "Update" : "Create"} Customer</button>
    </form>
  );
};

export default CustomerForm;
