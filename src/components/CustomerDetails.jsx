import React, { useState, useEffect } from "react";
import apiService from "../services/apiService";
import ConfirmationModal from "./ConfirmationModal";

const CustomerDetails = ({ customerId }) => {
  const [customer, setCustomer] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (customerId) {
      apiService
        .getCustomer(customerId)
        .then((response) => setCustomer(response.data))
        .catch((error) =>
          console.error("Error fetching customer details:", error)
        );
    }
  }, [customerId]);

  const handleDelete = () => {
    apiService
      .deleteCustomer(customerId)
      .then(() => {
        alert("Customer deleted successfully");
        setCustomer(null);
      })
      .catch((error) => console.error("Error deleting customer:", error));
  };

  return (
    <div>
      {customer ? (
        <>
          <h2>{customer.name}</h2>
          <p>Email: {customer.email}</p>
          <p>Phone: {customer.phone}</p>
          <button onClick={() => setShowModal(true)}>Delete Customer</button>
          {showModal && (
            <ConfirmationModal
              onConfirm={handleDelete}
              onCancel={() => setShowModal(false)}
            />
          )}
        </>
      ) : (
        <p>No customer selected or found.</p>
      )}
    </div>
  );
};

export default CustomerDetails;
