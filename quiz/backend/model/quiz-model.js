// quiz schema
const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  questionText: {
    type: String,
    required: true,
  },
  options: {
    type: [String],
    validate: [(arr) => arr.length === 4, "Exactly 4 options are required"],
    required: true,
  },
  correctAnswerIndex: {
    type: Number,
    min: 0,
    max: 3,
    required: true,
  },
  // score: {
  //   type: Number,
  //   default: 1, // default score per question
  // },
});

const quizSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    username: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
      trim: true,
    },
    difficulty: {
      type: String,
      enum: ["Easy", "Medium", "Hard", "Expert"],
      required: true,
    },
    questions: {
      type: [questionSchema],
      default: [],
    },
    // url: {
    //   type: String,
    //   required: true,
    // },
    // image: {
    //   type: String,
    //   required: true,
    //   trim: true,
    // },
    // publicId: {
    //   type: String,
    //   required: true,
    //   trim: true,
    // },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Quiz", quizSchema);
