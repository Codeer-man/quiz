import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "./context/auth.jsx";
import { QuizProvider } from "./context/quiz.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <QuizProvider>
        <App />
        <ToastContainer />
      </QuizProvider>
    </AuthProvider>
  </StrictMode>
);
