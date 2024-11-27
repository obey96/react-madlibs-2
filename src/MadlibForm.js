import React, { useState } from "react";

function MadlibForm({ handleStory }) {
  const [inputs, setInputs] = useState({
    adjective: "",
    noun: "",
    verb: "",
    adverb: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { adjective, noun, verb, adverb } = inputs;
    const newStory = `The ${adjective} ${noun} decided to ${verb} ${adverb}.`;
    handleStory(newStory);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Adjective:
        <input
          type="text"
          name="adjective"
          value={inputs.adjective}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Noun:
        <input
          type="text"
          name="noun"
          value={inputs.noun}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Verb:
        <input
          type="text"
          name="verb"
          value={inputs.verb}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Adverb:
        <input
          type="text"
          name="adverb"
          value={inputs.adverb}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <button type="submit">Create Story</button>
    </form>
  );
}

export default MadlibForm;
