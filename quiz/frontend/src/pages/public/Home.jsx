import React from "react";
import QuizCard from "../../components/quiz/QuizCard";

export default function Home() {
  return (
    <div className="min-h-screen max-w-screen mt-5">
      <div className="w-full h-full text-center text-4xl font-bold p-10 font-anonymouso">
        <h1>Start solving the quiz questions</h1>
      </div>

      <QuizCard
        title="JavaScript Fundamentals"
        questionCount={10}
        difficulty="hard"
        category="Programming"
        onStart={() => console.log("Quiz started!")}
      />
    </div>
  );
}
