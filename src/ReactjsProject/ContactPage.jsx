import React from "react";
import { useNavigate } from "react-router-dom";
 
export default function ContactPage() {
 const navigate = useNavigate();


  return (
    <div>
      <h1 className="h1">Contact.</h1>
      <ul>
        <li className="li" onClick={() => navigate("/")}>Home</li>
      </ul> 

   <div  className="service-box">
    <p>
        Have questions about your order or want to give feedback? We'd love to
        hear from you!
      </p>

      <h3 id="h3">Address</h3>
      <p>Food Street, RJY, India</p>

      <h3 id="h3">Phone Number</h3>
      <p>+91 93460500</p>

      <h3> id="h3"Email</h3>
      <p>support@FOoD CRAvINGS.com</p>

      <h3 id="h3">Working Hours</h3>
      <p>Monday - Sunday: 9:00 AM - 11:00 PM</p>

      <h3 id="h3">Feedback</h3>
      <p>
        Your feedback helps us improve our services and provide better food
        experiences.
      </p>

      {/*form*/}
      <form className="contact-form">
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Your Message"></textarea>
        <button type="submit"     onClick={() => navigate("/")} >Send Message</button>
      </form>
    </div>

    </div>
  );
}