import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Login from "./pages/auth/Login";

import Register from "./pages/auth/Register";

import Home from "./pages/public/Home";
import QuizPage from "./components/quiz/QuizPage";
import Logout from "./pages/auth/Logout";

export default function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />

          {/* quiz  */}
          <Route path="/quizPage" element={<QuizPage />} />
          {/* auth  */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </Router>
    </>
  );
}
