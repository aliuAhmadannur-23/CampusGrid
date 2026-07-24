import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useApp } from "../context/AppContext.jsx";

const LEVELS = ["100 Level", "200 Level", "300 Level", "400 Level", "500 Level", "Postgraduate"];

const INTERESTS = [
  "Academics",
  "Scholarships",
  "Entrepreneurship",
  "Technology",
  "Sports",
  "Leadership",
  "Volunteering",
  "Networking",
  "Career Opportunities",
  "Events & Social Activities",
];

const IDENTITY_STATEMENTS = [
  "I am new to campus and looking to connect.",
  "I am somewhat connected but want more opportunities.",
  "I actively participate in campus activities.",
  "I am a campus leader and community builder.",
  "I want to expand my network and influence.",
];

const EMPTY_FORM = {
  fullName: "",
  preferredName: "",
  gender: "",
  institution: "",
  faculty: "",
  department: "",
  level: "",
  email: "",
  phone: "",
  orgMember: "",
  orgName: "",
  leadership: "",
  leadershipRole: "",
  interests: [],
  identityStatement: "",
  pledgeRespect: false,
  pledgeUnderstand: false,
};

function IdentityPage() {
  const { setIdentity } = useApp();
  const navigate = useNavigate();
  const [form, setForm] = useState(EMPTY_FORM);
  const [error, setError] = useState("");

  const update = (field, value) => setForm((prev) => ({ ...prev, [field]: value }));

  const toggleInterest = (interest) => {
    setForm((prev) => {
      const has = prev.interests.includes(interest);
      return {
        ...prev,
        interests: has
          ? prev.interests.filter((i) => i !== interest)
          : [...prev.interests, interest],
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!form.fullName || !form.email || !form.level || !form.identityStatement) {
      setError("Please fill in your name, email, level, and identity statement to continue.");
      return;
    }
    if (!form.pledgeRespect || !form.pledgeUnderstand) {
      setError("Please agree to the community pledge to continue.");
      return;
    }

    setIdentity(form);
    navigate("/assessment");
  };

  return (
    <section className="form-page" id="identity">
      <div className="container form-container">
        <div className="section-title">
          <span>STUDENT IDENTITY PAGE</span>
          <h2>Tell Us About Yourself</h2>
          <p>
            This helps Evergreen Campus Hub personalize your Student Life Score
            results and recommendations.
          </p>
        </div>

        <form className="sls-form" onSubmit={handleSubmit}>
          <div className="form-section">
            <h3>Basic Information</h3>

            <div className="form-grid">
              <label className="form-field">
                Full Name *
                <input
                  type="text"
                  value={form.fullName}
                  onChange={(e) => update("fullName", e.target.value)}
                  required
                />
              </label>

              <label className="form-field">
                Preferred Name (Optional)
                <input
                  type="text"
                  value={form.preferredName}
                  onChange={(e) => update("preferredName", e.target.value)}
                />
              </label>

              <label className="form-field">
                Gender
                <select value={form.gender} onChange={(e) => update("gender", e.target.value)}>
                  <option value="">Select</option>
                  <option value="female">Female</option>
                  <option value="male">Male</option>
                  <option value="other">Other</option>
                  <option value="prefer-not-to-say">Prefer not to say</option>
                </select>
              </label>

              <label className="form-field">
                Institution
                <input
                  type="text"
                  value={form.institution}
                  onChange={(e) => update("institution", e.target.value)}
                />
              </label>

              <label className="form-field">
                Faculty / College
                <input
                  type="text"
                  value={form.faculty}
                  onChange={(e) => update("faculty", e.target.value)}
                />
              </label>

              <label className="form-field">
                Department
                <input
                  type="text"
                  value={form.department}
                  onChange={(e) => update("department", e.target.value)}
                />
              </label>

              <label className="form-field">
                Email Address *
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  required
                />
              </label>

              <label className="form-field">
                Phone Number (Optional)
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => update("phone", e.target.value)}
                />
              </label>
            </div>

            <fieldset className="form-field">
              <legend>Current Level *</legend>
              <div className="choice-grid">
                {LEVELS.map((level) => (
                  <label className="choice" key={level}>
                    <input
                      type="radio"
                      name="level"
                      value={level}
                      checked={form.level === level}
                      onChange={(e) => update("level", e.target.value)}
                    />
                    {level}
                  </label>
                ))}
              </div>
            </fieldset>
          </div>

          <div className="form-section">
            <h3>Campus Involvement</h3>

            <fieldset className="form-field">
              <legend>Are you currently a member of any student organization?</legend>
              <div className="choice-row">
                <label className="choice">
                  <input
                    type="radio"
                    name="orgMember"
                    value="yes"
                    checked={form.orgMember === "yes"}
                    onChange={(e) => update("orgMember", e.target.value)}
                  />
                  Yes
                </label>
                <label className="choice">
                  <input
                    type="radio"
                    name="orgMember"
                    value="no"
                    checked={form.orgMember === "no"}
                    onChange={(e) => update("orgMember", e.target.value)}
                  />
                  No
                </label>
              </div>
              {form.orgMember === "yes" && (
                <input
                  type="text"
                  className="form-followup"
                  placeholder="If yes, specify"
                  value={form.orgName}
                  onChange={(e) => update("orgName", e.target.value)}
                />
              )}
            </fieldset>

            <fieldset className="form-field">
              <legend>Do you currently hold any leadership position?</legend>
              <div className="choice-row">
                <label className="choice">
                  <input
                    type="radio"
                    name="leadership"
                    value="yes"
                    checked={form.leadership === "yes"}
                    onChange={(e) => update("leadership", e.target.value)}
                  />
                  Yes
                </label>
                <label className="choice">
                  <input
                    type="radio"
                    name="leadership"
                    value="no"
                    checked={form.leadership === "no"}
                    onChange={(e) => update("leadership", e.target.value)}
                  />
                  No
                </label>
              </div>
              {form.leadership === "yes" && (
                <input
                  type="text"
                  className="form-followup"
                  placeholder="If yes, specify"
                  value={form.leadershipRole}
                  onChange={(e) => update("leadershipRole", e.target.value)}
                />
              )}
            </fieldset>
          </div>

          <div className="form-section">
            <h3>Interests</h3>
            <div className="choice-grid">
              {INTERESTS.map((interest) => (
                <label className="choice" key={interest}>
                  <input
                    type="checkbox"
                    checked={form.interests.includes(interest)}
                    onChange={() => toggleInterest(interest)}
                  />
                  {interest}
                </label>
              ))}
            </div>
          </div>

          <div className="form-section">
            <h3>Identity Statement *</h3>
            <p className="form-hint">Choose one:</p>
            <div className="choice-column">
              {IDENTITY_STATEMENTS.map((statement) => (
                <label className="choice" key={statement}>
                  <input
                    type="radio"
                    name="identityStatement"
                    value={statement}
                    checked={form.identityStatement === statement}
                    onChange={(e) => update("identityStatement", e.target.value)}
                  />
                  {statement}
                </label>
              ))}
            </div>
          </div>

          <div className="form-section">
            <h3>Community Pledge *</h3>
            <div className="choice-column">
              <label className="choice">
                <input
                  type="checkbox"
                  checked={form.pledgeRespect}
                  onChange={(e) => update("pledgeRespect", e.target.checked)}
                />
                I agree to engage respectfully with other students.
              </label>
              <label className="choice">
                <input
                  type="checkbox"
                  checked={form.pledgeUnderstand}
                  onChange={(e) => update("pledgeUnderstand", e.target.checked)}
                />
                I understand that Evergreen Campus Hub exists to promote
                connection, growth, and opportunity.
              </label>
            </div>
          </div>

          {error && <p className="form-error">{error}</p>}

          <button type="submit" className="btn hero-btn form-submit">
            Continue to Assessment
          </button>
        </form>
      </div>
    </section>
  );
}

export default IdentityPage;
