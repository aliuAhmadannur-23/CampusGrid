import { Navigate, Link, useNavigate } from "react-router-dom";
import { useApp } from "../context/AppContext.jsx";
import { SECTIONS } from "../data/questions.js";

function ResultsPage() {
  const { identity, isComplete, computeResult, resetAssessment } = useApp();
  const navigate = useNavigate();

  if (!identity) return <Navigate to="/identity" replace />;
  if (!isComplete) return <Navigate to="/assessment" replace />;

  const result = computeResult();
  const { tier } = result;
  const displayName = identity.preferredName || identity.fullName;

  return (
    <section className="form-page" id="results">
      <div className="container form-container">
        <div className="section-title">
          <span>YOUR RESULTS</span>
          <h2>Student Life Score</h2>
          <p>Here's how connected, informed, and engaged you are right now, {displayName}.</p>
        </div>

        <div className={`result-card tier-${tier.color}`}>
          <div className="result-score">
            <div className="score-circle result-score-circle">
              <span>{result.percentage}</span>
            </div>
            <p>{result.totalScore} / {result.maxScore} points</p>
          </div>

          <div className="result-tier">
            <span className="result-badge">{tier.badge}</span>
            <h3>{tier.label}</h3>
            <p>{tier.description}</p>
          </div>
        </div>

        <div className="form-section">
          <h3>Score Breakdown</h3>
          <div className="section-breakdown">
            {SECTIONS.map((section) => (
              <div className="breakdown-row" key={section.id}>
                <span className="breakdown-label">
                  {section.icon} {section.title}
                </span>
                <div className="breakdown-bar">
                  <div
                    className="breakdown-bar-fill"
                    style={{ width: `${result.sectionScores[section.id]}%` }}
                  />
                </div>
                <span className="breakdown-value">{result.sectionScores[section.id]}%</span>
              </div>
            ))}
          </div>
        </div>

        <div className="form-section">
          <h3>Personalized Recommendations</h3>
          <ul className="recommendation-list">
            {result.recommendations.map((rec) => (
              <li key={rec}>✅ {rec}</li>
            ))}
          </ul>
        </div>

        {result.missedOpportunityInsight && (
          <div className="form-section">
            <h3>Missed Opportunity Analysis</h3>
            <p className="insight-text">"{result.missedOpportunityInsight}"</p>
          </div>
        )}

        <div className="assessment-nav">
          <Link to="/" className="btn hero-outline">
            Back to Home
          </Link>
          <button
            type="button"
            className="btn hero-btn"
            onClick={() => {
              resetAssessment();
              navigate("/assessment");
            }}
          >
            Retake Assessment
          </button>
        </div>
      </div>
    </section>
  );
}

export default ResultsPage;
