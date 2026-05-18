import React, { useState, useEffect } from "react";

export default function StopWatchTimer() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let intervalId;

    if (running) {
      intervalId = setInterval(() => {
        setTime((prev) => prev + 10);
      }, 10); // runs every 10 milliseconds
    }

    return () => clearInterval(intervalId);
  }, [running]);

  const handleStart = () => {
    setRunning(true);
  };

  const handlePause = () => {
    setRunning(false);
  };

  const handleReset = () => {
    setTime(0);
    setRunning(false);
  };

  // Convert time
  const seconds = Math.floor(time / 1000);
  const milliseconds = Math.floor((time % 1000) / 10);

  const formatTime =
    String(seconds).padStart(2, "0") +
    " : " +
    String(milliseconds).padStart(2, "0");

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1>Stopwatch Timer</h1>

        <h2 style={styles.timer}>{formatTime}</h2>

        <div style={styles.buttons}>
          <button style={styles.startBtn} onClick={handleStart}>
            Start
          </button>

          <button style={styles.pauseBtn} onClick={handlePause}>
            Pause
          </button>

          <button style={styles.resetBtn} onClick={handleReset}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "#235d97",
  },
  

  card: {
    textAlign: "center",
    padding: "40px",
    // border: "5px solid black",
    borderRadius: "20px",
    background: "lightgray",
    boxShadow: "0 4px 10px rgba(7, 80, 13, 0.1)",
  },

  timer: {
    fontSize: "45px",
    margin: "20px 0",
    fontWeight: "bold",
  },

  buttons: {
    display: "flex",
    gap: "10px",
    justifyContent: "center",
  },

  startBtn: {
    padding: "10px 20px",
    border: "none",
    background: "green",
    color: "white",
    borderRadius: "10px",
    cursor: "pointer",
  },

  pauseBtn: {
    padding: "10px 20px",
    border: "none",
    background: "orange",
    color: "white",
    borderRadius: "10px",
    cursor: "pointer",
  },

  resetBtn: {
    padding: "10px 20px",
    border: "none",
    background: "red",
    color: "white",
    borderRadius: "10px",
    cursor: "pointer",
  },
};