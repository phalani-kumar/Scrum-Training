function UserCard({
  user,
  deleteUser,
  setEditingUser
}) {

  return (
    <div className="user-card">

      <h2>{user.name}</h2>

      <p>
        <strong>Email:</strong>
        {" "}
        {user.email}
      </p>

      <p>
        <strong>Role:</strong>
        {" "}
        {user.role}
      </p>

      <p>
        <strong>Company:</strong>
        {" "}
        {user.company}
      </p>

      <p>
        <strong>Website:</strong>
        {" "}
        {user.website}
      </p>

      <div className="btn-group">

        <button
          onClick={() =>
            setEditingUser(user)
          }
        >
          Edit
        </button>

        <button
          onClick={() =>
            deleteUser(user.id)
          }
        >
          Delete
        </button>

      </div>

    </div>
  );
}

export default UserCard;