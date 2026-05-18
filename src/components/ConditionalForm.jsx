import React, { useState } from "react";

export default function ConditionalForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dob: "",
    gender: "",
    address: "",
    landmark: "",
    city: "",
    state: "",
    country: "",
    pincode: "",
    username: "",
    password: "",
    confirmPassword: "",
    terms: false
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check empty fields
    for (let key in formData) {
      if (key !== "terms" && formData[key] === "") {
        setError("All fields are required");
        return;
      }
    }

    // Password validation
    if (formData.password !== formData.confirmPassword) {
      setError("Please enter the correct passwords");
      return;
    }

    // Terms validation
    if (!formData.terms) {
      setError("Must accept the terms and conditions");
      return;
    }

    setError("");
    alert("Form Submitted Successfully");
    console.log(formData);
  };

  return (
    <div className="container">
      <h2>Application Form</h2>

      {error && <p className="error">{error}</p>}

      <form onSubmit={handleSubmit} className="form">

        <input name="firstName" placeholder="First Name" onChange={handleChange} />
        <input name="lastName" placeholder="Last Name" onChange={handleChange} />

        <input type="email" name="email" placeholder="Email" onChange={handleChange} />
        <input type="number" name="phone" placeholder="Mobile Number" onChange={handleChange} />

        <input type="date" name="dob" onChange={handleChange} />

        <select name="gender" onChange={handleChange}>
          <option value="">Select Gender</option>
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>

        <input name="address" placeholder="Address" onChange={handleChange} />
        <input name="landmark" placeholder="Landmark" onChange={handleChange} />
        <input name="city" placeholder="City" onChange={handleChange} />
        <input name="state" placeholder="State" onChange={handleChange} />
        <input name="country" placeholder="Country" onChange={handleChange} />

        <input name="pincode" placeholder="Pincode" onChange={handleChange} />

        <input name="username" placeholder="Username" onChange={handleChange} />

        <input type="password" name="password" placeholder="Password" onChange={handleChange} />

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          onChange={handleChange}
        />

        <label className="terms">
          <input
            type="checkbox"
            name="terms"
            checked={formData.terms}
            onChange={handleChange}
          />
          Terms & Conditions should be accepted
        </label>

        <button type="submit">Submit</button>
      </form>

      <style>{`
        .container{
          width:300px;
          margin:auto;
          padding:25px;
          border-radius:10px;
          background:gold;
          box-shadow:0 0 20px rgba(193, 35, 35, 0.1);
        }
        body{
          background-color:tomato;
        }

        h2{
          text-align:center;
          margin-bottom:15px;
        }

        .form{
          display:flex;
          flex-direction:column;
          gap:10px;
        }

        input, select{
          padding:20px;
          border-radius:10px;
          border:1px solid grey;
        }

        button{
          padding:20px;
          background:#4CAF50;
          color:white;
          border:none;
          border-radius:10px;
          cursor:pointer;
        }

        button:hover{
          background:violet;
        }

        .terms{
          font-size:15px;
        }

        .error{
          color:red;
          text-align:center;
        }

        @media (max-width:500px){
          .container{
            width:90%;
          }
        }
      `}</style>
    </div>
  );
}