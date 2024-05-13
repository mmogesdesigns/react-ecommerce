import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./components/Home";
import CustomerForm from "./components/CustomerForm";
import CustomerDetails from "./components/CustomerDetails";
import OrderForm from "./components/OrderForm";
import OrderDetails from "./components/OrderDetails";
import OrderHistory from "./components/OrderHistory";
import ProductList from "./components/ProductList";
import ProductForm from "./components/ProductForm"; // Corrected the stray slash here
import ProductDetails from "./components/ProductDetails";

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/create-customer">Create Customer</Link>
            </li>
            <li>
              <Link to="/order-new">Place New Order</Link>
            </li>
            <li>
              <Link to="/order-history">Order History</Link>
            </li>
            <li>
              <Link to="/products">Product List</Link>
            </li>
            <li>
              <Link to="/product/new">Add Product</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/create-customer" component={CustomerForm} />
          <Route path="/order-new" component={OrderForm} />
          <Route path="/order/:id" component={OrderDetails} />
          <Route path="/order-history" component={OrderHistory} />
          <Route path="/products" component={ProductList} />
          <Route
            path="/product/new"
            component={() => <ProductForm mode="create" />}
          />
          <Route
            path="/product/edit/:id"
            component={() => <ProductForm mode="update" />}
          />
          <Route path="/product/:id" component={ProductDetails} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
