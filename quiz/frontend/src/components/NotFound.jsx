import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaHome, FaSearch } from "react-icons/fa";

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex flex-col items-center justify-center p-6">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg overflow-hidden p-8 text-center">
        {/* Illustration */}
        <div className="mb-8">
          <div className="relative w-40 h-40 mx-auto">
            <div className="absolute inset-0 bg-purple-100 rounded-full opacity-30"></div>
            <div className="absolute inset-4 bg-purple-200 rounded-full opacity-40"></div>
            <div className="absolute inset-8 bg-purple-300 rounded-full flex items-center justify-center">
              <span className="text-4xl font-bold text-purple-700">404</span>
            </div>
          </div>
        </div>

        {/* Message */}
        <h1 className="text-3xl font-bold text-gray-800 mb-3">
          Page Not Found
        </h1>
        <p className="text-gray-600 mb-8">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors shadow-md hover:shadow-lg"
          >
            <FaArrowLeft className="mr-2" />
            Go Back
          </button>

          <button
            onClick={() => navigate("/")}
            className="flex items-center justify-center px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-lg font-medium transition-colors shadow-md hover:shadow-lg"
          >
            <FaHome className="mr-2" />
            Go Home
          </button>
        </div>
      </div>
    </div>
  );
}
