import { useState } from "react";
import { motion } from "framer-motion";
import useSound from "use-sound";

import confetti from "canvas-confetti";

const QuizGame = ({ questions = [] }) => {
  if (!questions.length) {
    return (
      <div className="p-6 bg-white shadow-lg rounded-lg text-center">
        <h2 className="text-2xl font-poppins text-primary mb-4">Quiz Time!</h2>
        <p className="text-red-500">No questions available.</p>
      </div>
    );
  }

  const correctSfx = "/audio/correct.mp3";
  const wrongSfx = "/audio/wrong.mp3";

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [shake, setShake] = useState(false);
  const [playCorrect] = useSound(correctSfx);
  const [playWrong] = useSound(wrongSfx);

  const handleAnswer = (isCorrect) => {
    if (!answered) {
      if (isCorrect) {
        setScore((prev) => prev + 1);
        playCorrect();
      } else {
        setShake(true);
        playWrong();
        setTimeout(() => setShake(false), 300);
      }
      setAnswered(true);
    }
  };

  const handleNext = () => {
    setAnswered(false);
    setCurrentQuestion((prev) => prev + 1);
  };

  if (currentQuestion >= questions.length) {
    confetti({ particleCount: 100, spread: 70 });
    return (
      <div className="p-6 bg-white shadow-lg rounded-lg text-center">
        <h2 className="text-2xl font-poppins text-primary mb-4">
          🎉 Quiz Completed! 🎉
        </h2>
        <p className="font-poppins text-primary text-xl">
          Your score: {score}/{questions.length}
        </p>
      </div>
    );
  }

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg text-center">
      <h2 className="text-2xl font-poppins text-primary mb-2">Quiz Time!</h2>
      <p className="text-gray-500">
        Question {currentQuestion + 1} of {questions.length}
      </p>

      <motion.p
        className="font-lora text-secondary mb-4"
        animate={shake ? { x: [0, -10, 10, -10, 10, 0] } : {}}
        transition={{ duration: 0.3 }}
      >
        {questions[currentQuestion].text}
      </motion.p>

      <div className="flex flex-col items-center">
        {questions[currentQuestion].answers.map((answer) => (
          <motion.button
            key={answer.text}
            onClick={() => handleAnswer(answer.isCorrect)}
            className={`px-4 py-2 rounded-lg m-2 text-white font-poppins w-3/4 text-lg 
              ${
                answered
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-accent hover:bg-accent-dark"
              }`}
            whileTap={{ scale: 0.9 }}
            disabled={answered}
          >
            {answer.text}
          </motion.button>
        ))}
      </div>

      {answered && (
        <button
          onClick={handleNext}
          className="mt-4 bg-primary text-white font-poppins px-6 py-2 rounded-lg"
        >
          Next Question ➡️
        </button>
      )}
    </div>
  );
};

export default QuizGame;
