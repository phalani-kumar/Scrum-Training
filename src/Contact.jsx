const team = [
  { name: "Jaswanth", role: "Sales Manager", location: "Andhra Pradesh" },
  { name: "Sujith", role: "Sales Manager", location: "Hyderabad" },
  { name: "Naveen", role: "Sales Manager", location: "Bangalore" },
  { name: "Charan", role: "Sales Manager", location: "Chennai" },
  { name: "Rahul", role: "Sales Manager", location: "Mumbai" },
  { name: "Chetan", role: "Sales Manager", location: "Vizag" }
];

export default function Contact() {
  return (
    <div className="page">
      <h1>Contact Us</h1>

      <div className="grid">
        {team.map((member, i) => (
          <div className={`card ${i === 0 ? "highlight-green" : ""}`} key={i}>
            <h3>{member.name}</h3>
            <p>Role: {member.role}</p>
            <p>Location: {member.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
}