// import { useEffect, useState } from "react";
// import ProfileCard from "./ProfileCard";
// import Message from "./Message";
// import "./App.css";

// function App() {
//   const [profiles, setProfiles] = useState([]);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Failed to fetch profiles");
//         }
//         return response.json();
//       })
//       .then((data) => {
//         setProfiles(data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         setError(err.message);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) {
//     return <Message text="Loading Profiles..." />;
//   }

//   if (error) {
//     return <Message text={error} error={true} />;
//   }

//   return (
//     <div className="container">
//       <h1>Dynamic Profile Viewer</h1>

//       <ProfileCard user={profiles[currentIndex]} />

//       <div className="button-group">
//         <button
//           onClick={() =>
//             setCurrentIndex((prev) =>
//               prev === 0 ? profiles.length - 1 : prev - 1
//             )
//           }
//         >
//           Previous
//         </button>

//         <button
//           onClick={() =>
//             setCurrentIndex((prev) =>
//               prev === profiles.length - 1 ? 0 : prev + 1
//             )
//           }
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// }

// export default App;

// import { useEffect, useState } from "react";
// import axios from "axios";

// import Header from "./components/Header";
// import EmployeeCard from "./components/EmployeeCard";
// import EmployeeForm from "./components/EmployeeForm";
// import EmployeeSearch from "./components/EmployeeSearch";

// function App() {

//   const [employees, setEmployees] = useState([]);

//   const [search, setSearch] = useState("");

//   const [editEmployee, setEditEmployee] = useState(null);

//   const [loading, setLoading] = useState(true);

//   const [message, setMessage] = useState("");

//   const API = "https://jsonplaceholder.typicode.com/users";

//   // FETCH EMPLOYEES
//   const fetchEmployees = async () => {

//     try {

//       const response = await axios.get(API);

//       setEmployees(response.data);

//     } catch (error) {

//       console.log(error);

//       setMessage("Unable to Fetch Employees");

//     } finally {

//       setLoading(false);
//     }
//   };

//   useEffect(() => {

//     fetchEmployees();

//   }, []);

//   // ADD EMPLOYEE
//   const addEmployee = async (employeeData) => {

//     try {

//       await axios.post(API, employeeData);

//       const newEmployee = {
//         ...employeeData,
//         id: employees.length + 1
//       };

//       setEmployees([...employees, newEmployee]);

//       setMessage("Employee Added Successfully");

//     } catch (error) {

//       console.log(error);

//       setMessage("Failed to Add Employee");
//     }
//   };

//   // DELETE EMPLOYEE
//   const deleteEmployee = (id) => {

//     const filteredEmployees = employees.filter(
//       (employee) => employee.id !== id
//     );

//     setEmployees(filteredEmployees);

//     setMessage("Employee Deleted Successfully");
//   };

//   // UPDATE EMPLOYEE
//   const updateEmployee = (updatedEmployee) => {

//     const updatedList = employees.map((employee) =>
//       employee.id === editEmployee.id
//         ? updatedEmployee
//         : employee
//     );

//     setEmployees(updatedList);

//     setEditEmployee(null);

//     setMessage("Employee Updated Successfully");
//   };

//   // SEARCH FILTER
//   const filteredEmployees = employees.filter((employee) =>
//     employee.name.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div>

//       <Header />

//       <div className="container">

//         <h1>Employee Management Dashboard</h1>

//         {message && (
//           <p className="message">{message}</p>
//         )}

//         <EmployeeSearch
//           search={search}
//           setSearch={setSearch}
//         />

//         <EmployeeForm
//           addEmployee={addEmployee}
//           updateEmployee={updateEmployee}
//           editEmployee={editEmployee}
//         />

//         {loading ? (
//           <h2>Loading Employees...</h2>
//         ) : (
//           <div className="employee-grid">

//             {filteredEmployees.map((employee) => (
//               <EmployeeCard
//                 key={employee.id}
//                 employee={employee}
//                 deleteEmployee={deleteEmployee}
//                 setEditEmployee={setEditEmployee}
//               />
//             ))}

//           </div>
//         )}

//       </div>

//     </div>
//   );
// }

// export default App;

import { useEffect, useState } from "react";
import axios from "axios";

import Navbar from "./components/Navbar";
import UserForm from "./components/UserForm";
import UserCard from "./components/UserCard";
import SearchBar from "./components/SearchBar";

function App() {

  const [users, setUsers] = useState([]);

  const [search, setSearch] = useState("");

  const [editingUser, setEditingUser] = useState(null);

  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(true);

  const API = "http://127.0.0.1:5000/users";

  // FETCH USERS
  const fetchUsers = async () => {

    try {

      const response = await axios.get(API);

      setUsers(response.data);

    } catch (error) {

      console.log(error);

      setMessage("Unable to Fetch Users");

    } finally {

      setLoading(false);
    }
  };

  useEffect(() => {

    fetchUsers();

  }, []);

  // ADD USER
  const addUser = async (userData) => {

    try {

      await axios.post(API, userData);

      fetchUsers();

      setMessage("User Added Successfully");

    } catch (error) {

      console.log(error);
    }
  };

  // DELETE USER
  const deleteUser = async (id) => {

    try {

      await axios.delete(`${API}/${id}`);

      fetchUsers();

      setMessage("User Deleted Successfully");

    } catch (error) {

      console.log(error);
    }
  };

  // UPDATE USER
  const updateUser = async (userData) => {

    try {

      await axios.put(
        `${API}/${editingUser.id}`,
        userData
      );

      fetchUsers();

      setEditingUser(null);

      setMessage("User Updated Successfully");

    } catch (error) {

      console.log(error);
    }
  };

  // SEARCH FILTER
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(
      search.toLowerCase()
    )
  );

  return (
    <div>

      <Navbar />

      <div className="container">

        <h1>Employee Details Dashboard</h1>

        {message && (
          <p className="message">{message}</p>
        )}

        <SearchBar
          search={search}
          setSearch={setSearch}
        />

        <UserForm
          addUser={addUser}
          updateUser={updateUser}
          editingUser={editingUser}
        />

        {loading ? (
          <h2>Loading Users...</h2>
        ) : (
          <div className="user-grid">

            {filteredUsers.map((user) => (
              <UserCard
                key={user.id}
                user={user}
                deleteUser={deleteUser}
                setEditingUser={setEditingUser}
              />
            ))}

          </div>
        )}

      </div>

    </div>
  );
}

export default App;