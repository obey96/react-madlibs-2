import React from "react";

function MadlibResult({ story, resetStory }) {
  return (
    <div>
      <h2>Your Madlib Story</h2>
      <p>{story}</p>
      <button onClick={resetStory}>Create Another Story</button>
    </div>
  );
}

export default MadlibResult;
