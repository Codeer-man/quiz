import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Login from "./pages/auth/Login";

import Register from "./pages/auth/Register";

import Home from "./pages/public/Home";
import QuizPage from "./pages/public/QuizPage";
import Logout from "./pages/auth/Logout";
import Footer from "./components/Footer";
import Landing from "./pages/public/Landing";
import NotFoundPage from "./components/NotFound";

export default function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />

          {/* quiz  */}
          <Route path="/quizPage/:id" element={<QuizPage />} />
          <Route path="/quizzes" element={<Landing />} />

          {/* auth  */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/logout" element={<Logout />} />

          {/* not found  */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}
