import React, { useMemo, useState } from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";

import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  Clock3,
  Code2,
  ExternalLink,
  Filter,
  Github,
  Globe2,
  HeartHandshake,
  History,
  Laptop,
  MapPin,
  Menu,
  Search,
  Sparkles,
  Users,
  X,
  Zap,
} from "lucide-react";

import {
  events,
  eventCategories,
  eventModes,
  openSourcePrograms,
  timeline,
  type EventCategory,
  type EventItem,
  type EventMode,
  type EventStatus,
} from "../../data/events";

import styles from "./styles.module.css";

const statusLabels: Record<EventStatus, string> = {
  upcoming: "Upcoming",
  live: "Live",
  completed: "Completed",
};

const statusClassNames: Record<EventStatus, string> = {
  upcoming: styles.statusUpcoming,
  live: styles.statusLive,
  completed: styles.statusCompleted,
};

const categoryIcons: Record<EventCategory, React.ReactNode> = {
  "Open Source": <Github size={17} />,
  Workshop: <Code2 size={17} />,
  Hackathon: <Zap size={17} />,
  Challenge: <Sparkles size={17} />,
  Community: <Users size={17} />,
  Webinar: <Laptop size={17} />,
};

function EventStatusBadge({ status }: { status: EventStatus }) {
  return (
    <span
      className={`${styles.statusBadge} ${statusClassNames[status]}`}
      aria-label={`Event status: ${statusLabels[status]}`}
    >
      <span className={styles.statusDot} />
      {statusLabels[status]}
    </span>
  );
}

