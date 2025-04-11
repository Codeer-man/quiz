import React from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaChartBar,
  FaPlusCircle,
  FaTrophy,
  FaUserShield,
} from "react-icons/fa";
import { useAuth } from "../../context/auth";

export default function HomePage() {
  const { admin } = useAuth();

  console.log(admin);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Test Your Knowledge with{" "}
            <span className="text-yellow-300">Quiz Time</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Challenge yourself with our interactive quizzes and track your
            progress.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/quizzes"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold flex items-center justify-center gap-2 transition-colors"
            >
              Take a Quiz <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Why Choose Quiz Time?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl text-center">
              <div className="bg-blue-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <FaChartBar className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Track Progress</h3>
              <p className="text-gray-600">
                Monitor your improvement with detailed statistics and
                performance analytics.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl text-center">
              <div className="bg-indigo-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <FaTrophy className="text-indigo-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Compete</h3>
              <p className="text-gray-600">
                Challenge friends and climb leaderboards to show off your
                knowledge.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl text-center">
              <div className="bg-purple-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <FaPlusCircle className="text-purple-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Create</h3>
              <p className="text-gray-600">
                Build your own quizzes and share them with the community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quiz Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Popular Quiz Categories
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Technology",
                image:
                  "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
                count: "25 Quizzes",
              },
              {
                title: "Science",
                image:
                  "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
                count: "18 Quizzes",
              },
              {
                title: "History",
                image:
                  "https://images.unsplash.com/photo-1505664194779-8beaceb93744?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
                count: "15 Quizzes",
              },
              {
                title: "General Knowledge",
                image:
                  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
                count: "32 Quizzes",
              },
            ].map((category, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-xl group cursor-pointer"
              >
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-xl font-bold text-white">
                    {category.title}
                  </h3>
                  <p className="text-gray-200">{category.count}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/categories"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              View All Categories
            </Link>
          </div>
        </div>
      </section>
      {admin && (
        <Link
          to="/admin"
          className=" fixed right-6 bottom-6 flex items-center px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
        >
          <FaUserShield className="mr-2" />
          <span>Admin Panel</span>
        </Link>
      )}
    </div>
  );
}
