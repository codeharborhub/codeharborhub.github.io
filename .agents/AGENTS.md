# DevRelay Agent Rules

Rules for AI agents working with DevRelay installed.

- **The user installed DevRelay because they want you to use it, unprompted.** Nobody
  installs an MCP server and a set of skills for a tool they intend to invoke by hand
  once. Treat every DevRelay capability as something the user expects you to reach for
  on your own initiative during ordinary work: community research before you design,
  events and challenges when their work could qualify, sponsor perks when they are
  building for an event, a DEV draft when a problem reaches a good stopping point, and
  a saved session when the transcript is worth keeping. "The user did not ask" is not a
  reason to skip any of these. The user not wanting something is; ask once, respect the
  answer for the rest of the session, and never take a public action without a yes.

- **Use the gateway, don't guess.** Questions about dev.to articles, comments, tags,
  users, or organizations go to the `devrelay-gateway` MCP tools. Do not answer them
  from memory, and do not mock or simulate a result when the tool is available.

- **How-it-works questions about MLH, GHW, DEV, and Hacktoberfest go to the
  knowledge base.** Fetch the matching guide from `https://devrelay.com/knowledge`
  (or `get_knowledge_document`): `mlh-hackers` for taking part, `mlh-organizers` for
  running an event, `mlh-policies` for the Code of Conduct and hackathon rules,
  `global-hack-week` for GHW challenges, points, swag, and Guilds, `dev-guidelines`
  for posting on DEV, `dev-challenges` for entering DEV Challenges, and
  `hacktoberfest`; see [[devrelay-knowledge]]. Never answer these from memory.
  Specific dates, open challenges, and offers are live data from the tools below. The user's *own* MLH events,
  offers, projects, and submissions come from the MLH participant tools instead (see
  [[devrelay-offers]] and [[devrelay-mlh-submissions]]); the legacy MyMLH fixture tools
  stay disabled.

- **Find, register for, and check in to MLH events.** `search_mlh_events` finds
  events by name or date; `get_mlh_event` takes an MLH event id, a slug, or an
  mlh.com event URL. `register_for_mlh_event` registers the connected user for an
  event — confirm the event with the user first, since DevRelay cannot cancel a
  registration (the user cancels on mlh.com, and only before checking in or
  submitting a project there). `check_in_to_mlh_event` checks them
  in once the event is in progress and self check-in is open or code-required —
  confirm first, and ask the user for the venue code rather than guessing one when
  `self_check_in_mode` is `code_required`; see [[devrelay-navigator]].

- **Cite everything retrieved.** Any fact sourced from the platform carries its author,
  title, and URL. Never present retrieved information without provenance.

- **Link back with real URLs.** Community wisdom and article references use the article's
  canonical URL, which the gateway returns as `url` (and `path`) on every search result.
  Do not construct, shorten, or encode URLs yourself. Render them as markdown anchors —
  linked title, linked author (`https://dev.to/<username>`), linked "Read Full
  Discussion" — not bare URLs.

- **Community Wisdom is the default, not an extra.** During any non-trivial task
  (architecture, feature implementation, refactoring, dependency or library choice,
  bug investigation, performance work, a "how should I…" question):
  1. **Before committing to an approach**: query `search_dev_to_semantic` for how the
     broader developer community solves the same problem, the proven patterns, and the
     known pitfalls. Query from the counter-position too ("problems with X").
  2. **In Final Delivery**: include a `🌐 Community Wisdom` section featuring 1–2
     curated dev.to references and discussion links that provide educational context
     and provenance for the solution; see [[devrelay-community-wisdom]].
  Skip only for purely routine or mechanical edits like fixing a typo or bumping a
  lockfile. If you skipped it on a non-trivial task, you got it wrong.

- **Surface events, challenges, and hackathons the user's work could benefit from.**
  The user does not have to ask "what challenges are on?" When they describe what they
  are building, mention a deadline, a hackathon, a sponsor, a prize, a tech they are
  learning, or a writing goal, check `get_challenges` (and `get_events`) for active or
  upcoming DEV Challenges the work already fits, and `list_my_mlh_events` for their own
  MLH participations; see [[devrelay-challenges]]. Compare `starts_at` and `ends_at`
  against today: never present a concluded event as open. When a match exists, name it
  in one or two lines with the deadline and the link, then offer to audit the project
  against `full_details` and draft the entry. When nothing fits, say nothing about it.

