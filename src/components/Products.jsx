import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, ListGroup, Modal } from "react-bootstrap";
import ConfirmationModal from "./ConfirmationModal";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [productIdToDelete, setProductIdToDelete] = useState(null);

  // old school way change later
  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/products")
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log("Error fetching products:", err);
        setError("Failed to load products");
        setLoading(false);
      });
  }, []);

  const handleDeleteClick = (productId) => {
    setProductIdToDelete(productId);
    setShowModal(true);
  };

  const handleDelete = () => {
    axios.delete(`http://127.0.0.1:5000/products/${productIdToDelete}`).then(() => {
      setProducts(products.filter((product) => product.id !== productIdToDelete));
      setShowModal(false);
    })
        .catch((err) =>{
            console.error("error deleting product: ", err);
            setError("Failed to delete product!")
        });
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>Products</h1>
      <Link to="/products/add">
        <Button variant="primary">Add New Product</Button>
      </Link>
      <ListGroup>
        {products.map((product) => (
          <ListGroup.Item key={product.id}>
            {product.name} - ${product.price}
            <Link
              to={`/products/edit/${product.id}`}
              className="btn btn-info"
              style={{ marginLeft: "10px" }}
            >
              Edit
            </Link>
            <Button
              variant="danger"
              onClick={() => handleDeleteClick(product.id)}
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
        onConfirm={handleDelete}
        title="Confirm Delete"
        message="Are you sure you want to delete this product?"
      />
    </div>
  );
};

export default Products;
