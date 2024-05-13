import React, { useState, useEffect } from "react";
import apiService from "../services/apiService";

const OrderDetails = ({ orderId }) => {
  const [order, setOrder] = useState(null);

  useEffect(() => {
    if (orderId) {
      apiService
        .getOrderDetails(orderId)
        .then((response) => setOrder(response.data))
        .catch((error) =>
          console.error("Error fetching order details:", error)
        );
    }
  }, [orderId]);

  return (
    <div>
      {order ? (
        <>
          <h2>Order Details</h2>
          <p>Order ID: {order.id}</p>
          <p>
            Products:{" "}
            {order.products
              .map((p) => `${p.name} (Quantity: ${p.quantity})`)
              .join(", ")}
          </p>
          <p>Total Price: ${order.totalPrice}</p>
        </>
      ) : (
        <p>No order selected or found.</p>
      )}
    </div>
  );
};

export default OrderDetails;
