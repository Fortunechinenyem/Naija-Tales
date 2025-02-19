const QuizGame = ({ questions }) => {
  const [score, setScore] = useState(0);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) setScore(score + 1);
  };

  return (
    <div>
      <h2 className="text-2xl font-poppins text-primary">Quiz Time!</h2>
      {questions.map((question, index) => (
        <div key={index}>
          <p className="font-lora text-secondary">{question.text}</p>
          {question.answers.map((answer) => (
            <button
              key={answer.text}
              onClick={() => handleAnswer(answer.isCorrect)}
              className="bg-accent text-white font-poppins px-4 py-2 rounded-lg m-2"
            >
              {answer.text}
            </button>
          ))}
        </div>
      ))}
      <p className="font-poppins text-primary">Your score: {score}</p>
    </div>
  );
};

export default QuizGame;
