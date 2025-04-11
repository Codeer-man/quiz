import React, { useState, useEffect } from "react";
import { FaClock, FaCheck, FaTrophy, FaHome } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../context/auth";
import { toast } from "react-toastify";
import SkeletonLoading from "../../components/loading/skeletion";

const QuizPage = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [quizData, setQuizData] = useState(null);
  const [error, setError] = useState(null);
  const api_url = `${import.meta.env.VITE_GET_QUIZ}/${id}`;
  const navigate = useNavigate();
  const { loggedIn, token } = useAuth();

  // Authentication check
  useEffect(() => {
    if (!loggedIn) {
      navigate("/login");
      toast.error("Please login before attempting the quiz");
    }
  }, [loggedIn, navigate]);

  // Fetch quiz data
  const fetchQuiz = async () => {
    setLoading(true);
    setError(null);

    try {
      if (!token) {
        throw new Error("No authentication token found");
      }

      const response = await fetch(api_url, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to fetch quiz");
      }

      const data = await response.json();

      if (!data.questions || data.questions.length === 0) {
        throw new Error("No questions found in this quiz");
      }

      // Transform data to match expected format
      const transformedData = {
        ...data,
        questions: data.questions.map((question) => ({
          ...question,
          question: question.questionText, // Map questionText to question
          correctAnswer: question.correctAnswerIndex, // Map correctAnswerIndex to correctAnswer
        })),
      };

      setQuizData(transformedData);
    } catch (err) {
      setError(err.message);
      toast.error(err.message);
      console.error("Quiz fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (loggedIn && token) {
      fetchQuiz();
    }
  }, [id, loggedIn, token]);

  // Quiz state management
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(null);
  const [timeLeft, setTimeLeft] = useState(30);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [answeredQuestions, setAnsweredQuestions] = useState([]);

  // Timer logic
  useEffect(() => {
    if (timeLeft === 0 || quizCompleted || !quizData) return;

    const timer = setTimeout(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, quizCompleted, quizData]);

  // Auto-advance when time runs out
  useEffect(() => {
    if (timeLeft === 0 && !quizCompleted && quizData?.questions) {
      handleNextQuestion();
    }
  }, [timeLeft, quizCompleted, quizData]);

  const handleOptionSelect = (index) => {
    setSelectedOptionIndex(index);
  };

  const handleNextQuestion = () => {
    if (quizData?.questions) {
      const currentQuestion = quizData.questions[currentQuestionIndex];
      const isCorrect = selectedOptionIndex === currentQuestion.correctAnswer;

      setAnsweredQuestions([
        ...answeredQuestions,
        {
          question: currentQuestion.question,
          selectedOption:
            selectedOptionIndex !== null
              ? currentQuestion.options[selectedOptionIndex]
              : "Unanswered",
          correctAnswer: currentQuestion.options[currentQuestion.correctAnswer],
          isCorrect,
        },
      ]);

      if (isCorrect) {
        setScore(score + 1);
      }

      if (currentQuestionIndex < quizData.questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedOptionIndex(null);
        setTimeLeft(30);
      } else {
        setQuizCompleted(true);
      }
    }
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedOptionIndex(null);
    setTimeLeft(30);
    setScore(0);
    setQuizCompleted(false);
    setAnsweredQuestions([]);
  };

  if (loading) {
    return <SkeletonLoading />;
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <h1 className="text-3xl font-bold mb-4 text-red-600">Error</h1>
        <p className="text-xl mb-6">{error}</p>
        <button
          onClick={() => navigate("/quizzes")}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          <FaHome className="inline mr-2" />
          Return to Quizzes
        </button>
      </div>
    );
  }

  if (!quizData) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <h1 className="text-3xl font-bold mb-4">No Quiz Found</h1>
        <button
          onClick={() => navigate("/quizzes")}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          <FaHome className="inline mr-2" />
          Return to Quizzes
        </button>
      </div>
    );
  }

  if (quizCompleted) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
        <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl w-full">
          <div className="text-center mb-8">
            <FaTrophy className="text-5xl text-yellow-500 mx-auto mb-4" />
            <h1 className="text-4xl font-bold mb-2">Quiz Completed!</h1>
            <p className="text-2xl mb-6">
              Your Score: {score}/{quizData.questions.length}
            </p>
            <div className="text-xl font-medium mb-2">
              Accuracy: {Math.round((score / quizData.questions.length) * 100)}%
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">Question Review:</h2>
            <div className="space-y-4">
              {answeredQuestions.map((item, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg ${
                    item.isCorrect ? "bg-green-50" : "bg-red-50"
                  }`}
                >
                  <p className="font-medium">{item.question}</p>
                  <p
                    className={
                      item.isCorrect ? "text-green-600" : "text-red-600"
                    }
                  >
                    {item.isCorrect ? "✓ Correct" : "✗ Incorrect"}
                  </p>
                  <p>Your answer: {item.selectedOption}</p>
                  {!item.isCorrect && (
                    <p>Correct answer: {item.correctAnswer}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={restartQuiz}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Retry Quiz
            </button>
            <button
              onClick={() => navigate("/quizzes")}
              className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition"
            >
              Browse More Quizzes
            </button>
          </div>
        </div>
      </div>
    );
  }

  const currentQuestion = quizData.questions[currentQuestionIndex];

  return (
    <div className="min-h-screen flex flex-col p-6 bg-gray-100">
      {/* Progress Bar */}
      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-6">
        <div
          className="bg-blue-600 h-2.5 rounded-full"
          style={{
            width: `${
              ((currentQuestionIndex + 1) / quizData.questions.length) * 100
            }%`,
          }}
        ></div>
      </div>

      {/* Quiz Info */}
      <div className="mb-4">
        <h1 className="text-2xl font-bold">{quizData.title}</h1>
        <div className="flex gap-4 mt-2">
          <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">
            {quizData.category}
          </span>
          <span className="text-sm bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
            {quizData.difficulty}
          </span>
        </div>
      </div>

      {/* Header with question number and timer */}
      <div className="flex justify-between mb-8">
        <div className="text-xl font-semibold">
          Question {currentQuestionIndex + 1}/{quizData.questions.length}
        </div>
        <div className="flex items-center text-red-600">
          <FaClock className="mr-2" />
          <span className="text-xl font-medium">{timeLeft}s</span>
        </div>
      </div>

      {/* Question and Options */}
      <div className="flex-grow flex flex-col items-center justify-center">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 max-w-3xl">
          {currentQuestion.question}
        </h2>

        {/* Options */}
        <div className="w-full max-w-2xl space-y-3">
          {currentQuestion.options.map((option, index) => (
            <div
              key={index}
              className={`p-4 rounded-lg border-2 cursor-pointer transition-all
                ${
                  selectedOptionIndex === index
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-200 hover:border-blue-300 hover:bg-blue-50"
                }`}
              onClick={() => handleOptionSelect(index)}
            >
              <div className="flex items-center">
                <span className="font-medium mr-3">{index + 1}.</span>
                <span className="text-lg">{option}</span>
                {selectedOptionIndex === index && (
                  <FaCheck className="ml-auto text-blue-600" />
                )}
              </div>
            </div>
          ))}
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
          {currentQuestionIndex === quizData.questions.length - 1
            ? "Finish Quiz"
            : "Next Question"}
        </button>
      </div>
    </div>
  );
};

export default QuizPage;
