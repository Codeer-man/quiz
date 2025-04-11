import React from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaClock, FaQuestionCircle } from "react-icons/fa";

export default function QuizzesPage() {
  // Sample quiz data
  const quizzes = [
    {
      id: 1,
      title: "JavaScript Fundamentals",
      category: "Programming",
      questions: 15,
      time: 20,
      difficulty: "Medium",
      image:
        "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 2,
      title: "World Capitals",
      category: "Geography",
      questions: 20,
      time: 15,
      difficulty: "Easy",
      image:
        "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 3,
      title: "Ancient Civilizations",
      category: "History",
      questions: 25,
      time: 30,
      difficulty: "Hard",
      image:
        "https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 4,
      title: "Human Anatomy",
      category: "Science",
      questions: 18,
      time: 25,
      difficulty: "Medium",
      image:
        "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Available Quizzes
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Test your knowledge with our collection of interactive quizzes
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaSearch className="text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-4 border border-gray-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search quizzes..."
            />
          </div>
        </div>

        {/* Quizzes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {quizzes.map((quiz) => (
            <div
              key={quiz.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={quiz.image}
                  alt={quiz.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full uppercase font-semibold tracking-wide">
                    {quiz.category}
                  </span>
                  <span
                    className={`inline-block text-xs px-2 py-1 rounded-full uppercase font-semibold tracking-wide ${
                      quiz.difficulty === "Easy"
                        ? "bg-green-100 text-green-800"
                        : quiz.difficulty === "Medium"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {quiz.difficulty}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {quiz.title}
                </h3>
                <div className="flex justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <FaQuestionCircle className="mr-1" />
                    <span>{quiz.questions} questions</span>
                  </div>
                  <div className="flex items-center">
                    <FaClock className="mr-1" />
                    <span>{quiz.time} mins</span>
                  </div>
                </div>
                <Link
                  to={`/quiz/${quiz.id}`}
                  className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-2 px-4 rounded-lg transition-colors"
                >
                  Start Quiz
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
