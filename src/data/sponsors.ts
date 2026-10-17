
export type SponsorTier =
  | "Community"
  | "Silver"
  | "Gold"
  | "Platinum"
  | "Organization";

export interface Sponsor {
  id: string;
  name: string;
  description: string;
  tier: SponsorTier;
  website?: string;
  github?: string;
  logo?: string;
  initials: string;
  featured?: boolean;
  contributionType: string;
  since?: string;
  message?: string;
}

/**
 * Add only verified sponsors who have agreed to be featured.
 * Keep this array empty until you have real sponsor details.
 */
export const sponsors: Sponsor[] = [
  // Example entry — uncomment and replace with a real sponsor:
  //
  {
    id: "codeharborhub",
    name: "CodeHarborHub Community",
    description:
      "CodeHarborHub is a community-driven platform that supports open-source projects and learning resources.",
    tier: "Organization",
    website: "https://codeharborhub.github.io/",
    github: "https://github.com/codeharborhub",
    logo: "https://codeharborhub.github.io/img/nav-logo.jpg",
    initials: " ",
    featured: true,
    contributionType: "Financial Support",
    since: "2026",
    message: "We are proud to support the growth of open-source projects and the developer community. Our mission is to foster collaboration and innovation, and we believe that by sponsoring initiatives like this, we can help create a more vibrant and inclusive tech ecosystem.",
  },
];
