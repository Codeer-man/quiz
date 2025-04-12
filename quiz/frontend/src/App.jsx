import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// authentication
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Logout from "./pages/auth/Logout";

import Home from "./pages/public/Home";
import QuizPage from "./pages/public/QuizPage";
import Landing from "./pages/public/Landing";
import NotFoundPage from "./components/NotFound";

// Admin components
import AdminLayout from "./layout/AdminLayout";
import AdminDashboard from "./pages/admin/Dashboard";
import Quiz from "./pages/admin/Quiz";
import EditQuestion from "./pages/admin/EditQuestion";
import AddQuestion from "./pages/admin/AddQuestion";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Public routes with navbar and footer */}
        <Route
          element={
            <>
              <Navbar />
              <Outlet />
              <Footer />
            </>
          }
        >
          <Route path="/" element={<Home />} />
          {/* quiz */}
          <Route path="/quizPage/:id" element={<QuizPage />} />
          <Route path="/quizzes" element={<Landing />} />
          {/* auth */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/logout" element={<Logout />} />
        </Route>

        {/* Admin route  */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="" element={<EditQuestion />} />
          <Route path="/admin/create" element={<AddQuestion />} />
          <Route path="" element={<Quiz />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>

        {/* not found */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}
