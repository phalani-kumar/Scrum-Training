export default function Home() {
  return (
    <div className="home">
      <div className="hero">
        <h1>Welcome to Jaswanth Car Showroom</h1>
        <p>Your destination for luxury and performance cars.</p>
        <button className="btn">Explore Cars</button>
      </div>

      <h2 className="section-title">Featured Cars</h2>

      <div className="featured">
        <div>BMW M4 <br /> ₹1.20 Cr</div>
        <div>Tesla Model S <br /> ₹1.50 Cr</div>
        <div>Audi R8 <br /> ₹2.30 Cr</div>
      </div>
    </div>
  );
}