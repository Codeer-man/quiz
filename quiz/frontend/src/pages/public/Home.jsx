import React from "react";
import QuizCard from "../../components/quiz/QuizCard";

export default function Home() {
  return (
    <div className="min-h-screen max-w-screen mt-5">
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
