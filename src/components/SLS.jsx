import { Link } from "react-router-dom";

function SLS() {
  return (
    <section className="sls" id="sls">
      <div className="container">
        <div className="section-title">
          <span>STUDENT LIFE SCORE (SLS)</span>
          <h2>Measure Your Campus Engagement</h2>
          <p>
            The Student Life Score helps you understand how connected,
            informed, and involved you are in your university life.
          </p>
        </div>

        <div className="sls-content">
          <div className="sls-text">
            <h3>What It Is</h3>
            <p>
              The Student Life Score (SLS) evaluates your participation in
              campus life across multiple areas such as opportunities,
              networking, information access, and personal growth.
            </p>

            <h3>Why It Matters</h3>
            <ul>
              <li>📡 Discover how connected you are to campus opportunities</li>
              <li>🤝 Improve your student network</li>
              <li>🚀 Unlock hidden opportunities</li>
              <li>🌱 Track your personal growth</li>
            </ul>

            <Link to="/identity" className="btn sls-btn">
              Take Your SLS Assessment
            </Link>
          </div>

          <div className="sls-card">
            <h3>Your SLS Score</h3>
            <div className="score-circle">
              <span>75</span>
            </div>
            <p>Average Campus Engagement</p>
            <small>Based on 6 key categories of student life</small>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SLS;
