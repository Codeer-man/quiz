const Quiz = require("../model/quiz-model");

// update the question from the quiz
const updateQuestion = async (req, res) => {
  try {
    const { quizId, questionId } = req.params;

    if (!questionId) {
      return res.status(404).json({ message: "questionId not provided" });
    }
    if (!quizId) {
      return res.status(404).json({ message: "quizId not provided" });
    }

    const findQuiz = await Quiz.findById(quizId);
    if (!findQuiz) {
      return res.status(404).json({ message: "Quiz id not found" });
    }

    // find the question array index
    const findQuestionIndex = findQuiz.questions.findIndex(
      (que) => que._id.toString() === questionId
    );

    if (findQuestionIndex === -1) {
      return res.status(404).json({
        message: "Question id not found",
        questionId: questionId,
      });
    }

    const question = findQuiz.questions[findQuestionIndex];

    // Update the modified question and leave the unmodified ones unchanged
    question.questionText = req.body.questionText || question.questionText;
    question.correctAnswerIndex =
      req.body.correctAnswerIndex || question.correctAnswerIndex;

    // update all options
    if (req.body.options) {
      question.options = req.body.options;
    }

    // update only one or multiple options
    if (Array.isArray(req.body.updateOptions)) {
      req.body.updateOptions.forEach(({ index, value }) => {
        if (
          index >= 0 &&
          index < question.options.length &&
          typeof value === "string"
        ) {
          question.options[index] = value;
        }
      });
    }

    // save the updated quiz
    await findQuiz.save();
    return res.status(200).json({
      message: "Question updated successfully",
      data: findQuiz,
    });
  } catch (error) {
    console.error("Error updating question", error);
    return res.status(500).json({ message: "Server error", error });
  }
};

// update quiz details
const updateQuiz = async (req, res) => {
  try {
    const { quizId } = req.params;
    const { title, category, difficulty } = req.body;

    if (!quizId) {
      return res.status(404).json({ message: "Quiz id not provided" });
    }

    const quiz = await Quiz.findById(quizId);

    if (!quiz) {
      return res.status(404).json({ message: "Quiz not found" });
    }

    // update quiz details if provided
    quiz.title = title || quiz.title;
    quiz.category = category || quiz.category;
    quiz.difficulty = difficulty || quiz.difficulty;

    // save the updated quiz
    await quiz.save();
    return res.status(200).json({ message: "Quiz updated successfully" });
  } catch (error) {
    console.error("Error updating quiz", error);
    return res.status(500).json({ message: "Server error", error });
  }
};

module.exports = { updateQuestion, updateQuiz };
