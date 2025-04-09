import React from "react";
import {
  FaBook,
  FaQuestionCircle,
  FaPlay,
  FaTrophy,
  FaImage,
} from "react-icons/fa";

const QuizCard = ({
  id,
  title,
  questionCount,
  difficulty = "Medium",
  category = "General Knowledge",
  imageUrl = null,
  className = "",
  onStart = () => {},
}) => {
  // Difficulty configuration
  const difficultyConfig = {
    Easy: {
      class: "bg-green-100 text-green-800 border-green-200",
      icon: <FaTrophy className="text-green-500" />,
    },
    Medium: {
      class: "bg-yellow-100 text-yellow-800 border-yellow-200",
      icon: <FaTrophy className="text-yellow-500" />,
    },
    Hard: {
      class: "bg-red-100 text-red-800 border-red-200",
      icon: <FaTrophy className="text-red-500" />,
    },
    Expert: {
      class: "bg-purple-100 text-purple-800 border-purple-200",
      icon: <FaTrophy className="text-purple-500" />,
    },
  };

  return (
    <div
      className={`w-full  max-w-[380px] rounded-xl overflow-hidden shadow-lg bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col border border-gray-100 ${className}`}
    >
      {/* Image Section */}
      <div className="h-40 bg-gradient-to-br from-blue-50 to-purple-50 relative flex items-center justify-center">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.onerror = null;
              e.target.style.display = "none";
            }}
          />
        ) : (
          <div className="text-center p-4">
            <FaImage className="w-10 h-10 mx-auto text-gray-300 mb-1" />
            <span className="text-gray-400 text-xs">Quiz Image</span>
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="p-4 flex-grow flex flex-col">
        <h3 className="font-bold text-md mb-2 text-gray-800 line-clamp-2">
          {title}
        </h3>

        <div className="flex flex-wrap gap-2 mb-2">
          <span className="flex items-center bg-blue-100 text-blue-800 text-xs font-medium px-2 py-0.5 rounded-full">
            <FaBook className="mr-1" size={9} />
            {category}
          </span>
          <span
            className={`flex items-center text-xs font-medium px-2 py-0.5 rounded-full ${
              difficultyConfig[difficulty]?.class ||
              difficultyConfig.Medium.class
            }`}
          >
            {difficultyConfig[difficulty]?.icon || difficultyConfig.Medium.icon}
            <span className="ml-1">{difficulty}</span>
          </span>
        </div>

        <div className="flex items-center text-gray-500 text-xs mt-auto mb-2">
          <FaQuestionCircle className="mr-1" size={12} />
          <span>{questionCount} questions</span>
        </div>

        <button
          onClick={() => onStart(id)}
          className="w-full flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium py-1.5 px-3 rounded-md transition-all duration-300 transform hover:scale-[1.02] text-sm"
        >
          <FaPlay className="mr-1.5" size={10} />
          Start Quiz
        </button>
      </div>
    </div>
  );
};

export default QuizCard;
