// function EmployeeCard({
//   employee,
//   deleteEmployee,
//   setEditEmployee
// }) {

//   return (
//     <div className="employee-card">

//       <h2>{employee.name}</h2>

//       <p>
//         <strong>Email:</strong>
//         {" "}
//         {employee.email}
//       </p>

//       <div className="btn-group">

//         <button
//           onClick={() => setEditEmployee(employee)}
//         >
//           Edit
//         </button>

//         <button
//           onClick={() => deleteEmployee(employee.id)}
//         >
//           Delete
//         </button>

//       </div>

//     </div>
//   );
// }

// export default EmployeeCard;

function EmployeeCard({
  employee,
  deleteEmployee,
  setEditingEmployee
}) {

  return (
    <div className="employee-card">

      <h2>{employee.fullname}</h2>

      <p>{employee.email}</p>

      <p>{employee.company}</p>

      <p>{employee.website}</p>

      <div className="btn-group">

        <button
          onClick={() =>
            setEditingEmployee(employee)
          }
        >
          Edit
        </button>

        <button
          onClick={() =>
            deleteEmployee(employee.id)
          }
        >
          Delete
        </button>

      </div>

    </div>
  );
}

export default EmployeeCard;