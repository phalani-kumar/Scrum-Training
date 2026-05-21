// import { useEffect, useState } from "react";

// function EmployeeForm({
//   addEmployee,
//   updateEmployee,
//   editEmployee
// }) {

//   const [formData, setFormData] = useState({
//     name: "",
//     email: ""
//   });

//   useEffect(() => {

//     if (editEmployee) {

//       setFormData(editEmployee);
//     }

//   }, [editEmployee]);

//   const handleChange = (e) => {

//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = (e) => {

//     e.preventDefault();

//     if (editEmployee) {

//       updateEmployee(formData);

//     } else {

//       addEmployee(formData);
//     }

//     setFormData({
//       name: "",
//       email: ""
//     });
//   };

//   return (
//     <form
//       className="employee-form"
//       onSubmit={handleSubmit}
//     >

//       <input
//         type="text"
//         name="name"
//         placeholder="Employee Name"
//         value={formData.name}
//         onChange={handleChange}
//         required
//       />

//       <input
//         type="email"
//         name="email"
//         placeholder="Employee Email"
//         value={formData.email}
//         onChange={handleChange}
//         required
//       />

//       <button type="submit">
//         {editEmployee
//           ? "Update Employee"
//           : "Add Employee"}
//       </button>

//     </form>
//   );
// }

// export default EmployeeForm;

import { useEffect, useState } from "react";

import { useEffect, useState } from "react";

function EmployeeForm({
  addEmployee,
  updateEmployee,
  editingEmployee
}) {

  const [formData, setFormData]
    = useState({

      fullname: "",
      email: "",
      company: "",
      website: ""
    });

  useEffect(() => {

    if (editingEmployee) {

      setFormData(editingEmployee);
    }

  }, [editingEmployee]);

  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]:
        e.target.value
    });
  };

  const handleSubmit = (e) => {

    e.preventDefault();

    if (editingEmployee) {

      updateEmployee(formData);

    } else {

      addEmployee(formData);
    }

    setFormData({

      fullname: "",
      email: "",
      company: "",
      website: ""
    });
  };

  return (
    <form
      className="employee-form"
      onSubmit={handleSubmit}
    >

      <input
        type="text"
        name="fullname"
        placeholder="Full Name"
        value={formData.fullname}
        onChange={handleChange}
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="company"
        placeholder="Company"
        value={formData.company}
        onChange={handleChange}
      />

      <input
        type="text"
        name="website"
        placeholder="Website"
        value={formData.website}
        onChange={handleChange}
      />

      <button type="submit">

        {editingEmployee
          ? "Update Employee"
          : "Add Employee"}

      </button>

    </form>
  );
}

export default EmployeeForm;