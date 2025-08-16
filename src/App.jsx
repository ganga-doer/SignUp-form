import { useState } from "react";
import "./App.css";
import SignupForm from "./Layout/SignupForm";
import CardCheckout from "./Layout/CardCheckout";
import { Route, Routes } from "react-router-dom";
import Login from "./Layout/Login";
import LandingPage from "./components/Landingpage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<SignupForm />} />
        <Route path="/checkout" element={<CardCheckout />} />
        <Route path="/home" element={<LandingPage />} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </>
  );
}

export default App;
