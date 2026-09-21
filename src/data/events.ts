export type EventStatus = "upcoming" | "live" | "completed";

export type EventCategory =
  | "Open Source"
  | "Workshop"
  | "Hackathon"
  | "Challenge"
  | "Community"
  | "Webinar";

export type EventMode = "Online" | "Offline" | "Hybrid";

export interface EventItem {
  id: string;
  title: string;
  description: string;
  category: EventCategory;
  status: EventStatus;
  mode: EventMode;
  date: string;
  dateLabel: string;
  time?: string;
  duration?: string;
  location?: string;
  organizer: string;
  href: string;
  tags: string[];
  featured?: boolean;
}

export interface OpenSourceProgram {
  id: string;
  year: string;
  name: string;
  type: string;
  description: string;
  status: "Participated" | "Ongoing" | "Community";
  href: string;
  tags: string[];
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
  type: "milestone" | "program" | "community";
}

export const events: EventItem[] = [
  {
    id: "open-source-community",
    title: "CodeHarborHub Open Source Community",
    description:
      "Explore contribution opportunities, issues, projects, documentation, and ways to collaborate with the CodeHarborHub community.",
    category: "Open Source",
    status: "upcoming",
    mode: "Online",
    date: "2026-10-01",
    dateLabel: "Ongoing",
    organizer: "CodeHarborHub",
    href: "https://github.com/CodeHarborHub",
    tags: ["Open Source", "GitHub", "Contributing"],
    featured: true,
  },
  {
    id: "open-source-session",
    title: "Open Source Contribution Session",
    description:
      "A practical community session covering Git, GitHub, issues, branches, pull requests, code review, and contributor workflows.",
    category: "Workshop",
    status: "upcoming",
    mode: "Online",
    date: "2026-10-10",
    dateLabel: "October 10, 2026",
    time: "6:00 PM IST",
    duration: "90 minutes",
    organizer: "CodeHarborHub",
    href: "https://github.com/CodeHarborHub",
    tags: ["Git", "GitHub", "Open Source"],
  },
  {
    id: "developer-workshop",
    title: "Modern Web Development Workshop",
    description:
      "Build a practical understanding of modern frontend development with HTML, CSS, JavaScript, React, TypeScript, and Git.",
    category: "Workshop",
    status: "upcoming",
    mode: "Online",
    date: "2026-10-17",
    dateLabel: "October 17, 2026",
    time: "6:00 PM IST",
    duration: "2 hours",
    organizer: "CodeHarborHub",
    href: "/tutorials/",
    tags: ["Frontend", "React", "TypeScript"],
  },
  {
    id: "coding-challenge",
    title: "CodeHarborHub Coding Challenge",
    description:
      "Practice problem solving with programming challenges covering algorithms, data structures, and practical coding patterns.",
    category: "Challenge",
    status: "upcoming",
    mode: "Online",
    date: "2026-10-24",
    dateLabel: "October 24, 2026",
    duration: "24 hours",
    organizer: "CodeHarborHub",
    href: "https://github.com/CodeHarborHub",
    tags: ["DSA", "Programming", "Problem Solving"],
  },
  {
    id: "community-meetup",
    title: "Developer Community Meetup",
    description:
      "Connect with developers, learners, contributors, and open-source enthusiasts to share ideas and projects.",
    category: "Community",
    status: "upcoming",
    mode: "Hybrid",
    date: "2026-11-07",
    dateLabel: "November 7, 2026",
    time: "5:00 PM IST",
    organizer: "CodeHarborHub",
    href: "/contact/",
    tags: ["Community", "Networking", "Developers"],
  },
  {
    id: "ai-session",
    title: "AI Engineering Community Session",
    description:
      "Explore practical AI engineering concepts, developer tooling, APIs, automation, and building AI-powered applications.",
    category: "Webinar",
    status: "upcoming",
    mode: "Online",
    date: "2026-11-21",
    dateLabel: "November 21, 2026",
    time: "6:00 PM IST",
    duration: "90 minutes",
    organizer: "CodeHarborHub",
    href: "/tutorials/",
    tags: ["AI", "Machine Learning", "Developer Tools"],
  },
];

export const openSourcePrograms: OpenSourceProgram[] = [
  {
    id: "gssoc-2024",
    year: "2024",
    name: "GirlScript Summer of Code",
    type: "GSSoC / Open Source",
    description:
      "CodeHarborHub's public project ecosystem includes GSSoC-related participation and open-source contribution opportunities.",
    status: "Participated",
    href: "https://github.com/CodeHarborHub",
    tags: ["GSSoC", "Open Source", "GitHub"],
  },
  {
    id: "hacktoberfest-2024",
    year: "2024",
    name: "Hacktoberfest",
    type: "Open Source Program",
    description:
      "CodeHarborHub's public repository ecosystem includes Hacktoberfest-related open-source contribution activity.",
    status: "Participated",
    href: "https://github.com/CodeHarborHub",
    tags: ["Hacktoberfest", "Open Source"],
  },
  {
    id: "open-source-2025",
    year: "2025",
    name: "Open Source Community",
    type: "Community Initiative",
    description:
      "Continued development of CodeHarborHub through documentation, tutorials, projects, contributor workflows, and community collaboration.",
    status: "Community",
    href: "https://github.com/CodeHarborHub",
    tags: ["Community", "Contributors", "Projects"],
  },
  {
    id: "open-source-2026",
    year: "2026",
    name: "CodeHarborHub Open Source Ecosystem",
    type: "Open Source",
    description:
      "The platform continues to evolve with tutorials, projects, coding tools, documentation, and contributor-focused infrastructure.",
    status: "Ongoing",
    href: "https://github.com/CodeHarborHub",
    tags: ["Open Source", "Education", "Development"],
  },
];

export const timeline: TimelineItem[] = [
  {
    year: "2024",
    title: "Open Source Journey",
    description:
      "CodeHarborHub's public ecosystem began building around developer education, open-source collaboration, tutorials, projects, and community contribution.",
    type: "milestone",
  },
  {
    year: "2024",
    title: "GSSoC & Open Source",
    description:
      "GSSoC-related open-source participation became part of the CodeHarborHub contributor journey.",
    type: "program",
  },
  {
    year: "2024",
    title: "Hacktoberfest",
    description:
      "Hacktoberfest became another open-source contribution pathway connected with the CodeHarborHub ecosystem.",
    type: "program",
  },
  {
    year: "2025",
    title: "Growing the Contributor Ecosystem",
    description:
      "The platform continued expanding its tutorials, projects, documentation, contributor workflows, and community resources.",
    type: "community",
  },
  {
    year: "2026",
    title: "Developer Learning Ecosystem",
    description:
      "CodeHarborHub continues expanding toward a broader learning ecosystem covering tutorials, roadmaps, projects, practice, open source, and developer community.",
    type: "milestone",
  },
];

export const eventCategories: EventCategory[] = [
  "Open Source",
  "Workshop",
  "Hackathon",
  "Challenge",
  "Community",
  "Webinar",
];

export const eventModes: EventMode[] = [
  "Online",
  "Offline",
  "Hybrid",
];