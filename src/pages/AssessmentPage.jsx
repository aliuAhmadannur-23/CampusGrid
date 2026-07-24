import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { SECTIONS, ALL_QUESTIONS } from "../data/questions.js";
import { useApp } from "../context/AppContext.jsx";

const MISSED_OPTIONS = [
  { value: "none", label: "None" },
  { value: "1-2", label: "1–2" },
  { value: "3-5", label: "3–5" },
  { value: "5+", label: "More than 5" },
];

function AssessmentPage() {
  const { identity, answers, setAnswer, missedOpportunity, setMissedOpportunity } = useApp();
  const navigate = useNavigate();

  // step: 0..5 = SECTIONS index, 6 = missed-opportunity question
  const [step, setStep] = useState(0);
  const [stepError, setStepError] = useState("");

  if (!identity) {
    return <Navigate to="/identity" replace />;
  }

  const totalSteps = SECTIONS.length + 1;
  const isSectionStep = step < SECTIONS.length;
  const currentSection = isSectionStep ? SECTIONS[step] : null;
  const sectionQuestions = currentSection
    ? ALL_QUESTIONS.filter((q) => q.sectionId === currentSection.id)
    : [];

  const answeredCount = Object.keys(answers).length;
  const progressPct = Math.round((answeredCount / ALL_QUESTIONS.length) * 100);

  const sectionComplete =
    isSectionStep && sectionQuestions.every((q) => answers[q.id] !== undefined);

  const goNext = () => {
    if (isSectionStep && !sectionComplete) {
      setStepError("Please answer every question in this section before continuing.");
      return;
    }
    if (!isSectionStep && !missedOpportunity) {
      setStepError("Please select an option to continue.");
      return;
    }
    setStepError("");

    if (step < totalSteps - 1) {
      setStep(step + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/results");
    }
  };

  const goBack = () => {
    setStepError("");
    if (step > 0) {
      setStep(step - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <section className="form-page" id="assessment">
      <div className="container form-container">
        <div className="section-title">
          <span>STUDENT LIFE SCORE ASSESSMENT</span>
          <h2>
            {isSectionStep
              ? `Section ${currentSection.id} — ${currentSection.title}`
              : "One Last Question"}
          </h2>
          <p>
            {isSectionStep
              ? currentSection.description
              : "This semester, approximately how many opportunities have you missed?"}
          </p>
        </div>

        <div className="progress-bar">
          <div className="progress-bar-fill" style={{ width: `${progressPct}%` }} />
        </div>
        <p className="progress-label">
          {answeredCount} / {ALL_QUESTIONS.length} questions answered
        </p>

        {isSectionStep ? (
          <div className="assessment-questions">
            {sectionQuestions.map((q, index) => (
              <fieldset className="form-field question-card" key={q.id}>
                <legend>
                  {index + 1}. {q.text}
                </legend>
                <div className="choice-column">
                  {q.options.map((option) => (
                    <label className="choice" key={option.text}>
                      <input
                        type="radio"
                        name={q.id}
                        checked={answers[q.id] === option.points}
                        onChange={() => setAnswer(q.id, option.points)}
                      />
                      {option.text}
                    </label>
                  ))}
                </div>
              </fieldset>
            ))}
          </div>
        ) : (
          <fieldset className="form-field question-card">
            <legend>
              This semester, approximately how many opportunities have you missed?
            </legend>
            <div className="choice-column">
              {MISSED_OPTIONS.map((opt) => (
                <label className="choice" key={opt.value}>
                  <input
                    type="radio"
                    name="missedOpportunity"
                    checked={missedOpportunity === opt.value}
                    onChange={() => setMissedOpportunity(opt.value)}
                  />
                  {opt.label}
                </label>
              ))}
            </div>
          </fieldset>
        )}

        {stepError && <p className="form-error">{stepError}</p>}

        <div className="assessment-nav">
          <button
            type="button"
            className="btn hero-outline"
            onClick={goBack}
            disabled={step === 0}
          >
            Back
          </button>
          <button type="button" className="btn hero-btn" onClick={goNext}>
            {step < totalSteps - 1 ? "Next Section" : "See My Results"}
          </button>
        </div>
      </div>
    </section>
  );
}

export default AssessmentPage;
