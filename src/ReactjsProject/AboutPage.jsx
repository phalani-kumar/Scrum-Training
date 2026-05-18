import React from 'react'
import { useNavigate } from "react-router-dom";
  
export default function AboutPage() {
  const navigate = useNavigate();

  return (
    <div>
      <h1 className='h1'>About.</h1>
      <ul>
        <li className="li" onClick={() => navigate("/")}>Home</li>
      </ul>

         <div className="service-box">
      <p>
        Welcome to our FOoD CRAvINGS Food App. We are passionate about bringing
        delicious meals from the best restaurants directly to your doorstep.
      </p>

      <h3 id="h3">What We Offer</h3>
    
        <p>Wide variety of cuisines (Indian, Chinese, Italian, Fast Food)</p>
        <p>High-quality food images and details</p>
        <p>Easy online ordering system</p>
        <p>Fast and reliable delivery service</p>
      
      <h3 id="h3">Our Mission</h3>
      <p>
        Our mission is to make food ordering simple, fast, and enjoyable for
        everyone. Whether you crave pizza, biryani, or burgers, we bring the
        best options to your screen.
      </p>

      <h3 id="h3">Why Choose Us?</h3>
            <p>Fresh and hygienic food</p>
        <p>Top-rated restaurants</p>
        <p>User-friendly interface</p>
        <p>Affordable pricing</p>
            </div>


    </div>
  )
}