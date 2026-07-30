import ThemedStartButton from "../ThemedComponents/ThemedStartButton";
import { ReactTyped } from "react-typed";
import { useCurrentScene } from "../hooks/useCurrentState.js";
import "./css/Scene2.css";
import { useState } from "react";
import { motion } from "framer-motion";

const Scene2 = () => {
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
              setCurrentState("Scene3");
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
              strings={["lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum"]}
              typeSpeed={2}
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

export default Scene2;
