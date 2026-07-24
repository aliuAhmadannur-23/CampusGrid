const FEATURES = [
  {
    title: "🤝 Communities",
    text: "Join student groups, clubs, and networks that match your interests.",
  },
  {
    title: "📡 Announcements",
    text: "Never miss important campus updates, news, or academic information.",
  },
  {
    title: "🚀 Opportunities",
    text: "Discover scholarships, internships, competitions, and job offers.",
  },
  {
    title: "🎯 Student Life Score",
    text: "Track your engagement, growth, and campus involvement over time.",
  },
  {
    title: "📅 Events",
    text: "Stay updated on seminars, workshops, campus activities, and programs.",
  },
  {
    title: "🌱 Personal Growth",
    text: "Build leadership skills, networks, and personal development goals.",
  },
];

function Features() {
  return (
    <section className="features" id="features">
      <div className="container">
        <div className="section-title">
          <span>PLATFORM FEATURES</span>
          <h2>Everything You Need for Campus Growth</h2>
          <p>
            Evergreen Campus Hub brings together all the tools students need
            to stay informed, connected, and successful.
          </p>
        </div>

        <div className="features-grid">
          {FEATURES.map((feature) => (
            <div className="feature-card" key={feature.title}>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
