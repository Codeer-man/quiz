const express = require("express");
const authMiddleware = require("../middleware/auth-middleware");
const role = require("../middleware/admin-middleware");

const {
  CreateQuiz,
  addQuestion,
  getQuiz,
} = require("../controller/quizController");

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

const route = express.Router();

// create
route.post("/createQuiz", authMiddleware, role, CreateQuiz); // create quiz
route.post("/createQuestion/:quizId", authMiddleware, role, addQuestion); // add question in quiz

// get quiz
route.get("/:quizId", authMiddleware, getQuiz);

// delete
route.delete("/:quizId", authMiddleware, deleteQuiz); // delete quiz
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
