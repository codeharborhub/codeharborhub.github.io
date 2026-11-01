import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  learningService,
  DEFAULT_LEARNING_STATE,
} from "@site/src/services/learningService";

import type {
  LearningBookmark,
  LearningState,
} from "@site/src/types/learning";

interface LearningContextValue {
  learning: LearningState;
  isReady: boolean;

  isBookmarked: (id: string) => boolean;
  toggleBookmark: (
    bookmark: Omit<LearningBookmark, "addedAt">,
  ) => void;
  removeBookmark: (id: string) => void;

  completeLesson: (
    id: string,
    title: string,
    courseId: string,
    courseTitle: string,
    xp?: number,
  ) => void;

  completeChallenge: (
    id: string,
    title: string,
    xp?: number,
  ) => void;

  setDailyGoal: (goal: number) => void;

  updateLastVisited: (
    title: string,
    url: string,
    courseTitle?: string,
  ) => void;

  resetLearningData: () => void;
}

const LearningContext = createContext<LearningContextValue | undefined>(
  undefined,
);

function getLocalDate() {
  const date = new Date();

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function getYesterday() {
  const date = new Date();
  date.setDate(date.getDate() - 1);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function calculateLevel(xp: number) {
  return Math.floor(xp / 100) + 1;
}

function createActivity(
  title: string,
  type: "lesson" | "challenge" | "bookmark",
) {
  return {
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    title,
    type,
    date: new Date().toISOString(),
  };
}

export function LearningProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [learning, setLearning] = useState<LearningState>(
    DEFAULT_LEARNING_STATE,
  );

  const [isReady, setIsReady] = useState(false);

  // Load stored learning data after the browser mounts.
  useEffect(() => {
    const saved = learningService.getState();
    const today = getLocalDate();

    const normalized: LearningState = {
      ...saved,
      dailyCompleted:
        saved.dailyGoalDate === today ? saved.dailyCompleted : 0,
      dailyGoalDate: today,
    };

    setLearning(normalized);
    setIsReady(true);
  }, []);

  // Persist all changes after initial hydration.
  useEffect(() => {
    if (isReady) {
      learningService.saveState(learning);
    }
  }, [learning, isReady]);

  const isBookmarked = useCallback(
    (id: string) => learning.bookmarks.some((item) => item.id === id),
    [learning.bookmarks],
  );

  const toggleBookmark = useCallback(
    (bookmark: Omit<LearningBookmark, "addedAt">) => {
      setLearning((previous) => {
        const exists = previous.bookmarks.some(
          (item) => item.id === bookmark.id,
        );

        if (exists) {
          return {
            ...previous,
            bookmarks: previous.bookmarks.filter(
              (item) => item.id !== bookmark.id,
            ),
          };
        }

        return {
          ...previous,
          bookmarks: [
            {
              ...bookmark,
              addedAt: new Date().toISOString(),
            },
            ...previous.bookmarks,
          ],
          activities: [
            createActivity(bookmark.title, "bookmark"),
            ...previous.activities,
          ].slice(0, 50),
        };
      });
    },
    [],
  );

  const removeBookmark = useCallback((id: string) => {
    setLearning((previous) => ({
      ...previous,
      bookmarks: previous.bookmarks.filter(
        (item) => item.id !== id,
      ),
    }));
  }, []);

  const completeLesson = useCallback(
    (
      id: string,
      title: string,
      courseId: string,
      courseTitle: string,
      xp = 20,
    ) => {
      setLearning((previous) => {
        // Prevent duplicate XP for the same lesson.
        if (
          previous.completedLessons.some((lesson) => lesson.id === id)
        ) {
          return previous;
        }

        const today = getLocalDate();
        const yesterday = getYesterday();

        const streak =
          previous.lastActiveDate === today
            ? previous.streak
            : previous.lastActiveDate === yesterday
              ? previous.streak + 1
              : 1;

        const dailyCompleted =
          previous.dailyGoalDate === today
            ? previous.dailyCompleted + 1
            : 1;

        const safeXP = Math.max(0, Math.floor(xp));

        const completedLesson = {
          id,
          title,
          courseId,
          courseTitle,
          completedAt: new Date().toISOString(),
          xpEarned: safeXP,
        };

        return {
          ...previous,
          completedLessons: [
            completedLesson,
            ...previous.completedLessons,
          ],
          xp: previous.xp + safeXP,
          level: calculateLevel(previous.xp + safeXP),
          streak,
          lastActiveDate: today,
          dailyCompleted,
          dailyGoalDate: today,
          activities: [
            createActivity(title, "lesson"),
            ...previous.activities,
          ].slice(0, 50),
        };
      });
    },
    [],
  );

  const completeChallenge = useCallback(
    (id: string, title: string, xp = 30) => {
      setLearning((previous) => {
        if (
          previous.completedChallenges.some(
            (challenge) => challenge.id === id,
          )
        ) {
          return previous;
        }

        const today = getLocalDate();
        const yesterday = getYesterday();

        const streak =
          previous.lastActiveDate === today
            ? previous.streak
            : previous.lastActiveDate === yesterday
              ? previous.streak + 1
              : 1;

        const safeXP = Math.max(0, Math.floor(xp));

        return {
          ...previous,
          completedChallenges: [
            {
              id,
              title,
              completedAt: new Date().toISOString(),
              xpEarned: safeXP,
            },
            ...previous.completedChallenges,
          ],
          xp: previous.xp + safeXP,
          level: calculateLevel(previous.xp + safeXP),
          streak,
          lastActiveDate: today,
          dailyGoalDate: today,
          dailyCompleted:
            previous.dailyGoalDate === today
              ? previous.dailyCompleted + 1
              : 1,
          activities: [
            createActivity(title, "challenge"),
            ...previous.activities,
          ].slice(0, 50),
        };
      });
    },
    [],
  );

  const setDailyGoal = useCallback((goal: number) => {
    setLearning((previous) => ({
      ...previous,
      dailyGoal: Math.max(1, Math.min(20, Math.floor(goal))),
    }));
  }, []);

  const updateLastVisited = useCallback(
    (title: string, url: string, courseTitle?: string) => {
      setLearning((previous) => ({
        ...previous,
        lastVisited: {
          title,
          url,
          courseTitle,
          visitedAt: new Date().toISOString(),
        },
      }));
    },
    [],
  );

  const resetLearningData = useCallback(() => {
    learningService.clearState();
    setLearning(DEFAULT_LEARNING_STATE);
  }, []);

  const value = useMemo(
    () => ({
      learning,
      isReady,
      isBookmarked,
      toggleBookmark,
      removeBookmark,
      completeLesson,
      completeChallenge,
      setDailyGoal,
      updateLastVisited,
      resetLearningData,
    }),
    [
      learning,
      isReady,
      isBookmarked,
      toggleBookmark,
      removeBookmark,
      completeLesson,
      completeChallenge,
      setDailyGoal,
      updateLastVisited,
      resetLearningData,
    ],
  );

  return (
    <LearningContext.Provider value={value}>
      {children}
    </LearningContext.Provider>
  );
}

export function useLearning() {
  const context = useContext(LearningContext);

  if (!context) {
    throw new Error("useLearning must be used inside <LearningProvider>");
  }

  return context;
}
