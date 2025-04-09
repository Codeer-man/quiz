import React, { useState, useEffect } from "react";
import { FaClock, FaCheck } from "react-icons/fa";

const QuizPage = () => {
  // Sample questions data for trial
  const questions = [
    {
      id: 1,
      question: "What is the capital of France?",
      options: ["London", "Berlin", "Paris", "Madrid"],
      correctAnswer: 2,
    },
    {
      id: 2,
      question: "Which language runs in a web browser?",
      options: ["Java", "C", "Python", "JavaScript"],
      correctAnswer: 3,
    },
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(null);
  const [timeLeft, setTimeLeft] = useState(30);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  // timer counter
  useEffect(() => {
    if (timeLeft === 0 || quizCompleted) return;

    const timer = setTimeout(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, quizCompleted]);

  // auto-advance when time runs out
  useEffect(() => {
    if (timeLeft === 0 && !quizCompleted) {
      handleNextQuestion();
    }
  }, [timeLeft]);

  const handleOptionSelect = (index) => {
    setSelectedOptionIndex(index);
  };

  // check if answer is correct
  const handleNextQuestion = () => {
    if (selectedOptionIndex === questions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }

    // move to next question or end quiz
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOptionIndex(null);
      setTimeLeft(30);
    } else {
      setQuizCompleted(true);
    }
  };

  // after the quiz is completed
  if (quizCompleted) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <h1 className="text-4xl font-bold mb-6">Quiz Completed!</h1>
        <p className="text-2xl mb-8">
          Your Score: {score}/{questions.length}
        </p>
        <button
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          onClick={() => window.location.reload()}
        >
          Restart Quiz
        </button>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="h-screen flex flex-col p-6 bg-gray-100">
      {/* Header with question number and timer */}
      <div className="flex justify-between mb-8">
        <div className="text-xl font-semibold">
          Question {currentQuestionIndex + 1}/{questions.length}
        </div>
        <div className="flex items-center text-red-600">
          <FaClock className="mr-2" />
          <span className="text-xl font-medium">{timeLeft}s</span>
        </div>
      </div>

      {/* Question and Options */}
      <div className="flex-grow flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold text-center mb-12 max-w-2xl">
          {currentQuestion.question}
        </h2>

        {/* Options Table */}
        <div className="w-full max-w-md">
          <table className="w-full border-collapse">
            <tbody>
              {currentQuestion.options.map((option, index) => (
                <tr
                  key={index}
                  className={`border-b border-gray-300 transition-colors cursor-pointer
                    ${
                      selectedOptionIndex === index
                        ? "bg-blue-100 text-blue-800"
                        : "hover:bg-gray-200"
                    }`}
                  onClick={() => handleOptionSelect(index)}
                >
                  <td className="py-4 px-6 flex items-center">
                    <span className="mr-4 font-medium">{index + 1}.</span>
                    <span className="text-lg">{option}</span>
                    {selectedOptionIndex === index && (
                      <FaCheck className="ml-auto text-blue-600" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Next Button */}
      <div className="flex justify-center mt-8">
        <button
          onClick={handleNextQuestion}
          disabled={selectedOptionIndex === null}
          className={`px-8 py-3 rounded-lg text-lg font-medium transition
            ${
              selectedOptionIndex !== null
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
        >
          {currentQuestionIndex === questions.length - 1
            ? "Finish Quiz"
            : "Next Question"}
        </button>
      </div>
    </div>
  );
};

export default QuizPage;
