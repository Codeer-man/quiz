import React, { useEffect } from "react";
import { useAuth } from "../../context/auth";
import { useNavigate } from "react-router-dom";

export default function Logout() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    logout();
    navigate("/login");
  }, [logout]);

  return <div>Logout</div>;
}
