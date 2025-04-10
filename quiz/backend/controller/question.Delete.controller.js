const Quiz = require("../model/quiz-model");

// delete question from the quiz
const deleteQuestion = async (req, res) => {
  try {
    const { quizId, questionId } = req.params;

    if (!questionId || !quizId) {
      return res
        .status(404)
        .json({ message: "quizId or questionId not provided " });
    }

    const quiz = await Quiz.findById(quizId);

    if (!quiz) {
      return res.status(404).json({ message: "quiz  not found" });
    }

    quiz.questions = quiz.questions.filter(
      (question) => question._id.toString() !== questionId
    );

    await quiz.save();

    res.status(200).json({ message: "Question deleted", data: deleteQuestion });
  } catch (error) {
    console.error(error);

    return res
      .status(500)
      .json({ message: "Invalid server error", error: error });
  }
};

// delete the quiz
const deleteQuiz = async (req, res) => {
  try {
    const { quizId } = req.params;
    if (!quizId) {
      return res.status(200).json({ message: "quizId not provided" });
    }

    const quiz = await Quiz.findByIdAndDelete(quizId);

    if (!quiz) {
      return res.status(404).json({ message: "Quiz not found" });
    }
    return res.status(200).json({ message: "Quiz deleted", data: quiz });
  } catch (error) {
    console.error("error", error);
    return res
      .status(500)
      .json({ message: "Invalid server error", error: error });
  }
};

module.exports = { deleteQuestion, deleteQuiz };