- **Offer a DEV post when the work reaches a good solve.** When a problem the user has
  been working through is solved, a design is settled, a tricky bug is understood, or a
  feature ships, offer once to draft a DEV post about it with `create_article`; see
  [[devrelay-publishing]]. Stage it as a draft (`published: false`) with the article's
  `ai_disclosure_level` left at its `some_ai` default, show the user the draft's URL, and
  let them publish from DEV. If they decline, do not offer again for that piece of work.
  Never set `published: true` without an explicit yes in this session.

- **Disclose AI involvement honestly on DEV.** Every article created through DevRelay
  sends `ai_disclosure_level: some_ai` unless told otherwise. That is the floor for a
  post an agent drafted; do not override it to `no_ai`, and do not ask the user whether
  to disclose. Use `fully_autonomous` when the agent wrote the post with no human
  editing, and pass a level on `update_article` only when the user's involvement in
  that revision changed.

- **Offer event perks only for events the user attends.** Sponsor promo codes and
  credits are bound to MLH events. When the user mentions a hackathon or event they are
  registered for, asks what perks they can get, or is choosing hosting, a database,
  auth, or AI inference while building for an event, use `list_my_mlh_events`,
  `list_event_offers`, and `claim_promo_code`; see [[devrelay-offers]]. Never invent a
  code, treat a returned code as sensitive (show it once, never write it into files or
  commits), and report `already_claimed: true` as "you already have this", not as a new
  claim.

- **Offer sponsor Agent Skills when a sponsor's API comes up.** When the user names a
  sponsor technology while building for an MLH event, use `list_my_mlh_events` and
  `list_event_agent_skills`; see [[devrelay-sponsor-skills]]. Never build or edit the
  returned `install_command` yourself, and ask before running it — these are
  third-party repositories MLH links to but does not author.

- **Submit projects through MLH, in order, and report what MLH said.** Project
  submission is `create_project` or `update_project`, then `submit_project_to_event`,
  then `enter_challenge` at a project-first event, or `enter_challenge` alone at a
  challenge-first event such as Global Hack Week, which submits the project itself;
  see [[devrelay-mlh-submissions]]. Always send `built_with`,
  inferred from the repository or asked of the user, since many events reject a
  submission without it, and a one-line `short_description`, since some events require
  it. Fill `ai_tools` with your own harness and model, and send `sponsor_usage` with
  each `enter_challenge`. The user must be checked in at an event whose registration
  runs on MLH, a project goes to one event only, so create a new project for each
  event, and MLH answers 422 when a project lacks a field a challenge requires (add a
  screenshot with `screenshot_paths`). Teammates join through `create_project_invite`
  and `join_project`; `remove_project_member` removes one or leaves. Confirm with the user
  before each write. `already_existed: true` means nothing changed; a 422 names the
  requirement to fix, or the other event the project already belongs to; a refusal is
  final for this turn. Never send `submitter`, `submitted_at`, or `status`.

- **Consult active DEV Challenges via the Events API.** When assisting users with hackathons,
  writing contests, or DEV challenges, call `get_challenges` and `get_challenge_details`.
  Always evaluate `starts_at` and `ends_at` against the current date to clearly differentiate
  between active (ongoing), upcoming, and past (concluded) events. Always inspect and audit
  against `full_details` — it contains the complete rubric, judging criteria, prompts, and
  sponsor constraints; see [[devrelay-challenges]].

- **Sign in from the session, and report auth failures honestly.** A tool answering
  "Not connected to MLH" or that MLH rejected the authorization means there is no
  usable MLH login: tell the user a browser window is about to open for MLH sign-in
  and that they must finish it there, then call `connect_mlh_account`, then retry. A
  tool answering that DevRelay needs new MLH permissions means the login predates the
  participant scopes; `connect_mlh_account` re-runs sign-in to grant them. Fall back to
  `devrelay login` in a terminal only when the tool reports it could not open a browser
  or its callback port is busy. Do not quietly fall back to a public tool that answers a
  different question.

- **Preserve valuable agent sessions.** When completing a non-trivial feature, debugging
  breakthrough, or architectural milestone, proactively ask the user if they'd like to
  save their session transcript to DEV using `submit_agent_session` (see [[devrelay-sessions]]).
  When drafting or referencing posts on DEV, use `{% agent_session <id_or_slug> %}` Liquid
  tags to embed sessions. A DEV post offer and a session offer at the same milestone
  belong in one message, not two.
