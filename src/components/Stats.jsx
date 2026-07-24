import { useEffect, useRef, useState } from "react";

const STATS = [
  { icon: "fa-solid fa-user-graduate", target: 120, label: "Students Connected" },
  { icon: "fa-solid fa-users", target: 45, label: "Communities" },
  { icon: "fa-solid fa-calendar-check", target: 80, label: "Campus Events" },
  { icon: "fa-solid fa-briefcase", target: 150, label: "Opportunities Shared" },
];

function Counter({ target }) {
  const [value, setValue] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let current = 0;
    const increment = target / 100;

    const timer = setInterval(() => {
      current += increment;
      if (current < target) {
        setValue(Math.ceil(current));
      } else {
        setValue(target);
        setDone(true);
        clearInterval(timer);
      }
    }, 20);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <h2 className="counter">
      {value}
      {done ? "+" : ""}
    </h2>
  );
}

function Stats() {
  return (
    <section className="stats">
      <div className="container">
        <div className="stats-grid">
          {STATS.map((stat) => (
            <div className="stat-card" key={stat.label}>
              <i className={stat.icon}></i>
              <Counter target={stat.target} />
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;
