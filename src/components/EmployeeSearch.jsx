function EmployeeSearch({
  search,
  setSearch
}) {

  return (
    <input
      type="text"
      placeholder="Search Employee..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="search-box"
    />
  );
}

export default EmployeeSearch;