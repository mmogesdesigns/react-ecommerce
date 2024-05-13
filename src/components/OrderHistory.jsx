import React, { useState, useEffect } from "react";
import apiService from "../services/apiService";
import { Link } from "react-router-dom";

const OrderHistory = ({ customerId }) => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    apiService
      .getCustomerOrders(customerId)
      .then((response) => setOrders(response.data))
      .catch((error) => console.error("Error fetching orders:", error));
  }, [customerId]);

  return (
    <div>
      <h2>Order History</h2>
      {orders.length > 0 ? (
        <ul>
          {orders.map((order) => (
            <li key={order.id}>
              <Link to={`/order/${order.id}`}>
                Order ID: {order.id} - Click to view details
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>No orders found.</p>
      )}
    </div>
  );
};

export default OrderHistory;
