const { createContext, useContext } = require("react");

export const quizContext = createContext();

export const QuizProvider = ({ children }) => {
  return <quizContext.Provider> {children}</quizContext.Provider>;
};

export const useQuiz = () => {
  const quizContextValue = useContext(quizContext);
  return quizContextValue;
};
