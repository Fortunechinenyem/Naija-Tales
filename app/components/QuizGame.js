import { useState } from "react";

const QuizGame = ({ questions = [] }) => {
  if (!questions.length) {
    return (
      <div className="p-6 bg-white shadow-lg rounded-lg text-center">
        <h2 className="text-2xl font-poppins text-primary mb-4">Quiz Time!</h2>
        <p className="text-red-500">No questions available.</p>
      </div>
    );
  }

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);

  const handleAnswer = (isCorrect) => {
    if (!answered) {
      if (isCorrect) setScore((prev) => prev + 1);
      setAnswered(true);
    }
  };

  const handleNext = () => {
    setAnswered(false);
    setCurrentQuestion((prev) => prev + 1);
  };

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg text-center">
      <h2 className="text-2xl font-poppins text-primary mb-4">Quiz Time!</h2>
      {currentQuestion < questions.length ? (
        <>
          <p className="font-lora text-secondary mb-4">
            {questions[currentQuestion].text}
          </p>
          <div className="flex flex-col items-center">
            {questions[currentQuestion].answers.map((answer) => (
              <button
                key={answer.text}
                onClick={() => handleAnswer(answer.isCorrect)}
                className={`px-4 py-2 rounded-lg m-2 text-white font-poppins ${
                  answered ? "bg-gray-400 cursor-not-allowed" : "bg-accent"
                }`}
                disabled={answered}
              >
                {answer.text}
              </button>
            ))}
          </div>
          {answered && (
            <button
              onClick={handleNext}
              className="mt-4 bg-primary text-white font-poppins px-6 py-2 rounded-lg"
            >
              Next Question
            </button>
          )}
        </>
      ) : (
        <p className="font-poppins text-primary text-xl">
          Quiz completed! 🎉 Your score: {score}/{questions.length}
        </p>
      )}
    </div>
  );
};

export default QuizGame;
