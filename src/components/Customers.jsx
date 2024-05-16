import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { Button, ListGroup, Modal } from "react-bootstrap";
import ConfirmationModal from "./ConfirmationModal";




const Customers = () => {
    const [customers, setCustomers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [showModal,setShowModal ] = useState(false);
    const [customerIdToDelete, setCustomerIdToDelete] = useState(null);
   
// old school way change later
    useEffect(() => {
        axios.get("http://127.0.0.1:5000/customers")
            .then(response => {
                setCustomers(response.data);
                setLoading(false);
            })
            .catch(err =>{
                console.log('Error fetching customers:', err);
                setError('Failed to load customers');
                setLoading(false);
            });
    }, []);

    const handleDeleteClick = (customerId) => {
        setCustomerIdToDelete(customerId);
        setShowModal(true);
    };

    const handleDelete = () => {
        axios.delete(`http://127.0.0.1:5000/customer/${customerIdToDelete}`)
        .then(()=>{
            setCustomers(customers.filter(customer => customer.id !== customerIdToDelete));
            setShowModal(false);
        });
    };



    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;
    
  return (
    <div>
      <h1>Customers</h1>
      <Link to="/customers/add">
        <Button variant="primary">Add New Customer</Button>
      </Link>
      <ListGroup>
        {customers.map((customer) => (
          <ListGroup.Item key={customer.id}>
            {customer.name} - {customer.email}
            <Link
              to={`/customers/edit/${customer.id}`}
              className="btn btn-info"
              style={{ marginLeft: "10px" }}
            >
              {" "}
              Edit{" "}
            </Link>{" "}
          </ListGroup.Item>
        ))}
      </ListGroup>

      <ConfirmationModal
        show={showModal}
        onHide={() => setShowModal(false)}
        onConfirm={handleDelete}
        title="Confirm Delete"
        message="are you sure you want to delete this customer?"
      />
    </div>
  );
}

export default Customers
