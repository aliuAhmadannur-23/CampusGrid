import { createContext, useContext, useEffect, useState } from "react";
import { ALL_QUESTIONS, MAX_SCORE, SECTIONS } from "../data/questions.js";
import { getTier, getRecommendations, getMissedOpportunityInsight } from "../data/results.js";

const STORAGE_KEY = "campus-grid-sls-state";

const AppContext = createContext(null);

function loadInitialState() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch {
    // ignore malformed/unavailable storage
  }
  return { identity: null, answers: {}, missedOpportunity: null };
}

export function AppProvider({ children }) {
  const [state, setState] = useState(loadInitialState);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      // storage unavailable — state still works in-memory for this session
    }
  }, [state]);

  const setIdentity = (identity) => setState((prev) => ({ ...prev, identity }));

  const setAnswer = (questionId, points) =>
    setState((prev) => ({
      ...prev,
      answers: { ...prev.answers, [questionId]: points },
    }));

  const setMissedOpportunity = (value) =>
    setState((prev) => ({ ...prev, missedOpportunity: value }));

  const resetAssessment = () =>
    setState((prev) => ({ ...prev, answers: {}, missedOpportunity: null }));

  const resetAll = () => setState({ identity: null, answers: {}, missedOpportunity: null });

  const isComplete = ALL_QUESTIONS.every((q) => state.answers[q.id] !== undefined);

  function computeResult() {
    const totalScore = ALL_QUESTIONS.reduce(
      (sum, q) => sum + (state.answers[q.id] || 0),
      0
    );
    const percentage = Math.round((totalScore / MAX_SCORE) * 100);

    const sectionScores = {};
    SECTIONS.forEach((section) => {
      const sectionQuestions = ALL_QUESTIONS.filter((q) => q.sectionId === section.id);
      const sectionMax = sectionQuestions.length * 10;
      const sectionTotal = sectionQuestions.reduce(
        (sum, q) => sum + (state.answers[q.id] || 0),
        0
      );
      sectionScores[section.id] = Math.round((sectionTotal / sectionMax) * 100);
    });

    const tier = getTier(percentage);
    const recommendations = getRecommendations(sectionScores);
    const missedOpportunityInsight = getMissedOpportunityInsight(state.missedOpportunity);

    return {
      totalScore,
      maxScore: MAX_SCORE,
      percentage,
      sectionScores,
      tier,
      recommendations,
      missedOpportunityInsight,
    };
  }

  const value = {
    identity: state.identity,
    answers: state.answers,
    missedOpportunity: state.missedOpportunity,
    isComplete,
    setIdentity,
    setAnswer,
    setMissedOpportunity,
    resetAssessment,
    resetAll,
    computeResult,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used within an AppProvider");
  return ctx;
}
