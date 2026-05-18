import React, { useEffect, useState } from "react";
// import "./App.css";

export default function App() {
  const [users, setUsers] = useState([]);
  const [profileImage, setProfileImage] = useState(null);

  // Fetch API data
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.log("Error fetching data:", error));
  }, []);

  // Handle image upload
  const handleImageUpload = (event) => {
    const file = event.target.files[0];

    if (file) {
      const imageURL = URL.createObjectURL(file);
      setProfileImage(imageURL);
    }
  };

  return (
    <div className="container">

      <h1 className="title">User Data Table</h1>

      {/* Profile Upload Section */}
      <div className="profile-section">
        <h2>Upload Profile Picture</h2>

        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
        />

        {profileImage && (
          <div className="image-preview">
            <img src={profileImage} alt="Profile Preview" />
          </div>
        )}
      </div>

      {/* Table Section */}
      <table className="user-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Website</th>
            <th>City</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.website}</td>
              <td>{user.address.city}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}