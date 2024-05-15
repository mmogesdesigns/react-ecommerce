import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row } from "react-bootstrap";
import NavBar from "./NavBar";
import "../App.css";


function Home() {
  return (
    <Container>
      <NavBar />
      <Row className="home-page justify-content-center">
        <div>
          <h1>Welcome to My E-Commerce Platform!</h1>
          <p>
            Explore our wide range of products and manage your customer account
            details.
          </p>
        </div>
      </Row>
    </Container>
  );
}


export default Home;
