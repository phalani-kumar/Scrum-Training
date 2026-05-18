import React, { useState } from "react";

function UserProfileCard(props) {
  const { image, name, role, bio } = props;

  const [connected, setConnected] = useState(false);

  const handleConnect = () => {
    setConnected(!connected);
  };

  return (
    <div className="profile-card">
      <img src={image} alt={name} className="picture" />

      <h2>{name}</h2>

      <h4>{role}</h4>

      <p className="bio">{bio}</p>

      <button onClick={handleConnect} className="connect-btn">
        {connected ? "Connected" : "Connect"}
      </button>
    </div>
  );
}

export default UserProfileCard;