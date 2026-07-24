// Result tiers for the Student Life Score (SLS), 0-100 percentage scale.
export const TIERS = [
  {
    min: 90,
    max: 100,
    color: "green",
    label: "Campus Legend",
    badge: "👑",
    badgeLabel: "Campus Legend",
    description:
      "Exceptional engagement, influence, awareness, and campus participation.",
  },
  {
    min: 80,
    max: 89,
    color: "green",
    label: "Campus Insider",
    badge: "🏆",
    badgeLabel: "Campus Insider",
    description: "Highly connected and consistently informed.",
  },
  {
    min: 70,
    max: 79,
    color: "green",
    label: "Connected Leader",
    badge: "⭐",
    badgeLabel: "Connected Leader",
    description: "Strong campus presence and growing influence.",
  },
  {
    min: 60,
    max: 69,
    color: "yellow",
    label: "Opportunity Explorer",
    badge: "🎯",
    badgeLabel: "Opportunity Explorer",
    description: "Actively discovering opportunities and expanding networks.",
  },
  {
    min: 50,
    max: 59,
    color: "yellow",
    label: "Active Participant",
    badge: "🌱",
    badgeLabel: "Rising Connector",
    description: "Moderately engaged with room for growth.",
  },
  {
    min: 40,
    max: 49,
    color: "orange",
    label: "Emerging Explorer",
    badge: "🚀",
    badgeLabel: "Opportunity Hunter",
    description: "Beginning to build meaningful campus connections.",
  },
  {
    min: 30,
    max: 39,
    color: "orange",
    label: "Campus Observer",
    badge: "📡",
    badgeLabel: "Information Navigator",
    description: "Present on campus but not fully engaged.",
  },
  {
    min: 0,
    max: 29,
    color: "red",
    label: "Disconnected Student",
    badge: "🤝",
    badgeLabel: "Community Builder (in progress)",
    description: "Limited access to information, opportunities, and networks.",
  },
];

export function getTier(percentage) {
  return (
    TIERS.find((tier) => percentage >= tier.min && percentage <= tier.max) ||
    TIERS[TIERS.length - 1]
  );
}

// Section-specific recommendation copy, used when a section's average score
// falls in the lower half of its range.
const SECTION_RECOMMENDATIONS = {
  A: "Explore internship opportunities related to your course.",
  B: "Join at least one student community to expand your network.",
  C: "Follow verified campus information channels so you don't miss updates.",
  D: "Attend one campus event or activity this month.",
  E: "Expand your network beyond your department and seek a mentor.",
  F: "Spend time building skills or experience relevant to your career goals.",
};

const DEFAULT_RECOMMENDATIONS = [
  "Join at least one student community.",
  "Expand your network beyond your department.",
  "Attend one campus event this month.",
  "Follow verified campus information channels.",
  "Explore internship opportunities related to your course.",
];

// sectionScores: { A: percentage, B: percentage, ... }
export function getRecommendations(sectionScores) {
  const entries = Object.entries(sectionScores).sort((a, b) => a[1] - b[1]);
  const weakest = entries.slice(0, 5).map(([id]) => SECTION_RECOMMENDATIONS[id]);
  const recs = weakest.length ? weakest : DEFAULT_RECOMMENDATIONS;
  return recs.slice(0, 5);
}

export function getMissedOpportunityInsight(answer) {
  switch (answer) {
    case "none":
      return "You're staying on top of opportunities well — keep tracking new ones as they come up.";
    case "1-2":
      return "A couple of opportunities may have slipped by. Tightening your information sources could help close that gap.";
    case "3-5":
      return "Based on your responses, delayed information and limited campus connections may have contributed to missed opportunities this semester.";
    case "5+":
      return "Several opportunities may have been missed this semester. Strengthening your information access and campus network is likely to make the biggest difference.";
    default:
      return "";
  }
}
