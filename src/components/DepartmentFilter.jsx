function DepartmentFilter({ department, setDepartment }) {

  return (
    <select
      value={department}
      onChange={(e) => setDepartment(e.target.value)}
      className="filter"
    >

      <option value="All">All Departments</option>

      <option value="Developer">Developer</option>

      <option value="Designer">Designer</option>

      <option value="Manager">Manager</option>

    </select>
  );
}

export default DepartmentFilter;