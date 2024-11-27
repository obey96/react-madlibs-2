import React, { useState } from "react";
import MadlibForm from './MadlibForm';
import MadlibResult from './MadlibResult';

function App() {
  const [story, setStory] = useState("");

  const handleStory = (newStory) => {
    setStory(newStory);
  };

  return (
    <div>
      <h1>React Madlibs</h1>
      {!story && <MadlibForm handleStory={handleStory} />}
      {story && <MadlibResult story={story} resetStory={() => setStory("")} />}
    </div>
  );
}

export default App;
