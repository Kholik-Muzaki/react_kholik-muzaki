// App.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LandingPage from '../src/Pages/LandingPage/LandingPage';
import CreateProduct from '../src/Pages/CreateProduct/CreateProduct';
import PrivateRoute from '../src/Layout/PrivateRoute';
import LoginPage from '../src/pages/LoginPage/LoginPage';
import CreateAccount from "../src/pages/CreateAccount/CreateAccount";
import ListProduct from "../src/Pages/ListProducts/ListProducts";
import ProductDetails from "../src/Pages/ProductDetail/ProductDetail";
import EditProduct from "../src/Pages/EditProduct/EditProduct";


function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/create-account" element={<CreateAccount />} />
      <Route path="/" element={<PrivateRoute />}>
        <Route path="/create-product" index element={<CreateProduct />} />
        <Route path="/products" index element={<ListProduct />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/update-product/:id" element={<EditProduct />} />
      </Route>
    </Routes>
  );
}
export default App;
