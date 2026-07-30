import ThemedStartButton from "../ThemedComponents/ThemedStartButton";
import { ReactTyped } from "react-typed";
import { useCurrentScene } from "../hooks/useCurrentState.js";
import "./css/Scene1.css";
import { useState } from "react";
import { motion } from "framer-motion";

const Scene1 = () => {
  const { setCurrentState } = useCurrentScene();
  const [showButton, setShowButton] = useState(false);
  const [leaving, setLeaving] = useState(false);
  const handleStart = () => {
    setLeaving(true);
  };
  const showButtonHandler = () => {
    setTimeout(() => {
      setShowButton(true);
    }, 1500);
  };
  return (
    <>
      <div className="Container">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: leaving ? 0 : 1 }}
          transition={{ duration: 1.5 }}
          onAnimationComplete={() => {
            if (leaving) {
              setCurrentState("Scene2");
            }
          }}
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <div className="Welcome">
            <ReactTyped
              strings={["Welcome"]}
              typeSpeed={125}
              backSpeed={50}
              showCursor={false}
              className="WelcomeText"
              onComplete={showButtonHandler}
            />
          </div>
          <div className="Start">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: showButton ? 1 : 0 }}
              transition={{ duration: 1 }}
            >
              <ThemedStartButton onClick={handleStart} className="StartButton">
                <h3>Start</h3>
              </ThemedStartButton>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Scene1;
