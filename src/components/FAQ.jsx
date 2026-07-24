import { useState } from "react";

const FAQS = [
  {
    question: "What is Evergreen Campus Hub?",
    answer:
      "It is a student-centered platform designed to help students discover opportunities, connect with peers, and track their campus engagement using the Student Life Score (SLS).",
  },
  {
    question: "Is Evergreen Campus Hub free to use?",
    answer: "Yes, the platform is completely free for all students.",
  },
  {
    question: "What is the Student Life Score (SLS)?",
    answer:
      "It is a system that measures how connected, informed, and engaged a student is within campus life.",
  },
  {
    question: "Can I retake my SLS assessment?",
    answer:
      "Yes, students can retake the assessment to track their growth over time.",
  },
  {
    question: "Who can use Evergreen Campus Hub?",
    answer:
      "Any university or college student can join and benefit from the platform.",
  },
];

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="faq" id="faq">
      <div className="container">
        <div className="section-title">
          <span>FAQ</span>
          <h2>Frequently Asked Questions</h2>
          <p>Quick answers to common questions about Evergreen Campus Hub.</p>
        </div>

        <div className="faq-container">
          {FAQS.map((item, index) => (
            <div
              className={`faq-item${activeIndex === index ? " active" : ""}`}
              key={item.question}
            >
              <div className="faq-question" onClick={() => toggle(index)}>
                <h3>{item.question}</h3>
                <i className="fa-solid fa-chevron-down"></i>
              </div>

              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
