import { Link } from "react-router-dom";

function CTA() {
  return (
    <section className="cta" id="cta">
      <div className="container">
        <div className="cta-box">
          <h2>Ready to Transform Your Campus Experience?</h2>
          <p>
            Join Evergreen Campus Hub today and discover opportunities,
            connect with students, and measure your growth with the Student
            Life Score.
          </p>

          <div className="cta-buttons">
            <Link to="/identity" className="btn primary-btn">
              Get Started
            </Link>
            <Link to="/identity" className="btn secondary-btn">
              Take SLS Assessment
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;
