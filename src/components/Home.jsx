import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="home">
            <h1>Welcome to Our E-Commerce Platform!</h1>
            <p>Explore our wide range of products and manage your customer account details.</p>
            
            <div className="links">
                <h2>Get Started:</h2>
                <ul>
                    <li><Link to="/products">View Products</Link></li>
                    <li><Link to="/create-customer">Create Customer Account</Link></li>
                    <li><Link to="/manage-orders">Manage Orders</Link></li>
                   
                </ul>
            </div>

            
        </div>
    );
};

export default Home;
