import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth";

export default function Navbar() {
  const navigate = useNavigate();
  const { loggedIn, user } = useAuth();

  function Homepage() {
    navigate("/");
  }

  return (
    <nav className="w-full bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo and brand name */}
          <div className="flex items-center">
            <div
              className="flex-shrink-0 flex items-center cursor-pointer"
              onClick={Homepage}
            >
              <img
                src="/laptop.png"
                alt="logo"
                className="h-10 w-10 md:h-12 md:w-12"
              />
              <h1 className="ml-3 text-xl md:text-2xl font-bold text-gray-800">
                QUIZ <span className="text-[#328fa8]">TIME</span>
              </h1>
            </div>
          </div>

          {/* Navigation items */}
          <div className="flex items-center">
            {loggedIn ? (
              <div className="flex items-center space-x-4">
                <span className="hidden sm:inline text-gray-700">
                  Welcome, {user?.userdata.username}
                </span>
                <Link
                  to="/logout"
                  className="px-3 py-2 bg-gray-100 text-gray-700 rounded-md text-sm font-medium hover:bg-gray-200 transition-colors sm:px-4 sm:text-base"
                >
                  Log out
                </Link>
              </div>
            ) : (
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium transition-colors
                  ${
                    isActive
                      ? "bg-blue-700 text-white"
                      : "bg-blue-500 text-white hover:bg-blue-600"
                  }
                  sm:px-4 sm:text-base`
                }
              >
                Login
              </NavLink>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
