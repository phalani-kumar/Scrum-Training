import React, { useState } from "react";

export default function ConditionalForm() {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    terms: false,
  });
  const [error, setError] = useState("");

  const handleChande = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };
  //   const handleChande2 = (e) => {
  //     const { name, checked } = e.target;
  //     setFormData({
  //       ...formData,
  //       [name]: checked,
  //     });
  //   };
  const handlesubmit = (e) => {
    e.preventDefault();

    if (!formData.userName || !formData.email || !formData.password) {
      setError("All the fields are required");
      return;
    }
    if (!formData.terms) {
      setError("must accept the term");
      return;
    }
    setError("");
    alert("form submitted successfully");
    console.log(formData);
  };
  return (
    <div>
      <h2>Conditional form</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}

      <form onSubmit={handlesubmit}>
        <input
          type="text"
          name="userName"
          value={formData.userName}
          onChange={handleChande}
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChande}
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChande}
        />
        <input
          type="checkbox"
          name="terms"
          checked={formData.terms}
          onChange={handleChande}
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}