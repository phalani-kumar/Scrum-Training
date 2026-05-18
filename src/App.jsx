import { useEffect, useState } from "react";
import ProfileCard from "./ProfileCard";
import Message from "./Message";
import "./App.css";

function App() {
  const [profiles, setProfiles] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch profiles");
        }
        return response.json();
      })
      .then((data) => {
        setProfiles(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Message text="Loading Profiles..." />;
  }

  if (error) {
    return <Message text={error} error={true} />;
  }

  return (
    <div className="container">
      <h1>Dynamic Profile Viewer</h1>

      <ProfileCard user={profiles[currentIndex]} />

      <div className="button-group">
        <button
          onClick={() =>
            setCurrentIndex((prev) =>
              prev === 0 ? profiles.length - 1 : prev - 1
            )
          }
        >
          Previous
        </button>

        <button
          onClick={() =>
            setCurrentIndex((prev) =>
              prev === profiles.length - 1 ? 0 : prev + 1
            )
          }
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;