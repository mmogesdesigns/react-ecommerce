import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import NavBar from "./components/NavBar";
import Customers from './components/Customers';
import AddCustomerForm from "./components/AddCustomerForm";
import Orders from './components/Orders';
import AddOrderForm from "./components/AddOrderForm";
import Products from './components/Products';
import AddProductForm from "./components/AddProductForm";
import NotFound from './components/NotFound';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/customers/add" element={<AddCustomerForm />} />
        <Route path="/customers/edit/:id" element={<AddCustomerForm />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/orders/add" element={<AddOrderForm />} />
        <Route path="/orders/edit/:id" element={<AddOrderForm />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/add" element={<AddProductForm />} />
        <Route path="/products/edit/:id" element={<AddProductForm />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
  };

export default App;
