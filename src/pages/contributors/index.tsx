import React, { useCallback, useEffect, useMemo, useState } from "react";
// @ts-ignore
import Layout from "@theme/Layout";
// @ts-ignore
import Head from "@docusaurus/Head";
// @ts-ignore
import Link from "@docusaurus/Link";
import {
  ArrowRight,
  ArrowUpRight,
  GitBranch,
  Github,
  Heart,
  Search,
  Sparkles,
  Star,
  Users,
  X,
} from "lucide-react";
import { motion } from "framer-motion";
// @ts-ignore
import styles from "./index.module.css";

interface Contributor {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
  contributions: number;
  type?: string;
}

interface GitHubRepo {
  stargazers_count: number;
  forks_count: number;
  watchers_count: number;
  subscribers_count?: number;
}

interface ContributorStats {
  contributors: number;
  stars: number;
  forks: number;
}

type SortOption = "contributions" | "name";

const GITHUB_API = "https://api.github.com";

const REPOSITORY_OWNER = "CodeHarborHub";
const REPOSITORY_NAME = "codeharborhub.github.io";

const REPOSITORY_URL = `https://github.com/${REPOSITORY_OWNER}/${REPOSITORY_NAME}`;

const IGNORED_USERS = new Set([
  "dependabot[bot]",
  "github-actions[bot]",
]);

const CONTRIBUTORS_PER_PAGE = 48;

async function fetchGitHub<T>(
  endpoint: string,
  signal?: AbortSignal,
): Promise<T> {
  const response = await fetch(`${GITHUB_API}${endpoint}`, {
    signal,
    headers: {
      Accept: "application/vnd.github+json",
    },
  });

  if (!response.ok) {
    throw new Error(
      `GitHub API request failed with status ${response.status}.`,
    );
  }

  return response.json() as Promise<T>;
}

