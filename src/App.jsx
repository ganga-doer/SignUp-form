import { useState } from "react";
import "./App.css";
import SignupForm from "./Layout/SignupForm";
import CardCheckout from "./Layout/CardCheckout";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignupForm />} />
        <Route path="/checkout" element={<CardCheckout />} />
      </Routes>
    </>
  );
}

export default App;
