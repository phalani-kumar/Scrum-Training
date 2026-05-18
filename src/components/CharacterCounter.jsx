import React, { useState, useEffect } from "react";

export default function CharacterCounter() {
  const [text, setText] = useState("");
  const [charCount, setCharCount] = useState(0);
  const [wordCount, setWordCount] = useState(0);

  const maxLimit = 100;

  useEffect(() => {
    setCharCount(text.length);

    const words = text.trim().split(/\s+/).filter(word => word !== "");
    setWordCount(words.length);
  }, [text]);

  const handleChange = (e) => {
    if (e.target.value.length <= maxLimit) {
      setText(e.target.value);
    }
  };

  const clearText = () => {
    setText("");
  };

  const textColor = charCount >= 80 ? "warning-text" : "";

  return (
    <div className="container">
      <h2>CharacterCounter</h2>

      <textarea
        value={text}
        onChange={handleChange}
        placeholder="Type content..."
        className={`textarea ${textColor}`}
      />

      <div className="counter">
        Characters: {charCount} <br/>
        {/* MaxLimit: {maxLimit} */}
      </div>
      <h4> MaxLimit: {maxLimit}</h4>

      <div className="words">Words: {wordCount}</div>

      {charCount === maxLimit && (
        <p className="warning">Character Limit Exceeded!</p>
      )}

      <button className="clear-btn" onClick={clearText}>
        Clear Content
      </button>
    </div>
  );
}