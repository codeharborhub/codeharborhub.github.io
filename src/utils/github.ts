export interface Contributor {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
  contributions: number;
  type: string;
}

export interface ContributorDetail {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
  name: string | null;
  company: string | null;
  blog: string | null;
  location: string | null;
  email: string | null;
  bio: string | null;
  twitter_username: string | null;
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
}

export interface Commit {
  sha: string;
  commit: {
    author: {
      name: string;
      email: string;
      date: string;
    };
    message: string;
  };
  html_url: string;
}

const GITHUB_API_BASE = 'https://api.github.com';
const REPO_OWNER = 'CodeHarborHub';
const REPO_NAME = 'codeharborhub.github.io';

export async function fetchContributors(): Promise<Contributor[]> {
  const response = await fetch(
    `${GITHUB_API_BASE}/repos/${REPO_OWNER}/${REPO_NAME}/contributors?per_page=100`
  );

  if (!response.ok) {
    throw new Error('Failed to fetch contributors');
  }

  const data = await response.json();
  return data;
}

export async function fetchContributorDetail(username: string): Promise<ContributorDetail> {
  const response = await fetch(`${GITHUB_API_BASE}/users/${username}`);

  if (!response.ok) {
    throw new Error('Failed to fetch contributor details');
  }

  const data = await response.json();
  return data;
}

export async function fetchContributorCommits(username: string): Promise<Commit[]> {
  const response = await fetch(
    `${GITHUB_API_BASE}/repos/${REPO_OWNER}/${REPO_NAME}/commits?author=${username}&per_page=50`
  );

  if (!response.ok) {
    throw new Error('Failed to fetch contributor commits');
  }

  const data = await response.json();
  return data;
}

export function getTopContributors(contributors: Contributor[], count: number = 10): Contributor[] {
  return [...contributors]
    .sort((a, b) => b.contributions - a.contributions)
    .slice(0, count);
}

export function filterContributorsByName(contributors: Contributor[], searchTerm: string): Contributor[] {
  const term = searchTerm.toLowerCase();
  return contributors.filter(contributor =>
    contributor.login.toLowerCase().includes(term)
  );
}
