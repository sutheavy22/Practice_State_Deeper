import React, { useState } from "react";

export default function App() {
  const [score, setScore] = useState(0);

  const handleScoreChange = (e) => {
    const value = parseInt(e.target.value);
    // Ensure the score stays between 0 and 10
    if (!isNaN(value) && value >= 0 && value <= 10) {
      setScore(value);
    } else if (e.target.value === "") {
      setScore(0);
    }
  };

  const getScoreBarStyle = () => {
    // Compute width (0-10 becomes 0%-100%)
    const scoreWidth = `${score * 10}%`;

    // Compute color based on score
    let scoreColor;
    if (score <= 3) {
      scoreColor = "#ff4d4d"; // Red for low scores
    } else if (score <= 7) {
      scoreColor = "#f3bc47"; // Yellow for medium scores
    } else {
      scoreColor = "#9cc54b"; // Green for high scores
    }

    // Return the style object
    return {
      width: scoreWidth,
      backgroundColor: scoreColor,
      transition: "all 0.3s ease", // Add smooth transition
    };
  };

  return (
    <>
      <div className="score-panel">
        <h1>My Score in React</h1>

        <small>Enter a score (0 to 10): </small>
        <input
          type="number"
          min="0"
          max="10"
          value={score || ""}
          onChange={handleScoreChange}
        />

        <div className="score-bar">
          <div className="score-bar-value" style={getScoreBarStyle()}></div>
        </div>
        <p>Current score: {score}</p>
      </div>
    </>
  );
}