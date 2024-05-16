import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, ListGroup, Modal } from "react-bootstrap";
import ConfirmationModal from "./ConfirmationModal";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [orderIdToDelete, setOrderIdToDelete] = useState(null);

  // old school way change later
  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/orders")
      .then((response) => {
        setOrders(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log("Error fetching orders:", err);
        setError("Failed to load orders");
        setLoading(false);
      });
  }, []);

  const handleDeleteClick = (customerId) => {
    setOrderIdToDelete(customerId);
    setShowModal(true);
  };

  const handleDelete = () => {
    axios
      .delete(`http://127.0.0.1:5000/orders/${orderIdToDelete}`)
      .then(() => {
        setOrders(
          orders.filter((order) => order.id !== orderIdToDelete)
        );
        setShowModal(false);
      });
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>Orders</h1>
      <Link to="/orders/add">
        <Button variant="primary">Add New Order</Button>
      </Link>
      <ListGroup>
        {orders.map((order) => (
          <ListGroup.Item key={order.id}>
            {order.date} - Customer ID: {order.customer_id}
            <Link
              to={`/orders/edit/${order.id}`}
              className="btn btn-info"
              style={{ marginLeft: "10px" }}
            >
              Edit
            </Link>
            <Button
              variant="danger"
              onClick={() => handleDeleteClick(order.id)}
              style={{ marginLeft: "10px" }}
            >
              Delete
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>

       <ConfirmationModal
        show={showModal}
        onHide={() => setShowModal(false)}
        onConfirm= {handleDelete}
        title = "Confirm Delete"
        message = "are you sure you want to delete this order?"
      /> 
    </div>
  );
};

export default Orders;
