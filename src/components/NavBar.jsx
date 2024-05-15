import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import "../App.css"

const NavBar = () => {
    const navigate = useNavigate();

    return (
      <NavBar>
        <Container>
          <Navbar.Brand as={Link} to="/">
            My E-Commerce
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/customers">
                Customers
              </Nav.Link>
              <Nav.Link as={Link} to="/products">
                Products
              </Nav.Link>
              <Nav.Link as={Link} to="/orders">
                Orders
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </NavBar>
    );
}

export default NavBar







{/* <ul>
            <li>
              <Link to="/products">
                View our product list. You can create a new product, or click on
                an existing product to view details, edit, or delete it.
              </Link>
            </li>
            <li>
              <Link to="/create-customer">
                View our customer list. You can add a new customer, or click on
                an existing customer to view details, edit, or delete it.
              </Link>
            </li>
            <li>
              <Link to="/manage-orders">
                View our order list. You can create a new order, or click on
                an existing order to view details, edit, or delete it
              </Link>
            </li>
          </ul>
        </div> */}