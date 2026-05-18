const cars = [
  { name: "Mitsubishi Montero", price: "$2814.46", img: "https://source.unsplash.com/300x200/?car" },
  { name: "Volkswagen Passat", price: "$1731.98", img: "https://source.unsplash.com/300x200/?car,audi" },
  { name: "Saturn L-Series", price: "$2238.35", img: "https://source.unsplash.com/300x200/?sports-car" },
  { name: "Jeep Compass", price: "$2732.99", img: "https://source.unsplash.com/300x200/?jeep" },
];

export default function Cars() {
  return (
    <div className="page">
      <h1>Car Showroom</h1>

      <div className="grid">
        {cars.map((car, i) => (
          <div className="card" key={i}>
            <img src={car.img} alt="" />
            <h3>{car.name}</h3>
            <p className="price">Price: {car.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}