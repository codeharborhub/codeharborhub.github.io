// @ts-ignore
import type { LearningState } from "@site/src/types/learning";

const STORAGE_KEY = "chh_learning_v1";

export const DEFAULT_LEARNING_STATE: LearningState = {
  bookmarks: [],
  completedLessons: [],
  completedChallenges: [],
  activities: [],
  xp: 0,
  level: 1,
  streak: 0,
  lastActiveDate: null,
  dailyGoal: 3,
  dailyCompleted: 0,
  dailyGoalDate: new Date().toLocaleDateString("en-CA"),
  lastVisited: null,
};

function isBrowser() {
  return typeof window !== "undefined";
}

export const learningService = {
  getState(): LearningState {
    if (!isBrowser()) return DEFAULT_LEARNING_STATE;

    try {
      const raw = localStorage.getItem(STORAGE_KEY);

      if (!raw) return DEFAULT_LEARNING_STATE;

      const parsed = JSON.parse(raw) as Partial<LearningState>;

      return {
        ...DEFAULT_LEARNING_STATE,
        ...parsed,
        bookmarks: Array.isArray(parsed.bookmarks)
          ? parsed.bookmarks
          : [],
        completedLessons: Array.isArray(parsed.completedLessons)
          ? parsed.completedLessons
          : [],
        completedChallenges: Array.isArray(parsed.completedChallenges)
          ? parsed.completedChallenges
          : [],
        activities: Array.isArray(parsed.activities)
          ? parsed.activities
          : [],
      };
    } catch {
      return DEFAULT_LEARNING_STATE;
    }
  },

  saveState(state: LearningState) {
    if (!isBrowser()) return;

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (error) {
      console.error("Could not save learning data:", error);
    }
  },

  clearState() {
    if (!isBrowser()) return;
    localStorage.removeItem(STORAGE_KEY);
  },
};
