import React, { useMemo, useState } from "react";
// @ts-ignore
import Layout from "@theme/Layout";
// @ts-ignore
import Link from "@docusaurus/Link";

import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  BrainCircuit,
  CheckCircle2,
  ChevronRight,
  Code2,
  Flame,
  GitBranch,
  Layers3,
  Play,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  Trophy,
  Users,
  Zap,
} from "lucide-react";

// @ts-ignore
import styles from "./styles.module.css";

type Difficulty = "Beginner" | "Intermediate" | "Advanced";

type PracticeItem = {
  title: string;
  description: string;
  icon: React.ReactNode;
  count: string;
  difficulty: Difficulty;
  href: string;
  tags: string[];
};

type Category = {
  title: string;
  description: string;
  icon: React.ReactNode;
  count: string;
  href: string;
};

const DIFFICULTIES = [
  {
    name: "Beginner",
    description: "Build fundamentals and gain confidence.",
    count: "120+",
    icon: <Sparkles size={20} />,
    href: "#", // /practice/beginner/
  },
  {
    name: "Intermediate",
    description: "Strengthen problem-solving and coding skills.",
    count: "250+",
    icon: <Zap size={20} />,
    href: "#", // /practice/intermediate/
  },
  {
    name: "Advanced",
    description: "Solve complex, interview-level challenges.",
    count: "180+",
    icon: <BrainCircuit size={20} />,
    href: "#", // /practice/advanced/
  },
];

const CATEGORIES: Category[] = [
  {
    title: "Data Structures",
    description:
      "Practice arrays, strings, linked lists, stacks, queues, trees, graphs and more.",
    icon: <Layers3 size={24} />,
    count: "300+ Problems",
    href: "#", // /practice/data-structures/
  },
  {
    title: "Algorithms",
    description:
      "Master searching, sorting, recursion, greedy, dynamic programming and graph algorithms.",
    icon: <GitBranch size={24} />,
    count: "250+ Problems",
    href: "#", // /practice/algorithms/
  },
  {
    title: "JavaScript",
    description:
      "Improve JavaScript fundamentals, modern syntax, logic and problem-solving.",
    icon: <Code2 size={24} />,
    count: "150+ Problems",
    href: "#", // /practice/javascript/
  },
  {
    title: "Python",
    description:
      "Practice Python programming, logic building, data structures and algorithms.",
    icon: <Code2 size={24} />,
    count: "150+ Problems",
    href: "#", // /practice/python/
  },
  {
    title: "SQL",
    description:
      "Work with queries, joins, aggregation, subqueries and real-world database problems.",
    icon: <BookOpen size={24} />,
    count: "100+ Problems",
    href: "#", // /practice/sql/
  },
  {
    title: "Web Development",
    description:
      "Practice HTML, CSS, JavaScript and frontend development through practical challenges.",
    icon: <Target size={24} />,
    count: "120+ Challenges",
    href: "#", // /practice/web-development/
  },
];

