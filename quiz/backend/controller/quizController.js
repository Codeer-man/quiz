const Quiz = require("../model/quiz-model");

// create quiz
const CreateQuiz = async (req, res) => {
  try {
    const { title, category, difficulty } = req.body;

    const createQuiz = Quiz({
      title,
      category,
      difficulty,
      createdBy: req.id,
      username: req.username,
      question: [], //start with empty erray
    });
    await createQuiz.save();
    return res.status(200).json({ message: "Quiz created", data: createQuiz });
  } catch (error) {
    return res.status(500).json({ message: "Faild to create Quiz", error });
  }
};

// add question to the quiz
const addQuestion = async (req, res) => {
  try {
    const { quizId } = req.params;
    const { questionText, options, correctAnswerIndex, score } = req.body;

    const quiz = await Quiz.findById(quizId);
    if (!quiz) {
      return res.status(404).json({ message: "Quiz not found" });
    }

    // check for existing question
    const existingQuestion = Quiz.questions.some((q) => {
      q.questions.trim().toLowerCase() === questionText.trim().toLowerCase();
    });

    if (existingQuestion) {
      return res.status(400).json({ message: "Question already exists" });
    }

    const newQuestion = {
      questionText,
      options,
      correctAnswerIndex,
      score: score || 1,
    };

    quiz.questions.push(newQuestion);
    await quiz.save();

    return res.status(200).json({ message: "Question added", data: quiz });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to add question",
      error: error.message,
    });
  }
};

module.exports = { addQuestion };

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

module.exports = { CreateQuiz, addQuestion, getQuiz };
