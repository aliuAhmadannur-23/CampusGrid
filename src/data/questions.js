// Student Life Score (SLS) question bank.
// 6 sections x 10 questions x 5 answer options.
// Each option is worth 10 / 8 / 6 / 4 / 2 points (best to weakest).

const POINTS = [10, 8, 6, 4, 2];

// Builds a standard 5-point option set from labels ordered best -> weakest.
function likert(labels) {
  return labels.map((text, i) => ({ text, points: POINTS[i] }));
}

const FREQUENCY = ["Always", "Often", "Sometimes", "Rarely", "Never"];
const CONFIDENCE = [
  "Extremely confident",
  "Confident",
  "Somewhat confident",
  "Not very confident",
  "Not confident at all",
];
const LEVEL = ["Very high", "High", "Moderate", "Low", "Very low"];

export const SECTIONS = [
  {
    id: "A",
    title: "Opportunity Awareness",
    icon: "🚀",
    description:
      "Scholarship awareness, internship awareness, opportunity discovery, career exposure, and readiness to seize opportunities.",
    questions: [
      {
        text: "How often do you come across scholarship opportunities relevant to you?",
        options: likert(FREQUENCY),
      },
      {
        text: "How aware are you of internship opportunities in your field?",
        options: likert(LEVEL),
      },
      {
        text: "How would you rate your ability to discover new opportunities on campus?",
        options: likert(LEVEL),
      },
      {
        text: "How exposed are you to potential career paths related to your course?",
        options: likert(LEVEL),
      },
      {
        text: "How prepared do you feel to act quickly when an opportunity arises?",
        options: likert(CONFIDENCE),
      },
      {
        text: "How often do you research opportunities outside your immediate department?",
        options: likert(FREQUENCY),
      },
      {
        text: "How confident are you in identifying opportunities that match your skills?",
        options: likert(CONFIDENCE),
      },
      {
        text: "How often do you apply for scholarships, grants, or competitions?",
        options: likert(FREQUENCY),
      },
      {
        text: "How connected are you to career fairs, expos, or recruitment events?",
        options: likert(LEVEL),
      },
      {
        text: "Overall, how would you rate your awareness of opportunities available to you as a student?",
        options: likert(LEVEL),
      },
    ],
  },
  {
    id: "B",
    title: "Campus Connection",
    icon: "🤝",
    description:
      "Campus relationships, student networks, social capital, access to peer support, and sense of belonging.",
    questions: [
      {
        text: "How would you describe the strength of your relationships with other students?",
        options: likert(LEVEL),
      },
      {
        text: "How large is your network of student contacts outside your close friend group?",
        options: likert(LEVEL),
      },
      {
        text: "How often can you rely on peers for academic or personal support?",
        options: likert(FREQUENCY),
      },
      {
        text: "How connected do you feel to student communities outside your department?",
        options: likert(LEVEL),
      },
      {
        text: "How often do you interact with students from other faculties or levels?",
        options: likert(FREQUENCY),
      },
      {
        text: "How would you rate your sense of belonging on campus?",
        options: likert(LEVEL),
      },
      {
        text: "How comfortable are you reaching out to someone new on campus?",
        options: likert(CONFIDENCE),
      },
      {
        text: "How often do you attend social gatherings or meetups with other students?",
        options: likert(FREQUENCY),
      },
      {
        text: "How well do you feel represented and included in campus social life?",
        options: likert(LEVEL),
      },
      {
        text: "Overall, how connected do you feel to the campus community?",
        options: likert(LEVEL),
      },
    ],
  },
  {
    id: "C",
    title: "Information Access",
    icon: "📡",
    description:
      "Information flow, campus awareness, announcement access, information reliability, and update frequency.",
    questions: [
      {
        text: "How quickly do important campus announcements typically reach you?",
        options: likert(["Immediately", "Quickly", "Eventually", "Slowly", "Rarely at all"]),
      },
      {
        text: "How aware are you of events and updates happening around campus?",
        options: likert(LEVEL),
      },
      {
        text: "How often do you check official or verified campus information channels?",
        options: likert(FREQUENCY),
      },
      {
        text: "How reliable do you find the campus information you typically receive?",
        options: likert(LEVEL),
      },
      {
        text: "How confident are you that you're not missing important updates?",
        options: likert(CONFIDENCE),
      },
      {
        text: "How often do you find out about events after they've already happened?",
        options: likert(["Never", "Rarely", "Sometimes", "Often", "Almost always"]),
      },
      {
        text: "How well-informed do you feel about opportunities specific to your department?",
        options: likert(LEVEL),
      },
      {
        text: "How often do you follow up on information you receive to confirm accuracy?",
        options: likert(FREQUENCY),
      },
      {
        text: "How easy is it for you to find information when you actively look for it?",
        options: likert(LEVEL),
      },
      {
        text: "Overall, how informed do you feel about campus life?",
        options: likert(LEVEL),
      },
    ],
  },
  {
    id: "D",
    title: "Community Participation",
    icon: "🏛",
    description:
      "Event participation, volunteerism, campus involvement, student engagement, and community contribution.",
    questions: [
      {
        text: "How often do you attend campus events, seminars, or workshops?",
        options: likert(FREQUENCY),
      },
      {
        text: "How often do you participate in volunteer or community-service activities?",
        options: likert(FREQUENCY),
      },
      {
        text: "How involved are you in student organizations or clubs?",
        options: likert(LEVEL),
      },
      {
        text: "How often do you take part in class or departmental activities beyond coursework?",
        options: likert(FREQUENCY),
      },
      {
        text: "How would you rate your overall level of campus involvement?",
        options: likert(LEVEL),
      },
      {
        text: "How often do you contribute ideas or effort to a group or community project?",
        options: likert(FREQUENCY),
      },
      {
        text: "How likely are you to attend a campus event you hear about with little notice?",
        options: likert(["Very likely", "Likely", "Somewhat likely", "Unlikely", "Very unlikely"]),
      },
      {
        text: "How engaged are you in causes or initiatives you care about on campus?",
        options: likert(LEVEL),
      },
      {
        text: "How often do you take initiative to organize or support a campus activity?",
        options: likert(FREQUENCY),
      },
      {
        text: "Overall, how would you rate your contribution to campus community life?",
        options: likert(LEVEL),
      },
    ],
  },
  {
    id: "E",
    title: "Networking & Personal Growth",
    icon: "🌱",
    description:
      "Relationship building, leadership growth, mentorship, professional networking, and personal development.",
    questions: [
      {
        text: "How actively do you work on building new professional relationships?",
        options: likert(FREQUENCY),
      },
      {
        text: "How would you rate your growth in leadership skills this year?",
        options: likert(LEVEL),
      },
      {
        text: "Do you currently have a mentor or someone guiding your development?",
        options: likert(["Yes, actively", "Yes, occasionally", "Somewhat", "Not really", "No"]),
      },
      {
        text: "How often do you network with professionals or alumni in your field?",
        options: likert(FREQUENCY),
      },
      {
        text: "How confident are you in your ability to build meaningful professional connections?",
        options: likert(CONFIDENCE),
      },
      {
        text: "How often do you set and review personal development goals?",
        options: likert(FREQUENCY),
      },
      {
        text: "How would you rate your growth in communication and interpersonal skills?",
        options: likert(LEVEL),
      },
      {
        text: "How often do you seek feedback to improve yourself?",
        options: likert(FREQUENCY),
      },
      {
        text: "How comfortable are you taking on a leadership role when needed?",
        options: likert(CONFIDENCE),
      },
      {
        text: "Overall, how would you rate your personal growth this academic year?",
        options: likert(LEVEL),
      },
    ],
  },
  {
    id: "F",
    title: "Academic & Career Readiness",
    icon: "🎓",
    description:
      "Goal clarity, career preparation, skill development, employability, and professional readiness.",
    questions: [
      {
        text: "How clear are you about your academic and career goals?",
        options: likert(LEVEL),
      },
      {
        text: "How prepared do you feel for life after graduation?",
        options: likert(CONFIDENCE),
      },
      {
        text: "How often do you work on developing skills relevant to your future career?",
        options: likert(FREQUENCY),
      },
      {
        text: "How would you rate your employability compared to your peers?",
        options: likert(LEVEL),
      },
      {
        text: "How often do you research the career paths or industries you're interested in?",
        options: likert(FREQUENCY),
      },
      {
        text: "How confident are you in your resume, portfolio, or professional profile?",
        options: likert(CONFIDENCE),
      },
      {
        text: "How often do you practice interview or workplace-relevant skills?",
        options: likert(FREQUENCY),
      },
      {
        text: "How well do your current activities align with your long-term goals?",
        options: likert(LEVEL),
      },
      {
        text: "How proactive are you about closing skill gaps you're aware of?",
        options: likert(LEVEL),
      },
      {
        text: "Overall, how ready do you feel for your next academic or career step?",
        options: likert(CONFIDENCE),
      },
    ],
  },
];

// Flat list of all 60 questions, each tagged with its section id.
export const ALL_QUESTIONS = SECTIONS.flatMap((section) =>
  section.questions.map((q, index) => ({
    ...q,
    id: `${section.id}${index + 1}`,
    sectionId: section.id,
  }))
);

export const TOTAL_QUESTIONS = ALL_QUESTIONS.length; // 60
export const MAX_SCORE = TOTAL_QUESTIONS * 10; // 600