function EventCard({ event }: { event: EventItem }) {
  return (
    <article className={styles.eventCard}>
      <div className={styles.eventCardTop}>
        <div className={styles.categoryIcon}>
          {categoryIcons[event.category]}
        </div>

        <EventStatusBadge status={event.status} />
      </div>

      <div className={styles.eventCardBody}>
        <div className={styles.eventMeta}>
          <span>
            <CalendarDays size={14} />
            {event.dateLabel}
          </span>

          {event.time && (
            <span>
              <Clock3 size={14} />
              {event.time}
            </span>
          )}
        </div>

        <h3>{event.title}</h3>

        <p>{event.description}</p>

        <div className={styles.eventTags}>
          {event.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>

      <div className={styles.eventCardFooter}>
        <div className={styles.eventLocation}>
          {event.mode === "Online" ? (
            <Globe2 size={15} />
          ) : event.mode === "Offline" ? (
            <MapPin size={15} />
          ) : (
            <Globe2 size={15} />
          )}

          <span>{event.mode}</span>

          {event.location && (
            <>
              <span>•</span>
              <span>{event.location}</span>
            </>
          )}
        </div>

        <a
          href={event.href}
          className={styles.cardArrow}
          target={event.href.startsWith("http") ? "_blank" : undefined}
          rel={event.href.startsWith("http") ? "noreferrer" : undefined}
          aria-label={`Open ${event.title}`}
        >
          <ArrowRight size={18} />
        </a>
      </div>
    </article>
  );
}

function ProgramCard({
  program,
}: {
  program: (typeof openSourcePrograms)[number];
}) {
  return (
    <article className={styles.programCard}>
      <div className={styles.programYear}>{program.year}</div>

      <div className={styles.programIcon}>
        <Github size={22} />
      </div>

      <div className={styles.programContent}>
        <div className={styles.programType}>{program.type}</div>

        <h3>{program.name}</h3>

        <p>{program.description}</p>

        <div className={styles.programTags}>
          {program.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>

        <a
          href={program.href}
          target="_blank"
          rel="noreferrer"
          className={styles.programLink}
        >
          View on GitHub
          <ExternalLink size={15} />
        </a>
      </div>

      <div className={styles.programStatus}>
        <CheckCircle2 size={16} />
        {program.status}
      </div>
    </article>
  );
}

export default function EventsPage(): JSX.Element {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<"All" | EventCategory>("All");
  const [mode, setMode] = useState<"All" | EventMode>("All");
  const [status, setStatus] = useState<"All" | EventStatus>("All");
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const filteredEvents = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    return events.filter((event) => {
      const matchesSearch =
        !normalizedSearch ||
        [
          event.title,
          event.description,
          event.category,
          event.mode,
          ...event.tags,
        ]
          .join(" ")
          .toLowerCase()
          .includes(normalizedSearch);

      const matchesCategory =
        category === "All" || event.category === category;

      const matchesMode = mode === "All" || event.mode === mode;

      const matchesStatus = status === "All" || event.status === status;

      return (
        matchesSearch &&
        matchesCategory &&
        matchesMode &&
        matchesStatus
      );
    });
  }, [search, category, mode, status]);

  const upcomingEvents = filteredEvents.filter(
    (event) => event.status === "upcoming",
  );

  const liveEvents = filteredEvents.filter(
    (event) => event.status === "live",
  );

  const completedEvents = filteredEvents.filter(
    (event) => event.status === "completed",
  );

  const resetFilters = () => {
    setSearch("");
    setCategory("All");
    setMode("All");
    setStatus("All");
  };

  return (
    <Layout
      title="Events & Open Source Programs"
      description="Explore CodeHarborHub events, open-source programs, community activities, workshops, challenges, and contributor opportunities."
    >
      <main className={styles.page}>
        {/* Breadcrumb */}
        {/* <div className={styles.container}>
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <ChevronRight size={15} />
            <span>Events</span>
          </nav>
        </div> */}

        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.heroGlowOne} />
          <div className={styles.heroGlowTwo} />

          <div className={styles.container}>
            <div className={styles.heroGrid}>
              <div className={styles.heroContent}>
                <div className={styles.eyebrow}>
                  <Sparkles size={15} />
                  CodeHarborHub Community
                </div>

                <h1>
                  Learn. Contribute.
                  <span> Build Open Source.</span>
                </h1>

                <p>
                  Discover workshops, coding challenges, community sessions,
                  open-source programs, and contribution opportunities across
                  the CodeHarborHub ecosystem.
                </p>

                <div className={styles.heroActions}>
                  <a href="#events" className={styles.primaryButton}>
                    Explore Events
                    <ArrowRight size={18} />
                  </a>

                  <a
                    href="https://github.com/CodeHarborHub"
                    target="_blank"
                    rel="noreferrer"
                    className={styles.secondaryButton}
                  >
                    <Github size={18} />
                    Open Source
                  </a>
                </div>

                <div className={styles.heroTrust}>
                  <div>
                    <CheckCircle2 size={17} />
                    Open source
                  </div>

                  <div>
                    <CheckCircle2 size={17} />
                    Community driven
                  </div>

                  <div>
                    <CheckCircle2 size={17} />
                    Developer focused
                  </div>
                </div>
              </div>

              <div className={styles.heroVisual}>
                <div className={styles.terminalWindow}>
                  <div className={styles.terminalHeader}>
                    <div className={styles.terminalDots}>
                      <span />
                      <span />
                      <span />
                    </div>

                    <span className={styles.terminalTitle}>
                      codeharborhub/events
                    </span>
                  </div>

                  <div className={styles.terminalBody}>
                    <div>
                      <span className={styles.terminalMuted}>$</span>{" "}
                      <span className={styles.terminalCommand}>
                        discover --events
                      </span>
                    </div>

                    <div className={styles.terminalOutput}>
                      <span>✓</span> Workshops
                    </div>

                    <div className={styles.terminalOutput}>
                      <span>✓</span> Open Source Programs
                    </div>

                    <div className={styles.terminalOutput}>
                      <span>✓</span> Coding Challenges
                    </div>

                    <div className={styles.terminalOutput}>
                      <span>✓</span> Community Sessions
                    </div>

                    <div className={styles.terminalCursor}>
                      <span>$</span> _
                    </div>
                  </div>
                </div>

                <div className={styles.floatingCardOne}>
                  <Github size={18} />
                  <div>
                    <strong>Open Source</strong>
                    <span>Build together</span>
                  </div>
                </div>

                <div className={styles.floatingCardTwo}>
                  <Users size={18} />
                  <div>
                    <strong>Community</strong>
                    <span>Learn together</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className={styles.statsSection}>
          <div className={styles.container}>
            <div className={styles.statsGrid}>
              <div className={styles.statCard}>
                <div className={styles.statIcon}>
                  <CalendarDays size={21} />
                </div>
                <strong>{events.length}+</strong>
                <span>Listed activities</span>
              </div>

              <div className={styles.statCard}>
                <div className={styles.statIcon}>
                  <Github size={21} />
                </div>
                <strong>{openSourcePrograms.length}</strong>
                <span>Open-source records</span>
              </div>

              <div className={styles.statCard}>
                <div className={styles.statIcon}>
                  <Users size={21} />
                </div>
                <strong>Community</strong>
                <span>Contributor focused</span>
              </div>

              <div className={styles.statCard}>
                <div className={styles.statIcon}>
                  <Globe2 size={21} />
                </div>
                <strong>Online</strong>
                <span>Global participation</span>
              </div>
            </div>
          </div>
        </section>

        {/* Open Source Journey */}
        <section className={styles.journeySection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <div>
                <div className={styles.sectionEyebrow}>
                  <History size={16} />
                  Our journey
                </div>

                <h2>From learning platform to open-source ecosystem</h2>

                <p>
                  CodeHarborHub connects education, projects, contributors,
                  community activities, and open-source development into one
                  developer-focused ecosystem.
                </p>
              </div>
            </div>

            <div className={styles.timeline}>
              {timeline.map((item, index) => (
                <div className={styles.timelineItem} key={`${item.year}-${index}`}>
                  <div className={styles.timelineRail}>
                    <div className={styles.timelineDot}>
                      {item.type === "program" ? (
                        <Github size={15} />
                      ) : item.type === "community" ? (
                        <Users size={15} />
                      ) : (
                        <Sparkles size={15} />
                      )}
                    </div>

                    {index !== timeline.length - 1 && (
                      <div className={styles.timelineLine} />
                    )}
                  </div>

                  <div className={styles.timelineContent}>
                    <span>{item.year}</span>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Source Programs */}
        <section className={styles.programsSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeaderCentered}>
              <div className={styles.sectionEyebrow}>
                <Github size={16} />
                Open source
              </div>

              <h2>Programs & community initiatives</h2>

              <p>
                Explore the open-source programs and community initiatives
                connected with the CodeHarborHub journey.
              </p>
            </div>

            <div className={styles.programGrid}>
              {openSourcePrograms.map((program) => (
                <ProgramCard key={program.id} program={program} />
              ))}
            </div>
          </div>
        </section>

        {/* Events */}
        <section id="events" className={styles.eventsSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <div>
                <div className={styles.sectionEyebrow}>
                  <CalendarDays size={16} />
                  Events
                </div>

                <h2>Learn, build and connect</h2>

                <p>
                  Find developer events and activities that match your
                  interests and learning goals.
                </p>
              </div>

              <button
                type="button"
                className={styles.mobileFilterButton}
                onClick={() => setMobileFiltersOpen((value) => !value)}
              >
                {mobileFiltersOpen ? <X size={18} /> : <Filter size={18} />}
                Filters
              </button>
            </div>

            <div
              className={`${styles.explorer} ${
                mobileFiltersOpen ? styles.explorerOpen : ""
              }`}
            >
              <div className={styles.searchBox}>
                <Search size={18} />

                <input
                  type="search"
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search events, topics, technologies..."
                  aria-label="Search events"
                />
              </div>

              <div className={styles.filters}>
                <select
                  value={category}
                  onChange={(event) =>
                    setCategory(event.target.value as "All" | EventCategory)
                  }
                  aria-label="Filter by category"
                >
                  <option value="All">All categories</option>

                  {eventCategories.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>

                <select
                  value={mode}
                  onChange={(event) =>
                    setMode(event.target.value as "All" | EventMode)
                  }
                  aria-label="Filter by mode"
                >
                  <option value="All">All modes</option>

                  {eventModes.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>

                <select
                  value={status}
                  onChange={(event) =>
                    setStatus(event.target.value as "All" | EventStatus)
                  }
                  aria-label="Filter by status"
                >
                  <option value="All">All statuses</option>
                  <option value="upcoming">Upcoming</option>
                  <option value="live">Live</option>
                  <option value="completed">Completed</option>
                </select>

                <button
                  type="button"
                  className={styles.resetButton}
                  onClick={resetFilters}
                >
                  Reset
                </button>
              </div>
            </div>

            {filteredEvents.length === 0 ? (
              <div className={styles.emptyState}>
                <div className={styles.emptyIcon}>
                  <Search size={28} />
                </div>

                <h3>No events found</h3>

                <p>
                  Try changing your search or filters to discover other
                  CodeHarborHub activities.
                </p>

                <button
                  type="button"
                  className={styles.primaryButton}
                  onClick={resetFilters}
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className={styles.eventGroups}>
                {liveEvents.length > 0 && (
                  <div className={styles.eventGroup}>
                    <div className={styles.groupHeader}>
                      <div>
                        <span className={styles.liveLabel}>
                          <span />
                          Happening now
                        </span>
                        <h3>Live activities</h3>
                      </div>
                    </div>

                    <div className={styles.eventsGrid}>
                      {liveEvents.map((event) => (
                        <EventCard key={event.id} event={event} />
                      ))}
                    </div>
                  </div>
                )}

                {upcomingEvents.length > 0 && (
                  <div className={styles.eventGroup}>
                    <div className={styles.groupHeader}>
                      <div>
                        <span className={styles.groupEyebrow}>
                          Coming next
                        </span>
                        <h3>Upcoming events</h3>
                      </div>

                      <span className={styles.resultCount}>
                        {upcomingEvents.length} events
                      </span>
                    </div>

                    <div className={styles.eventsGrid}>
                      {upcomingEvents.map((event) => (
                        <EventCard key={event.id} event={event} />
                      ))}
                    </div>
                  </div>
                )}

                {completedEvents.length > 0 && (
                  <div className={styles.eventGroup}>
                    <div className={styles.groupHeader}>
                      <div>
                        <span className={styles.groupEyebrow}>
                          Past activities
                        </span>
                        <h3>Completed events</h3>
                      </div>
                    </div>

                    <div className={styles.eventsGrid}>
                      {completedEvents.map((event) => (
                        <EventCard key={event.id} event={event} />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </section>

        {/* How to participate */}
        <section className={styles.participateSection}>
          <div className={styles.container}>
            <div className={styles.participateCard}>
              <div className={styles.participateContent}>
                <div className={styles.sectionEyebrow}>
                  <HeartHandshake size={16} />
                  Participate
                </div>

                <h2>There is more than one way to contribute.</h2>

                <p>
                  Attend an event, build a project, improve documentation,
                  solve an issue, review a pull request, mentor contributors,
                  or help the community learn.
                </p>

                <div className={styles.participateActions}>
                  <Link
                    to="/contributing/"
                    className={styles.primaryButton}
                  >
                    Start contributing
                    <ArrowRight size={18} />
                  </Link>

                  <Link
                    to="/projects/"
                    className={styles.secondaryButton}
                  >
                    Explore projects
                  </Link>
                </div>
              </div>

              <div className={styles.participateVisual}>
                <div className={styles.participateIcon}>
                  <HeartHandshake size={42} />
                </div>

                <div className={styles.participateMiniCard}>
                  <CheckCircle2 size={16} />
                  Learn
                </div>

                <div className={styles.participateMiniCard}>
                  <CheckCircle2 size={16} />
                  Build
                </div>

                <div className={styles.participateMiniCard}>
                  <CheckCircle2 size={16} />
                  Contribute
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Host */}
        <section className={styles.hostSection}>
          <div className={styles.container}>
            <div className={styles.hostGrid}>
              <div>
                <div className={styles.sectionEyebrow}>
                  <Users size={16} />
                  Community leadership
                </div>

                <h2>Want to host or lead a developer activity?</h2>

                <p>
                  Share a workshop, community session, open-source initiative,
                  project showcase, or developer-focused event with the
                  CodeHarborHub community.
                </p>
              </div>

              <div className={styles.hostActions}>
                <Link to="/contact/" className={styles.primaryButton}>
                  Contact the team
                  <ArrowRight size={18} />
                </Link>

                <a
                  href="https://github.com/CodeHarborHub"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.secondaryButton}
                >
                  <Github size={18} />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className={styles.finalSection}>
          <div className={styles.container}>
            <div className={styles.finalCard}>
              <div className={styles.finalGlow} />

              <div className={styles.finalIcon}>
                <Sparkles size={24} />
              </div>

              <h2>Keep learning. Keep building.</h2>

              <p>
                Explore tutorials, follow a roadmap, build projects, practice
                coding, and contribute to open source.
              </p>

              <div className={styles.finalActions}>
                <Link to="/tutorials/" className={styles.primaryButton}>
                  Explore tutorials
                  <ArrowRight size={18} />
                </Link>

                <Link to="/roadmaps/" className={styles.secondaryButton}>
                  View roadmaps
                </Link>

                <Link to="/projects/" className={styles.secondaryButton}>
                  Build projects
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}