import { Link } from "react-router-dom";
import heroImage from "../assets/hero-image.png";

function Hero() {
  return (
    <section className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <span className="hero-badge">
            🌱 Empowering Students Across Campus
          </span>

          <h1>Connect. Discover. Grow.</h1>

          <p>
            Evergreen Campus Grid helps students discover opportunities,
            connect with campus communities, stay informed, and measure
            their engagement through the Student Life Score (SLS).
          </p>

          <div className="hero-buttons">
            <Link to="/identity" className="btn hero-btn">
              Take Student Life Score
            </Link>
            <a href="#pillars" className="btn hero-outline">
              Learn More
            </a>
          </div>
        </div>

        <div className="hero-image">
          <img src={heroImage} alt="Students collaborating" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
