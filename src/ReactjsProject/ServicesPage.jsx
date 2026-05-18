import React from "react";
import { useNavigate } from "react-router-dom";

export default function ServicesPage() {
  const navigate = useNavigate();

  return (
    <div className="ul">
      <h1 className="h1">Services.</h1>
      <ul>
        <li className="li" onClick={() => navigate("/")}>Home</li>
      </ul> 


            <div className="service-box">
        <h3 id="h3">Online Food Ordering</h3>
        <p>
          Browse hundreds of food items, view images, ratings, and place orders
          instantly from your favorite restaurants.
        </p>
      
        <h3 id="h3">Fast Delivery</h3>
        <p>
          We ensure quick and safe delivery of your food with real-time tracking
          and updates.
        </p>

        <h3 id="h3">Ratings & Reviews</h3>
        <p>
          Check ratings and reviews before ordering to make the best choice.
        </p>
       
        <h3 id="h3">Mobile Friendly</h3>
        <p>
          Fully responsive design for mobile, tablet, and desktop users.
        </p>
      </div>
    </div>
    
  );
}