import React from "react";
import { useParams, Link } from "react-router-dom";

export default function UserDetails() {
  const { name, email, phone, city, address } = useParams();

  return (
    <div className="details-container">
      <h1>User Full Details</h1>

      <div className="details-card">
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Phone:</strong> {phone}</p>
        <p><strong>City:</strong> {city}</p>
        <p><strong>Address:</strong> {address}</p>
      </div>

      <Link to="/">
        <button className="btn back">Go Back</button>
      </Link>
    </div>
  );
}