const PRACTICE_ITEMS: PracticeItem[] = [
  {
    title: "Two Sum",
    description:
      "Find two numbers in an array that add up to a given target.",
    icon: <Code2 size={20} />,
    count: "Easy",
    difficulty: "Beginner",
    href: "#", // /practice/problems/two-sum/
    tags: ["Array", "Hash Map"],
  },
  {
    title: "Valid Parentheses",
    description:
      "Determine whether brackets in a string are correctly balanced.",
    icon: <Code2 size={20} />,
    count: "Easy",
    difficulty: "Beginner",
    href: "#", // /practice/problems/valid-parentheses/
    tags: ["Stack", "String"],
  },
  {
    title: "Binary Search",
    description:
      "Implement binary search efficiently on a sorted collection.",
    icon: <Code2 size={20} />,
    count: "Medium",
    difficulty: "Intermediate",
    href: "#", // /practice/problems/binary-search/
    tags: ["Searching", "Array"],
  },
  {
    title: "Longest Substring",
    description:
      "Find the longest substring without repeating characters.",
    icon: <Code2 size={20} />,
    count: "Medium",
    difficulty: "Intermediate",
    href: "#", // /practice/problems/longest-substring/
    tags: ["String", "Sliding Window"],
  },
  {
    title: "Merge Intervals",
    description:
      "Merge overlapping intervals into a minimal set of intervals.",
    icon: <Code2 size={20} />,
    count: "Medium",
    difficulty: "Intermediate",
    href: "#", // /practice/problems/merge-intervals/
    tags: ["Array", "Sorting"],
  },
  {
    title: "LRU Cache",
    description:
      "Design an efficient least-recently-used cache data structure.",
    icon: <Code2 size={20} />,
    count: "Hard",
    difficulty: "Advanced",
    href: "#", // /practice/problems/lru-cache/
    tags: ["Design", "Hash Map", "Linked List"],
  },
];

const STATS = [
  {
    value: "1,000+",
    label: "Practice Problems",
    icon: <Code2 size={18} />,
  },
  {
    value: "50+",
    label: "Topics",
    icon: <Layers3 size={18} />,
  },
  {
    value: "100+",
    label: "Challenges",
    icon: <Trophy size={18} />,
  },
  {
    value: "10K+",
    label: "Learners",
    icon: <Users size={18} />,
  },
];

function getDifficultyClass(difficulty: Difficulty) {
  switch (difficulty) {
    case "Beginner":
      return styles.beginner;

    case "Intermediate":
      return styles.intermediate;

    case "Advanced":
      return styles.advanced;

    default:
      return "";
  }
}

