import React, { useState } from "react";

export default function FieldsUse() {
  const [name, setName] = useState("");

  const [ischacked, setIscheacked] = useState(true);
  console.log(ischacked);

  return (
    <div>
      <nav>
        <label htmlFor="">name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <p>text:{name}</p>
      </nav>
      <nav>
        <input
          type="checkbox"
          checked={ischacked}
          onChange={(e) => setIscheacked(e.target.checked)}
        />
        <label htmlFor="">checkbox</label>
      </nav>
    </div>
  );
}