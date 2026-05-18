import React, { useEffect, useState } from "react";

export default function Childback({ getItems, onAction }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    console.log("Child re-rendered");
    setItems(getItems());
  }, [getItems]);

  return (
    <div style={{ marginTop: "20px" }}>
      <h3>Child Component</h3>

      {items.map((item) => (
        <div key={item}>{item}</div>
      ))}

      <button
        onClick={onAction}
        style={{
          marginTop: "10px",
          padding: "8px",
          cursor: "pointer"
        }}
      >
        Call Parent Function
      </button>
    </div>
  );
}