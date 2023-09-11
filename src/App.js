import "./App.css";
import React from "react";
import { Navbar } from "./Components/Navbar/Navbar";
import HomePage from "./Pages/HomePage/HomePage";
import { Routes, Route } from "react-router-dom";
import { Product } from "./Pages/Product/Product";
import Mockman from "mockman-js";
import { Cart } from "./Pages/Cart/Cart";
import { WishList } from "./Pages/WishList/WishList";
import { SignUp } from "./Pages/SignUp/SignUp";
import { Login } from "./Pages/LogIn/Login";
import { ForgotPassword } from "./Pages/ForgotPassword/ForgotPassword";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="product" element={<Product />} />
        <Route path="cart" element={<Cart />} />
        <Route path="wishlist" element={<WishList />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="login" element={<Login />} />
        <Route path="forgotpassword" element={<ForgotPassword />} />
        <Route path="mockman" element={<Mockman />} />
      </Routes>
    </div>
  );
}

export default App;
