const express = require("express");
const authMiddleware = require("../middleware/auth-middleware");
const role = require("../middleware/admin-middleware");
const { CreateQuiz, addQuestion } = require("../controller/quizController");
const { uploadMiddleware } = require("../middleware/upload-middleware");
// import delete question and quiz
const {
  deleteQuestion,
  deleteQuiz,
} = require("../controller/question.Delete.controller");

// import update question and quiz
const {
  updateQuestion,
  updataQuiz,
} = require("../controller/question.update.controller");

// get quiz and question
const { getQuiz, allQuiz } = require("../controller/quiz.get.controller");

const route = express.Router();

// create
route.post(
  "/createQuiz",
  authMiddleware,
  uploadMiddleware.single("image"),
  role,
  CreateQuiz
); // create quiz
route.post("/createQuestion/:quizId", authMiddleware, role, addQuestion); // add question in quiz

// get quiz
route.get("/:quizId", authMiddleware, getQuiz);
route.get("/GetQuiz", authMiddleware, allQuiz);

// delete
route.delete("/quiz/:quizId", authMiddleware, deleteQuiz); // delete quiz
route.delete(
  "/quiz/:quizId/question/:questionId", // delete question from quiz
  authMiddleware,
  role,
  deleteQuestion
);

// checking left
// update
route.patch(
  "/quiz/:quizId/update/:questionId", //update question in quiz
  authMiddleware,
  role,
  updateQuestion
);
route.patch("/quiz/:quizId/update", authMiddleware, role, updataQuiz); //update the quiz

module.exports = route;
