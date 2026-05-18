const services = [
  "Car Sales",
  "Test Drive",
  "Car Financing",
  "Car Insurance",
  "Car Maintenance",
  "Car Accessories",
  "Extended Warranty",
  "Vehicle Exchange",
  "Roadside Assistance",
  "Customization",
  "Registration",
  "Doorstep Delivery"
];

export default function Services() {
  return (
    <div className="page">
      <h1>Our Services</h1>

      <div className="grid">
        {services.map((service, i) => (
          <div className={`card ${service === "Car Financing" ? "highlight" : ""}`} key={i}>
            <h3>{service}</h3>
            <p>High quality service for customers.</p>
          </div>
        ))}
      </div>
    </div>
  );
}