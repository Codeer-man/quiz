import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  function Homepage() {
    navigate("/");
  }
  return (
    <nav className="flex items-center justify-between p-4 border-b border-gray-200 bg-white shadow-sm w-full h-20  px-12">
      <div className="flex items-center gap-6">
        <img
          src="/laptop.png"
          alt="logo"
          className="h-12 w-12 cursor-pointer"
          onClick={Homepage}
        />
        <h1 className="text-2xl font-bold text-gray-800">
          QUIZ <span className=" text-[#328fa8]">TIME</span>{" "}
        </h1>
      </div>
      <div className="flex items-center gap-6">
        <Link
          to="/login"
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
        >
          Login
        </Link>
      </div>
    </nav>
  );
}