export default function PracticePage(): React.JSX.Element {
  const [search, setSearch] = useState("");
  const [difficulty, setDifficulty] = useState<"All" | Difficulty>("All");

  const filteredProblems = useMemo(() => {
    const query = search.trim().toLowerCase();

    return PRACTICE_ITEMS.filter((problem) => {
      const matchesDifficulty =
        difficulty === "All" || problem.difficulty === difficulty;

      const matchesSearch =
        !query ||
        problem.title.toLowerCase().includes(query) ||
        problem.description.toLowerCase().includes(query) ||
        problem.tags.some((tag) => tag.toLowerCase().includes(query));

      return matchesDifficulty && matchesSearch;
    });
  }, [search, difficulty]);

  return (
    <Layout
      title="Practice Coding & DSA Problems"
      description="Practice coding, DSA, algorithms, programming and technical interview problems with CodeHarborHub."
    >
      <main className={styles.page}>
        {/* =========================================================
            HERO
        ========================================================== */}
        <section className={styles.hero}>
          <div className={styles.heroGlow} />
          <div className={styles.heroGrid} />

          <div className={styles.container}>
            <div className={styles.heroContent}>
              <div className={styles.eyebrow}>
                <span className={styles.eyebrowIcon}>
                  <Code2 size={15} />
                </span>

                <span>Practice • Solve • Improve</span>

                <span className={styles.eyebrowDot} />
                <span>Free & Open Source</span>
              </div>

              <h1>
                Practice what you learn.
                <span> Build real coding skills.</span>
              </h1>

              <p className={styles.heroDescription}>
                Strengthen your programming skills with coding problems,
                DSA challenges, algorithms, interview questions and
                real-world practice — from beginner to advanced.
              </p>

              <div className={styles.heroActions}>
                <Link
                  className={styles.primaryButton}
                  to="#" // /practice/problems/
                >
                  <Play size={18} />
                  Start Practicing
                  <ArrowRight size={17} />
                </Link>

                <Link
                  className={styles.secondaryButton}
                  to="#" // /practice/daily/
                >
                  <Flame size={18} />
                  Daily Challenge
                </Link>
              </div>

              <div className={styles.heroTrust}>
                <CheckCircle2 size={16} />
                <span>No subscription required</span>

                <span className={styles.trustDivider} />

                <CheckCircle2 size={16} />
                <span>Learn at your own pace</span>

                <span className={styles.trustDivider} />

                <CheckCircle2 size={16} />
                <span>Open source</span>
              </div>
            </div>

            {/* Coding preview */}
            <div className={styles.codePreview}>
              <div className={styles.codeHeader}>
                <div className={styles.windowDots}>
                  <span />
                  <span />
                  <span />
                </div>

                <div className={styles.codeFile}>
                  <Code2 size={14} />
                  solution.js
                </div>

                <div className={styles.codeStatus}>
                  <span />
                  Accepted
                </div>
              </div>

              <div className={styles.codeBody}>
                <div className={styles.lineNumbers}>
                  {Array.from({ length: 13 }, (_, index) => (
                    <span key={index}>{index + 1}</span>
                  ))}
                </div>

                <pre>
                  <code>
                    <span className={styles.codePurple}>function</span>{" "}
                    <span className={styles.codeBlue}>twoSum</span>
                    <span className={styles.codeText}>(nums, target) {"{"}</span>
                    {"\n"}
                    {"  "}
                    <span className={styles.codePurple}>const</span>{" "}
                    <span className={styles.codeText}>map = </span>
                    <span className={styles.codePurple}>new</span>{" "}
                    <span className={styles.codeBlue}>Map</span>
                    <span className={styles.codeText}>();</span>
                    {"\n\n"}
                    {"  "}
                    <span className={styles.codePurple}>for</span>{" "}
                    <span className={styles.codeText}>(let i = 0; i {"<"} nums.length; i++) {"{"}</span>
                    {"\n"}
                    {"    "}
                    <span className={styles.codePurple}>const</span>{" "}
                    <span className={styles.codeText}>
                      complement = target - nums[i];
                    </span>
                    {"\n\n"}
                    {"    "}
                    <span className={styles.codePurple}>if</span>{" "}
                    <span className={styles.codeText}>
                      (map.has(complement)) {"{"}
                    </span>
                    {"\n"}
                    {"      "}
                    <span className={styles.codePurple}>return</span>{" "}
                    <span className={styles.codeText}>
                      [map.get(complement), i];
                    </span>
                    {"\n"}
                    {"    "}
                    <span className={styles.codeText}>{"}"}</span>
                    {"\n\n"}
                    {"    "}
                    <span className={styles.codeText}>
                      map.set(nums[i], i);
                    </span>
                    {"\n"}
                    {"  "}
                    <span className={styles.codeText}>{"}"}</span>
                    {"\n"}
                    <span className={styles.codeText}>{"}"}</span>
                  </code>
                </pre>
              </div>

              <div className={styles.codeFooter}>
                <div>
                  <span className={styles.successDot} />
                  Test cases passed
                </div>

                <span>Runtime: 52ms</span>
                <span>Memory: 44.2 MB</span>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            STATS
        ========================================================== */}
        <section className={styles.statsSection}>
          <div className={styles.container}>
            <div className={styles.statsGrid}>
              {STATS.map((stat) => (
                <div className={styles.statCard} key={stat.label}>
                  <div className={styles.statIcon}>{stat.icon}</div>

                  <div>
                    <strong>{stat.value}</strong>
                    <span>{stat.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            DAILY CHALLENGE
        ========================================================== */}
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.dailyCard}>
              <div className={styles.dailyPattern} />

              <div className={styles.dailyIcon}>
                <Flame size={28} />
              </div>

              <div className={styles.dailyContent}>
                <div className={styles.sectionEyebrow}>
                  DAILY CHALLENGE
                </div>

                <h2>Keep your coding streak alive.</h2>

                <p>
                  Solve one carefully selected problem every day.
                  Build consistency, improve your problem-solving skills,
                  and create a habit of coding.
                </p>

                <div className={styles.dailyMeta}>
                  <span>
                    <Target size={15} />
                    1 problem
                  </span>

                  <span>
                    <ClockIcon />
                    15–30 min
                  </span>

                  <span>
                    <Star size={15} />
                    +50 XP
                  </span>
                </div>
              </div>

              <Link
                className={styles.dailyButton}
                to="#" // /practice/daily/
              >
                Solve Today's Challenge
                <ArrowUpRight size={17} />
              </Link>
            </div>
          </div>
        </section>

        {/* =========================================================
            DIFFICULTY
        ========================================================== */}
        <section className={styles.section}>
          <div className={styles.container}>
            <SectionHeading
              eyebrow="CHOOSE YOUR LEVEL"
              title="Practice at your level."
              description="Start where you are and gradually move toward harder problems."
            />

            <div className={styles.difficultyGrid}>
              {DIFFICULTIES.map((item) => (
                <Link
                  to={item.href}
                  className={styles.difficultyCard}
                  key={item.name}
                >
                  <div className={styles.difficultyTop}>
                    <div className={styles.difficultyIcon}>
                      {item.icon}
                    </div>

                    <span className={styles.problemCount}>
                      {item.count}
                    </span>
                  </div>

                  <h3>{item.name}</h3>

                  <p>{item.description}</p>

                  <span className={styles.cardLink}>
                    Start practice
                    <ChevronRight size={16} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            CATEGORIES
        ========================================================== */}
        <section className={`${styles.section} ${styles.sectionMuted}`}>
          <div className={styles.container}>
            <SectionHeading
              eyebrow="PRACTICE TOPICS"
              title="Choose what you want to master."
              description="Focused practice tracks help you improve one skill at a time."
            />

            <div className={styles.categoryGrid}>
              {CATEGORIES.map((category) => (
                <Link
                  to={category.href}
                  className={styles.categoryCard}
                  key={category.title}
                >
                  <div className={styles.categoryIcon}>
                    {category.icon}
                  </div>

                  <div className={styles.categoryBody}>
                    <div className={styles.categoryTitleRow}>
                      <h3>{category.title}</h3>
                      <ArrowUpRight size={17} />
                    </div>

                    <p>{category.description}</p>

                    <span>{category.count}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            PROBLEM EXPLORER
        ========================================================== */}
        <section className={styles.section}>
          <div className={styles.container}>
            <SectionHeading
              eyebrow="PROBLEM LIBRARY"
              title="Find your next problem."
              description="Search by problem name, topic, or difficulty."
            />

            <div className={styles.explorer}>
              <div className={styles.searchBox}>
                <Search size={19} />
                <input
                  type="search"
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search problems, topics..."
                  aria-label="Search practice problems"
                />
              </div>

              <div className={styles.filters}>
                {(["All", "Beginner", "Intermediate", "Advanced"] as const).map(
                  (item) => (
                    <button
                      key={item}
                      type="button"
                      className={
                        difficulty === item
                          ? styles.filterActive
                          : styles.filter
                      }
                      onClick={() => setDifficulty(item)}
                    >
                      {item}
                    </button>
                  ),
                )}
              </div>
            </div>

            <div className={styles.problemGrid}>
              {filteredProblems.map((problem) => (
                <Link
                  to={problem.href}
                  className={styles.problemCard}
                  key={problem.title}
                >
                  <div className={styles.problemTop}>
                    <div className={styles.problemIcon}>
                      {problem.icon}
                    </div>

                    <span
                      className={`${styles.difficultyBadge} ${getDifficultyClass(
                        problem.difficulty,
                      )}`}
                    >
                      {problem.difficulty}
                    </span>
                  </div>

                  <h3>{problem.title}</h3>

                  <p>{problem.description}</p>

                  <div className={styles.problemTags}>
                    {problem.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>

                  <div className={styles.problemFooter}>
                    <span>{problem.count}</span>

                    <span>
                      Solve
                      <ArrowRight size={15} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            {filteredProblems.length === 0 && (
              <div className={styles.emptyState}>
                <Search size={26} />
                <h3>No problems found</h3>
                <p>
                  Try a different search term or select another difficulty.
                </p>
              </div>
            )}

            <div className={styles.centerAction}>
              <Link
                className={styles.outlineButton}
                to="#" // /practice/problems/
              >
                Explore All Problems
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </section>

        {/* =========================================================
            INTERVIEW PREP
        ========================================================== */}
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.interviewCard}>
              <div className={styles.interviewContent}>
                <div className={styles.sectionEyebrow}>
                  INTERVIEW PREPARATION
                </div>

                <h2>Practice like you're preparing for the real thing.</h2>

                <p>
                  Prepare for technical interviews with curated DSA,
                  JavaScript, frontend, backend, SQL and system-design
                  practice tracks.
                </p>

                <div className={styles.interviewFeatures}>
                  <div>
                    <CheckCircle2 size={17} />
                    Company-style questions
                  </div>

                  <div>
                    <CheckCircle2 size={17} />
                    Topic-wise preparation
                  </div>

                  <div>
                    <CheckCircle2 size={17} />
                    Difficulty progression
                  </div>

                  <div>
                    <CheckCircle2 size={17} />
                    Timed challenges
                  </div>
                </div>

                <Link
                  className={styles.primaryButton}
                  to="#" // /interview/
                >
                  Explore Interview Prep
                  <ArrowRight size={17} />
                </Link>
              </div>

              <div className={styles.interviewVisual}>
                <div className={styles.interviewScore}>
                  <div className={styles.scoreCircle}>
                    <strong>82%</strong>
                    <span>Ready</span>
                  </div>

                  <div className={styles.scoreDetails}>
                    <span>Interview readiness</span>

                    <div className={styles.progressTrack}>
                      <div className={styles.progressFill} />
                    </div>

                    <small>Keep practicing to reach 100%</small>
                  </div>
                </div>

                <div className={styles.skillList}>
                  <SkillProgress name="DSA" value="88%" width="88%" />
                  <SkillProgress name="JavaScript" value="76%" width="76%" />
                  <SkillProgress name="SQL" value="71%" width="71%" />
                  <SkillProgress name="Frontend" value="92%" width="92%" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            PRACTICE LOOP
        ========================================================== */}
        <section className={`${styles.section} ${styles.sectionMuted}`}>
          <div className={styles.container}>
            <SectionHeading
              eyebrow="HOW IT WORKS"
              title="A better way to build coding skills."
              description="Don't just solve problems. Understand them, improve, and apply what you learn."
            />

            <div className={styles.loopGrid}>
              <PracticeStep
                number="01"
                icon={<BookOpen size={22} />}
                title="Learn"
                description="Understand the concept, pattern, algorithm or data structure before solving."
              />

              <PracticeStep
                number="02"
                icon={<Code2 size={22} />}
                title="Practice"
                description="Solve progressively harder problems and strengthen your fundamentals."
              />

              <PracticeStep
                number="03"
                icon={<Target size={22} />}
                title="Review"
                description="Study your mistakes, compare approaches and improve your solution."
              />

              <PracticeStep
                number="04"
                icon={<Trophy size={22} />}
                title="Master"
                description="Build consistency, earn progress and move toward real-world projects."
              />
            </div>
          </div>
        </section>

        {/* =========================================================
            PROGRESS
        ========================================================== */}
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.progressCard}>
              <div className={styles.progressVisual}>
                <div className={styles.progressRing}>
                  <div>
                    <strong>68%</strong>
                    <span>Progress</span>
                  </div>
                </div>
              </div>

              <div className={styles.progressContent}>
                <div className={styles.sectionEyebrow}>
                  YOUR LEARNING JOURNEY
                </div>

                <h2>Turn practice into measurable progress.</h2>

                <p>
                  Later, connect this section to your CodeHarborHub account
                  so learners can track solved problems, streaks, XP,
                  achievements and topic mastery.
                </p>

                <div className={styles.progressStats}>
                  <div>
                    <strong>124</strong>
                    <span>Solved</span>
                  </div>

                  <div>
                    <strong>18</strong>
                    <span>Day streak</span>
                  </div>

                  <div>
                    <strong>2,840</strong>
                    <span>XP earned</span>
                  </div>
                </div>

                <Link
                  className={styles.outlineButton}
                  to="#" // /dashboard/
                >
                  View Your Progress
                  <ArrowRight size={17} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            COMMUNITY
        ========================================================== */}
        <section className={`${styles.section} ${styles.sectionMuted}`}>
          <div className={styles.container}>
            <div className={styles.communityCard}>
              <div className={styles.communityIcon}>
                <Users size={28} />
              </div>

              <div>
                <div className={styles.sectionEyebrow}>
                  COMMUNITY POWERED
                </div>

                <h2>Learn together. Solve together. Grow together.</h2>

                <p>
                  CodeHarborHub is built in the open. Contribute problems,
                  improve solutions, share knowledge and help other learners.
                </p>
              </div>

              <div className={styles.communityActions}>
                <Link
                  className={styles.primaryButton}
                  to="/community/"
                >
                  Join Community
                  <ArrowRight size={17} />
                </Link>

                <Link
                  className={styles.textButton}
                  href="https://github.com/CodeHarborHub"
                >
                  Contribute on GitHub
                  <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            FINAL CTA
        ========================================================== */}
        <section className={styles.finalCta}>
          <div className={styles.finalGlow} />
          <div className={styles.finalGrid} />

          <div className={styles.container}>
            <div className={styles.finalContent}>
              <div className={styles.finalIcon}>
                <ShieldCheck size={22} />
              </div>

              <div className={styles.sectionEyebrow}>
                YOUR NEXT SOLUTION STARTS HERE
              </div>

              <h2>
                Stop watching tutorials.
                <span> Start solving.</span>
              </h2>

              <p>
                Build stronger programming fundamentals through consistent
                practice, real problems and meaningful challenges.
              </p>

              <div className={styles.finalActions}>
                <Link
                  className={styles.primaryButton}
                  to="#" // /practice/problems/
                >
                  Start Practicing
                  <ArrowRight size={17} />
                </Link>

                <Link
                  className={styles.secondaryButton}
                  to="/roadmaps/"
                >
                  Explore Roadmaps
                  <ArrowUpRight size={17} />
                </Link>
              </div>

              <div className={styles.finalTrust}>
                <span>
                  <CheckCircle2 size={15} />
                  Free to learn
                </span>

                <span>
                  <CheckCircle2 size={15} />
                  Open source
                </span>

                <span>
                  <CheckCircle2 size={15} />
                  Community driven
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

/* ================================================================
   COMPONENTS
================================================================ */

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className={styles.sectionHeading}>
      <div className={styles.sectionEyebrow}>{eyebrow}</div>

      <h2>{title}</h2>

      <p>{description}</p>
    </div>
  );
}

function PracticeStep({
  number,
  icon,
  title,
  description,
}: {
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className={styles.loopCard}>
      <span className={styles.stepNumber}>{number}</span>

      <div className={styles.loopIcon}>{icon}</div>

      <h3>{title}</h3>

      <p>{description}</p>
    </div>
  );
}

function SkillProgress({
  name,
  value,
  width,
}: {
  name: string;
  value: string;
  width: string;
}) {
  return (
    <div className={styles.skill}>
      <div className={styles.skillHeader}>
        <span>{name}</span>
        <strong>{value}</strong>
      </div>

      <div className={styles.skillTrack}>
        <div
          className={styles.skillFill}
          style={{ width }}
        />
      </div>
    </div>
  );
}

function ClockIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}