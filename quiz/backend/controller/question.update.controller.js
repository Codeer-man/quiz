const Quiz = require("../model/quiz-model");
const { options } = require("../routes/quiz.route");

// update the question  fomr thr quiz
const updateQuestion = async (req, res) => {
  try {
    const { quizId, questionId } = req.params;

    if (!questionId) {
      return res.status(404).json({ message: "questionId not provided" });
    }
    if (!quizId) {
      return res.status(404).json({ message: "quizId not provided" });
    }

    const findQuestion = await Quiz.findById(quizId);
    if (!findQuestion) {
      return res.status(404).json({ message: "Question id not found" });
    }

    // find the question array num
    const findQuestionIndex = findQuestion.questions.findIndex(
      (que) => que._id.toString() === questionId
    );

    if (findQuestionIndex === -1) {
      res
        .status(404)
        .json({ message: "question id not ", questionId: questionId });
    }

    const question = findQuestion.questions[findQuestionIndex];

    // Update the modified question and leave the unmodified ones unchanged
    question.questionText = req.body.questionText || question.questionText;
    question.correctAnswerIndex =
      req.body.correctAnswerIndex || question.correctAnswerIndex;

    // update all options
    if (req.body.options) {
      question.options = req.body.options;
    }

    // update only one or multiple optoins options
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

    //   to save
    await findQuestion.save();
    return res.status(200).json({
      message: "Question updated successfully",
      data: findQuestion,
    });
  } catch (error) {
    console.error("Error updating question", error);
    return res.status(500).json({ message: "Invalid server error", error });
  }
};

const updataQuiz = async (req, res) => {
  try {
    const { quizId } = req.params;
    const { title, category, difficulty } = req.body;

    if (!quizId) return res.status(404).json({ message: "id not provided" });

    const quiz = await Quiz.findById(quizId);

    if (!quiz) {
      return res.status(404).json({ message: "Quiz not found" });
    }

    // update if change occour
    quiz.title = title || quiz.title;
    quiz.category = category || quiz.category;
    quiz.difficulty = difficulty || quiz.difficulty;

    return res.status(200).json({ message: "quiz  updated" });
  } catch (error) {
    console.error("error updating quiz", error);
    return res
      .status(500)
      .json({ message: "Invalid server Error", error: error });
  }
};

module.exports = { updateQuestion, updataQuiz };
