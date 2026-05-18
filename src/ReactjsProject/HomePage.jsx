import React, { useEffect, useState } from "react";

export default function HomePages() {
  const [foods, setFoods] = useState([]);


  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then((res) => res.json())
      .then((data) => setFoods(data.recipes))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container">

      <h2>Food Items</h2> 
      <div className="grid">
        {foods.map((item) => (
          <div className="card" key={item.id}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.cuisine}</p>
            <p>rating.. {item.rating}</p>
            <button className="btn">Order Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}

