import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import LoginForm from "./components/auth/LoginForm";
import RegistrationForm from "./components/auth/RegisterForm";
import AuthModal from "./components/auth/AuthModel";
import Home from "./pages/public/Home";

export default function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* auth  */}
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/auth" element={<AuthModal />} />
        </Routes>
      </Router>
    </>
  );
}
