import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quiz Time</h3>
            <p className="text-gray-300">
              Test your knowledge and challenge yourself with our interactive
              quizzes.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/quizzes" className="text-gray-300 hover:text-white">
                  Quizzes
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-xl font-bold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Technology
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Science
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  History
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  General Knowledge
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4">Subscribe</h3>
            <p className="text-gray-300 mb-4">
              Stay updated with our latest quizzes and features.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 w-full rounded-l-md focus:outline-none text-gray-800"
              />
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-r-md transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Quiz Time. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
