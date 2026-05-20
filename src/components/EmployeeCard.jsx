function EmployeeCard({
  employee,
  deleteEmployee,
  setEditEmployee
}) {

  return (
    <div className="employee-card">

      <h2>{employee.name}</h2>

      <p>
        <strong>Email:</strong>
        {" "}
        {employee.email}
      </p>

      <div className="btn-group">

        <button
          onClick={() => setEditEmployee(employee)}
        >
          Edit
        </button>

        <button
          onClick={() => deleteEmployee(employee.id)}
        >
          Delete
        </button>

      </div>

    </div>
  );
}

export default EmployeeCard;