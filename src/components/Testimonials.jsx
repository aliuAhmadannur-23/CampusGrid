const TESTIMONIALS = [
  {
    quote:
      "Evergreen Campus Hub helped me discover opportunities I never knew existed on campus. The Student Life Score is a game changer.",
    name: "— Aisha M.",
    role: "Computer Science Student",
  },
  {
    quote:
      "I used to miss a lot of events and updates. Now I feel more connected and involved in campus life.",
    name: "— David K.",
    role: "Business Administration Student",
  },
  {
    quote:
      "The platform makes it easy to connect with other students and find internships and scholarships.",
    name: "— Sarah L.",
    role: "Engineering Student",
  },
];

function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <div className="section-title">
          <span>TESTIMONIALS</span>
          <h2>What Students Are Saying</h2>
          <p>
            Hear from students who are engaging with Evergreen Campus Hub and
            improving their campus experience.
          </p>
        </div>

        <div className="testimonials-grid">
          {TESTIMONIALS.map((t) => (
            <div className="testimonial-card" key={t.name}>
              <p>"{t.quote}"</p>
              <h4>{t.name}</h4>
              <span>{t.role}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
