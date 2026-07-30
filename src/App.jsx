import Scene1 from "./scenes/Scene1.jsx";
import Scene2 from "./scenes/Scene2.jsx";
import Scene3 from "./scenes/Scene3.jsx";
import Scene4 from "./scenes/Scene4.jsx";
import Scene5 from "./scenes/Scene5.jsx";

import { useCurrentScene } from "./hooks/useCurrentState.js";
function App() {
  const { currentState } = useCurrentScene();

  return (
    <div className="App">
      {currentState === "Scene1" && <Scene1 />}
      {currentState === "Scene2" && <Scene2 />}
      {currentState === "Scene3" && <Scene3 />}
      {currentState === "Scene4" && <Scene4 />}
      {currentState === "Scene5" && <Scene5 />}
    </div>
  );
}

export default App;
