import React from "react";
import { Link } from "react-router-dom";

export default function UserList() {
  const users = [
    {
      name: "Ram",
      email: "ram@gmail.com",
      phone: "9898989898",
      city: "Vijayawada",
      address: "Benz Circle",
    },
    {
      name: "Ravi",
      email: "ravi@gmail.com",
      phone: "9191919191",
      city: "Hyderabad",
      address: "Madhapur",
    },
    {
      name: "Raj",
      email: "raj@gmail.com",
      phone: "9999988888",
       city: "Delhi",
      address: "Karol Bagh",

    },
    {
      name: "Suresh",
      email: "suresh@gmail.com",
      phone: "9090909090",
      city: "Bangalore",
      address: "Whitefield",
    },
    {
      name: "Ramesh",
      email: "ramesh@gmail.com",
      phone: "9494949494",
       city: "Chennai",
      address: "T Nagar",
    },
    
  ];

  return (
    
    <div className="list-container">
      {/* <h1>Users Data</h1> */}

      {users.map((user, index) => (
        <div key={index} className="card">
          <h3>{user.name}</h3>
          {/* <p>{user.email}</p> */}

          <Link
            to={`/user/${user.name}/${user.email}/${user.phone}/${user.city}/${user.address}`}
          >
            <button className="btn">View Details</button>
          </Link>
        </div>
      ))}
    </div>
  );
}