import "./css/Scene3.css";
import { useState } from "react";
import { motion } from "framer-motion";
import { useCurrentScene } from "../hooks/useCurrentState.js";

const Scene4 = () => {
  const { setCurrentState } = useCurrentScene();

  const [wrongIndex, setWrongIndex] = useState(null);
  const [correctIndex, setCorrectIndex] = useState(null);
  const [leaving, setLeaving] = useState(false);
  const handleAnswer = (index) => {
    const correctIndex = 2;
    if (index === correctIndex) {
      setCorrectIndex(index);
      setTimeout(() => {
        setCorrectIndex(null);
      }, 900);
      setLeaving(true);
    } else {
      setWrongIndex(index);
      setTimeout(() => {
        setWrongIndex(null);
      }, 900);
    }
  };
  const answers = ["Answer 1", "Answer 2", "Answer 3", "Answer 4"];
  return (
    <div className="QuizContainer">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: leaving ? 0 : 1 }}
        transition={{ duration: 1.5 }}
        onAnimationComplete={() => {
          if (leaving) {
            setCurrentState("Scene5");
          }
        }}
        className="QuizContent"
      >
        <div className="QuestionContainer">
          <h2 className="QuestionText">Question 2</h2>
        </div>
        {/**let's say the right answer is mars */}
        <div className="AnswersContainer">
          {answers.map((answer, index) => (
            <button
              key={index}
              className={`AnswerButton ${wrongIndex === index ? "Wrong" : ""} ${correctIndex === index ? "Correct" : ""}`}
              onClick={() => handleAnswer(index)}
            >
              {answer}
            </button>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Scene4;
