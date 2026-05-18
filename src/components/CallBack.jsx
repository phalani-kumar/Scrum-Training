import React, { useCallback, useState } from "react";
import Childback from "./Childback";

export default function CallBack() {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);

  // Memoized function (prevents unnecessary re-renders)
  const getItems = useCallback(() => {
    console.log("getItems function called");
    return [number, number + 1, number + 2];
  }, [number]);

  // Function passed to child (for interaction)
  const handleAlert = useCallback(() => {
    alert("Hello from Parent Component!");
  }, []);

  const theme = {
    backgroundColor: dark ? "#222" : "#f9f9f9",
    color: dark ? "#fff" : "#000",
    padding: "20px",
    textAlign: "center",
    borderRadius: "10px",
    width: "300px",
    margin: "50px auto",
    boxShadow: "0 0 10px rgba(0,0,0,0.2)"
  };

  return (
    <div style={theme}>
      <h2>Parent Component</h2>

      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value) || 0)}
        style={{ padding: "8px", marginBottom: "10px" }}
      />

      <br />

      <button onClick={() => setDark(!dark)}>
        Toggle Theme
      </button>

      <Childback getItems={getItems} onAction={handleAlert} />
    </div>
  );
}