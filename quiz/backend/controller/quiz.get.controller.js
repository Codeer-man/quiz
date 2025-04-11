const Quiz = require("../model/quiz-model");

// get the questions
const getQuiz = async (req, res) => {
  try {
    const { quizId } = req.params;

    if (!quizId) {
      return res.status(404).json({ message: "Id not provided" });
    }
    const quiz = await Quiz.findById(quizId);

    if (!quiz) {
      return res.status(404).json({ message: "quiz not found" });
    }

    return res.status(200).json(quiz);
  } catch (error) {
    return res.status(500).json("Invalid server error", error);
  }
};

const getAllQuizzes = async (req, res) => {
  try {
    const quizzes = await Quiz.find();
    if (!quizzes) {
      return res.status(404).json({ message: "Quiz not found" });
    }
    return res.status(200).json({ message: "Quiz found", data: quizzes });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Failed to fetch quizzes", error });
  }
};

module.exports = { getQuiz, getAllQuizzes };
