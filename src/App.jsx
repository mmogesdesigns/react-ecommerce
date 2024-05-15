import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import NavBar from "./components/NavBar";
import Customers from './components/Customers';
import AddCustomerForm from "./components/AddCustomerForm";
// import Products from './components/Products';
// import Orders from './components/Orders';
import NotFound from './components/NotFound';

const App = () => {
  return (
  <Router>
    <NavBar/>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/customers/add" element={<AddCustomerForm />} />
        {/* <Route path="/products" element={<Products />} />
        <Route path="/orders" element={<Orders />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
  </Router>
  
  
    );
  };

export default App;
