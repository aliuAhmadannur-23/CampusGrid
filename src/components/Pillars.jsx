const PILLARS = [
  {
    title: "📡 Information Access",
    text: "Ensuring students never miss important announcements, updates, or opportunities.",
  },
  {
    title: "🤝 Campus Connection",
    text: "Helping students build meaningful relationships and strong campus networks.",
  },
  {
    title: "🚀 Opportunity Discovery",
    text: "Making scholarships, internships, and events easy to find and access.",
  },
  {
    title: "🌱 Personal Growth",
    text: "Supporting students in developing skills, leadership, and confidence.",
  },
  {
    title: "🏛 Community Engagement",
    text: "Encouraging active participation in campus groups and activities.",
  },
  {
    title: "🎓 Academic & Career Readiness",
    text: "Preparing students for real-world success beyond university life.",
  },
];

function Pillars() {
  return (
    <section className="pillars" id="pillars">
      <div className="container">
        <div className="section-title">
          <span>CORE PILLARS</span>
          <h2>What Evergreen Campus Hub Is Built On</h2>
          <p>
            These pillars define how we help students connect, grow, and
            discover opportunities within campus life.
          </p>
        </div>

        <div className="pillars-grid">
          {PILLARS.map((pillar) => (
            <div className="pillar-card" key={pillar.title}>
              <h3>{pillar.title}</h3>
              <p>{pillar.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pillars;
