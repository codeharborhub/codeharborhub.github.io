
export type BookmarkType =
  | "tutorial"
  | "lesson"
  | "roadmap"
  | "challenge"
  | "resource";

export interface LearningBookmark {
  id: string;
  title: string;
  url: string;
  type: BookmarkType;
  description?: string;
  addedAt: string;
}

export interface CompletedLesson {
  id: string;
  title: string;
  courseId: string;
  courseTitle: string;
  completedAt: string;
  xpEarned: number;
}

export interface CompletedChallenge {
  id: string;
  title: string;
  completedAt: string;
  xpEarned: number;
}

export interface LearningActivity {
  id: string;
  title: string;
  type: "lesson" | "challenge" | "bookmark";
  date: string;
}

export interface LearningState {
  bookmarks: LearningBookmark[];
  completedLessons: CompletedLesson[];
  completedChallenges: CompletedChallenge[];
  activities: LearningActivity[];
  xp: number;
  level: number;
  streak: number;
  lastActiveDate: string | null;
  dailyGoal: number;
  dailyCompleted: number;
  dailyGoalDate: string;
  lastVisited: {
    title: string;
    url: string;
    courseTitle?: string;
    visitedAt: string;
  } | null;
}
