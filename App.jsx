import React from "react";
import UserProfileCard from "./UserProfileCard";
import "./index.css";

function App() {
  return (
    <div className="app-container">
      <UserProfileCard
        image="https://img.magnific.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg?semt=ais_hybrid&w=740&q=80"
        name="Phalani Kumar"
        role="Associate Software Engineer"
        bio="Associate Software Engineer focused on developing efficient and scalable software solutions."
      />
    </div>
  );
}

export default App;