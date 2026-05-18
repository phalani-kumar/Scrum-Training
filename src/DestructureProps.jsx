import React from 'react'

export default function DestructureProps({name,age,city,address,email,phone}) {
  return (
    <div className="card">
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Age:</strong> {age}</p>
      <p><strong>City:</strong> {city}</p>
      <p><strong>Address:</strong> {address}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Phone:</strong> {phone}</p>
    </div>
  );
}
