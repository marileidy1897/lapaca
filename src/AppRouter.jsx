import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";

const AppRouter = () => {
  return (
    <Router>
      <Navbar />

        <Route exact path="/" component={ProductList} />{" "}
        <Route path="/product/:id" component={ProductDetail} />{" "}
        <Route path="/cart" component={Cart} />{" "}
        <Route path="/checkout" component={Checkout} />{" "}

    </Router>
  );
};

export default AppRouter;
