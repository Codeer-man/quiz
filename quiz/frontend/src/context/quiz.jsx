import { createContext, useContext, useState, useEffect } from "react";

export const quizContext = createContext();

export const QuizProvider = ({ children }) => {
  return <quizContext.Provider value={{}}>{children}</quizContext.Provider>;
};

export const useQuiz = () => {
  const context = useContext(quizContext);
  if (!context) {
    throw new Error("useQuiz must be used within a QuizProvider");
  }
  return context;
};