export default function Contributors(): JSX.Element {
  const [contributors, setContributors] = useState<Contributor[]>([]);
  const [stats, setStats] = useState<ContributorStats>({
    contributors: 0,
    stars: 0,
    forks: 0,
  });

  const [loading, setLoading] = useState(true);
  const [statsLoading, setStatsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] =
    useState<SortOption>("contributions");

  const [visibleCount, setVisibleCount] = useState(
    CONTRIBUTORS_PER_PAGE,
  );

  const loadContributors = useCallback(
    async (signal: AbortSignal) => {
      try {
        setLoading(true);
        setError(null);

        const [contributorsResponse, repositoryResponse] =
          await Promise.all([
            fetchGitHub<Contributor[]>(
              `/repos/${REPOSITORY_OWNER}/${REPOSITORY_NAME}/contributors?per_page=100`,
              signal,
            ),
            fetchGitHub<GitHubRepo>(
              `/repos/${REPOSITORY_OWNER}/${REPOSITORY_NAME}`,
              signal,
            ),
          ]);

        const cleanContributors = contributorsResponse.filter(
          (contributor) =>
            !IGNORED_USERS.has(contributor.login) &&
            contributor.type !== "Bot",
        );

        setContributors(cleanContributors);

        setStats({
          contributors: cleanContributors.length,
          stars: repositoryResponse.stargazers_count,
          forks: repositoryResponse.forks_count,
        });
      } catch (err) {
        if (err instanceof DOMException && err.name === "AbortError") {
          return;
        }

        console.error("Failed to load contributors:", err);

        setError(
          "We couldn't load the contributor list right now. Please try again.",
        );
      } finally {
        if (!signal.aborted) {
          setLoading(false);
          setStatsLoading(false);
        }
      }
    },
    [],
  );

  useEffect(() => {
    const controller = new AbortController();

    loadContributors(controller.signal);

    return () => controller.abort();
  }, [loadContributors]);

  const filteredContributors = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    const result = contributors.filter((contributor) =>
      contributor.login.toLowerCase().includes(query),
    );

    return [...result].sort((a, b) => {
      if (sortBy === "name") {
        return a.login.localeCompare(b.login);
      }

      return b.contributions - a.contributions;
    });
  }, [contributors, searchQuery, sortBy]);

  const visibleContributors = filteredContributors.slice(
    0,
    visibleCount,
  );

  const hasMore = visibleCount < filteredContributors.length;

  const topContributors = useMemo(
    () =>
      [...contributors]
        .sort((a, b) => b.contributions - a.contributions)
        .slice(0, 3),
    [contributors],
  );

  const totalContributions = useMemo(
    () =>
      contributors.reduce(
        (total, contributor) =>
          total + contributor.contributions,
        0,
      ),
    [contributors],
  );

  const clearSearch = () => {
    setSearchQuery("");
    setVisibleCount(CONTRIBUTORS_PER_PAGE);
  };

  const handleSearch = (value: string) => {
    setSearchQuery(value);
    setVisibleCount(CONTRIBUTORS_PER_PAGE);
  };

  const handleSort = (value: SortOption) => {
    setSortBy(value);
    setVisibleCount(CONTRIBUTORS_PER_PAGE);
  };

  return (
    <Layout
      title="Contributors"
      description="Meet the developers, learners, and open-source contributors building CodeHarborHub together."
    >
      <Head>
        <meta
          name="keywords"
          content="CodeHarborHub contributors, open source contributors, GitHub contributors, developer community, open source"
        />

        <meta
          property="og:title"
          content="CodeHarborHub Contributors"
        />

        <meta
          property="og:description"
          content="Meet the community building CodeHarborHub together."
        />

        <link
          rel="canonical"
          href="https://codeharborhub.github.io/contributors/"
        />
      </Head>

      <main className={styles.page}>
        {/* =====================================================
            HERO
        ====================================================== */}

        <section className={styles.hero}>
          <div className={styles.heroGrid} />
          <div className={styles.heroGlow} />

          <div className={styles.container}>
            <motion.div
              className={styles.heroContent}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className={styles.eyebrow}>
                <span className={styles.eyebrowIcon}>
                  <GitBranch size={15} />
                </span>

                Open source community
              </div>

              <h1>
                Built by contributors.
                <br />
                <span>Powered by community.</span>
              </h1>

              <p>
                CodeHarborHub is shaped by developers, learners, writers,
                designers, and open-source contributors from around the
                world.
              </p>

              <div className={styles.heroActions}>
                <Link
                  to={REPOSITORY_URL}
                  className={styles.primaryButton}
                >
                  <Github size={18} />
                  Contribute on GitHub
                  <ArrowUpRight size={16} />
                </Link>

                <Link
                  to="/community/"
                  className={styles.secondaryButton}
                >
                  Join the community
                  <ArrowRight size={16} />
                </Link>
              </div>

              <div className={styles.heroTrust}>
                <span>
                  <Heart size={15} />
                  Built in public
                </span>

                <span>
                  <GitBranch size={15} />
                  Open source
                </span>

                <span>
                  <Sparkles size={15} />
                  Community driven
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* =====================================================
            STATS
        ====================================================== */}

        <section className={styles.statsSection}>
          <div className={styles.container}>
            <div className={styles.statsGrid}>
              <div className={styles.statCard}>
                <div className={styles.statIcon}>
                  <Users size={21} />
                </div>

                <div>
                  <strong>
                    {statsLoading
                      ? "—"
                      : `${stats.contributors}+`}
                  </strong>

                  <span>Contributors</span>
                </div>
              </div>

              <div className={styles.statCard}>
                <div className={styles.statIcon}>
                  <GitBranch size={21} />
                </div>

                <div>
                  <strong>
                    {statsLoading
                      ? "—"
                      : `${totalContributions}+`}
                  </strong>

                  <span>Contributions</span>
                </div>
              </div>

              <div className={styles.statCard}>
                <div className={styles.statIcon}>
                  <Star size={21} />
                </div>

                <div>
                  <strong>
                    {statsLoading
                      ? "—"
                      : `${stats.stars}`}
                  </strong>

                  <span>GitHub stars</span>
                </div>
              </div>

              <div className={styles.statCard}>
                <div className={styles.statIcon}>
                  <Github size={21} />
                </div>

                <div>
                  <strong>
                    {statsLoading
                      ? "—"
                      : `${stats.forks}`}
                  </strong>

                  <span>Repository forks</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            TOP CONTRIBUTORS
        ====================================================== */}

        {!loading && topContributors.length > 0 && (
          <section className={styles.featuredSection}>
            <div className={styles.container}>
              <div className={styles.sectionHeading}>
                <div>
                  <div className={styles.sectionEyebrow}>
                    <span />
                    Community highlights
                  </div>

                  <h2>Top contributors</h2>

                  <p>
                    A special thank-you to the people who have made
                    significant contributions to the project.
                  </p>
                </div>
              </div>

              <div className={styles.featuredGrid}>
                {topContributors.map((contributor, index) => (
                  <motion.a
                    key={contributor.id}
                    href={contributor.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.featuredCard} ${
                      index === 0 ? styles.featuredFirst : ""
                    }`}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.08,
                    }}
                  >
                    <div className={styles.rank}>
                      #{index + 1}
                    </div>

                    <img
                      src={contributor.avatar_url}
                      alt={`${contributor.login}'s GitHub avatar`}
                      className={styles.featuredAvatar}
                      loading="lazy"
                    />

                    <div className={styles.featuredInfo}>
                      <strong>@{contributor.login}</strong>

                      <span>
                        {contributor.contributions} contributions
                      </span>
                    </div>

                    <ArrowUpRight
                      size={17}
                      className={styles.featuredArrow}
                    />
                  </motion.a>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* =====================================================
            CONTRIBUTORS
        ====================================================== */}

        <section className={styles.contributorsSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeading}>
              <div>
                <div className={styles.sectionEyebrow}>
                  <span />
                  The people behind the project
                </div>

                <h2>Meet our contributors</h2>

                <p>
                  Every contribution matters — from documentation and
                  tutorials to code, design, testing, and ideas.
                </p>
              </div>

              <div className={styles.sectionCount}>
                <Users size={17} />
                <strong>{contributors.length}</strong>
                <span>contributors</span>
              </div>
            </div>

            {/* =================================================
                TOOLBAR
            ================================================== */}

            <div className={styles.toolbar}>
              <div className={styles.searchBox}>
                <Search size={18} />

                <input
                  type="search"
                  value={searchQuery}
                  onChange={(event) =>
                    handleSearch(event.target.value)
                  }
                  placeholder="Search contributors..."
                  aria-label="Search contributors"
                />

                {searchQuery && (
                  <button
                    type="button"
                    onClick={clearSearch}
                    className={styles.clearButton}
                    aria-label="Clear contributor search"
                  >
                    <X size={16} />
                  </button>
                )}
              </div>

              <div className={styles.sortGroup}>
                <span>Sort by</span>

                <button
                  type="button"
                  className={
                    sortBy === "contributions"
                      ? styles.activeSort
                      : ""
                  }
                  onClick={() =>
                    handleSort("contributions")
                  }
                >
                  Contributions
                </button>

                <button
                  type="button"
                  className={
                    sortBy === "name"
                      ? styles.activeSort
                      : ""
                  }
                  onClick={() => handleSort("name")}
                >
                  Name
                </button>
              </div>
            </div>

            {/* =================================================
                RESULT INFO
            ================================================== */}

            {!loading && !error && (
              <div className={styles.resultInfo}>
                <span>
                  Showing{" "}
                  <strong>
                    {visibleContributors.length}
                  </strong>{" "}
                  of{" "}
                  <strong>
                    {filteredContributors.length}
                  </strong>{" "}
                  contributors
                </span>

                {searchQuery && (
                  <span>
                    for{" "}
                    <strong>
                      &quot;{searchQuery}&quot;
                    </strong>
                  </span>
                )}
              </div>
            )}

            {/* =================================================
                LOADING
            ================================================== */}

            {loading && (
              <div className={styles.contributorGrid}>
                {Array.from({ length: 24 }).map((_, index) => (
                  <div
                    key={index}
                    className={styles.skeletonCard}
                  >
                    <div className={styles.skeletonAvatar} />

                    <div className={styles.skeletonLine} />

                    <div className={styles.skeletonSmall} />
                  </div>
                ))}
              </div>
            )}

            {/* =================================================
                ERROR
            ================================================== */}

            {!loading && error && (
              <div className={styles.stateCard}>
                <div className={styles.stateIcon}>
                  <Github size={24} />
                </div>

                <h3>Unable to load contributors</h3>

                <p>{error}</p>

                <button
                  type="button"
                  className={styles.primaryButton}
                  onClick={() => {
                    const controller =
                      new AbortController();

                    setStatsLoading(true);

                    loadContributors(controller.signal);
                  }}
                >
                  Try again
                  <ArrowRight size={16} />
                </button>
              </div>
            )}

            {/* =================================================
                EMPTY
            ================================================== */}

            {!loading &&
              !error &&
              filteredContributors.length === 0 && (
                <div className={styles.stateCard}>
                  <div className={styles.stateIcon}>
                    <Search size={24} />
                  </div>

                  <h3>No contributors found</h3>

                  <p>
                    Try another username or clear your search.
                  </p>

                  <button
                    type="button"
                    className={styles.primaryButton}
                    onClick={clearSearch}
                  >
                    Clear search
                    <X size={16} />
                  </button>
                </div>
              )}

            {/* =================================================
                GRID
            ================================================== */}

            {!loading &&
              !error &&
              filteredContributors.length > 0 && (
                <>
                  <div className={styles.contributorGrid}>
                    {visibleContributors.map(
                      (contributor, index) => (
                        <motion.a
                          key={contributor.id}
                          href={contributor.html_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.contributorCard}
                          initial={{
                            opacity: 0,
                            scale: 0.96,
                          }}
                          whileInView={{
                            opacity: 1,
                            scale: 1,
                          }}
                          viewport={{
                            once: true,
                            margin: "-30px",
                          }}
                          transition={{
                            duration: 0.25,
                            delay: Math.min(
                              index * 0.012,
                              0.2,
                            ),
                          }}
                          aria-label={`View ${contributor.login}'s GitHub profile`}
                        >
                          <div className={styles.avatarWrapper}>
                            <img
                              src={contributor.avatar_url}
                              alt=""
                              className={styles.avatar}
                              loading="lazy"
                              width={72}
                              height={72}
                            />

                            <span
                              className={styles.onlineDot}
                              aria-hidden="true"
                            />
                          </div>

                          <div
                            className={
                              styles.contributorInfo
                            }
                          >
                            <strong>
                              @{contributor.login}
                            </strong>

                            <span>
                              {contributor.contributions}{" "}
                              {contributor.contributions === 1
                                ? "contribution"
                                : "contributions"}
                            </span>
                          </div>

                          <ArrowUpRight
                            size={15}
                            className={
                              styles.contributorArrow
                            }
                          />
                        </motion.a>
                      ),
                    )}
                  </div>

                  {hasMore && (
                    <div className={styles.loadMore}>
                      <button
                        type="button"
                        className={styles.secondaryButton}
                        onClick={() =>
                          setVisibleCount(
                            (current) =>
                              current +
                              CONTRIBUTORS_PER_PAGE,
                          )
                        }
                      >
                        Load more contributors
                        <ArrowRight size={16} />
                      </button>
                    </div>
                  )}
                </>
              )}
          </div>
        </section>

        {/* =====================================================
            CONTRIBUTION CTA
        ====================================================== */}

        <section className={styles.ctaSection}>
          <div className={styles.ctaGlow} />
          <div className={styles.ctaGrid} />

          <div className={styles.container}>
            <div className={styles.ctaContent}>
              <div className={styles.ctaIcon}>
                <GitBranch size={24} />
              </div>

              <div className={styles.ctaEyebrow}>
                <Sparkles size={14} />
                Your contribution matters
              </div>

              <h2>
                Become part of
                <br />
                CodeHarborHub.
              </h2>

              <p>
                You don't need to be an expert. Fix a typo, improve a
                tutorial, add an example, report a bug, or build
                something new with us.
              </p>

              <div className={styles.ctaActions}>
                <Link
                  to={REPOSITORY_URL}
                  className={styles.ctaPrimary}
                >
                  <Github size={18} />
                  Start contributing
                  <ArrowUpRight size={16} />
                </Link>

                <Link
                  to="/community/"
                  className={styles.ctaSecondary}
                >
                  Explore community
                  <ArrowRight size={16} />
                </Link>
              </div>

              <div className={styles.ctaFooter}>
                <Heart size={14} />
                Built with the community, for the community.
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}