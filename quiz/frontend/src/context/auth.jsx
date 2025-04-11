// custom hook for auth

import { createContext, useContext, useEffect, useState } from "react";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const api_url = import.meta.env.VITE_GET_USER;

  //  get authorized token wit Bearer
  const [token, setToken] = useState(localStorage.getItem("token"));
  const authorizeToken = `Bearer ${token}`;
  const [user, setUser] = useState(null);
  const [admin, setAdmin] = useState("");

  // function to store token
  const storeTokenInLs = (serverToken) => {
    localStorage.setItem("token", serverToken);
    setToken(serverToken);
  };

  // check if token exists
  let loggedIn = !!token;

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    setToken("");
  };

  // get user data with token
  const userData = async () => {
    try {
      const response = await fetch(api_url, {
        method: "GET",
        headers: {
          Authorization: authorizeToken,
        },
      });
      if (response.ok) {
        const data = await response.json();
        setAdmin(data.userdata.role);
        setUser(data);
      } else {
        setUser(null);
        localStorage.removeItem("token");
        setToken("");
      }
    } catch (error) {}
  };

  useEffect(() => {
    if (token) {
      userData();
    }
  }, [token]);
  return (
    <AuthContext.Provider
      value={{ storeTokenInLs, token, user, loggedIn, logout, admin }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const authContextValue = useContext(AuthContext);

  if (!authContextValue) {
    throw new Error("useAuth must be used within AuthProvider");
  }

  return authContextValue;
};
