import clsx from "clsx";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import style from "./index.module.css";
import Head from "@docusaurus/Head";
import ScrollTopToButton from "../components/Buttons/bottom/ScrollTopToButton";
import ScrollBottomToTop from "../components/Buttons/top/ScrollBottomToTop";

const PROJECT_DATA = [
  {
    title: "AI-Driven Personalized Learning Paths",
    difficulty: "Medium",
    size: "350 Hours",
    topics: ["Generative AI", "Vector DB", "LLM"],
    techStack: ["React", "Node.js", "LangChain", "OpenAI"],
    mentors: ["Ajay Dhangar", "TBD"],
    description: "Build an AI engine that analyzes a user's GitHub profile and skill gaps to generate custom, interactive learning roadmaps with real-time progress tracking.",
    goals: [
      "Implement Gemini/OpenAI integration for dynamic roadmap generation",
      "Build a persistent progress tracker with MongoDB",
      "Develop an interactive 'Roadmap-as-a-Service' UI component"
    ]
  },
  {
    title: "Real-time Collaborative Code Lab",
    difficulty: "Hard",
    size: "350 Hours",
    topics: ["WebSockets", "Collaboration", "Editor"],
    techStack: ["TypeScript", "Socket.io", "Monaco Editor", "Redis"],
    mentors: ["Ajay Dhangar", "TBD"],
    description: "A 'Google Docs for Developers'—build a browser-based IDE where users can pair-program in real-time, share terminal outputs, and debug code together.",
    goals: [
      "Implement CRDTs or Operational Transformation for conflict-free sync",
      "Integrate a sandboxed execution environment (Docker/Piston API)",
      "Develop a 'Live Mentor' request system with shared sessions"
    ]
  },
  {
    title: "Open Source Contributor & Impact Dashboard",
    difficulty: "Medium",
    size: "175 Hours",
    topics: ["GitHub API", "Analytics", "Gamification"],
    techStack: ["Next.js", "GitHub GraphQL", "PostgreSQL", "Recharts"],
    mentors: ["TBD"],
    description: "Visualize the global impact of CodeHarborHub. This dashboard will track contributor streaks, project health metrics, and automate 'Top Contributor' awards.",
    goals: [
      "Fetch and normalize real-time data using GitHub GraphQL API",
      "Create interactive heatmaps for contribution activity",
      "Automate Discord/Twitter announcements for merged PR milestones"
    ]
  },
  {
    title: "CodeHarborHub CLI & Dev-Toolkit",
    difficulty: "Medium",
    size: "175 Hours",
    topics: ["CLI", "DevTools", "Automation"],
    techStack: ["Node.js", "Commander.js", "Inquirer", "ShellJS"],
    mentors: ["Ajay Dhangar", "TBD"],
    description: "Develop a unified command-line interface (CLI) to help contributors bootstrap projects, check for best practices, and submit issues directly from their terminal.",
    goals: [
      "Build a project scaffolding engine for CodeHarborHub templates",
      "Integrate local 'Good First Issue' finder via GitHub API",
      "Implement automated code-quality checks before PR submission"
    ]
  },
  {
    title: "Interactive Open Source Playground",
    difficulty: "Hard",
    size: "350 Hours",
    topics: ["WebContainers", "Education", "Frontend"],
    techStack: ["React", "WebContainer API", "Vite", "Tailwind"],
    mentors: ["TBD"],
    description: "Create an in-browser development environment that allows new contributors to run CodeHarborHub projects without cloning repositories locally.",
    goals: [
      "Utilize StackBlitz WebContainers to run Node.js in the browser",
      "Build a side-by-side tutorial and editor layout",
      "Implement a 'One-click PR' feature from the browser sandbox"
    ]
  },
  {
    title: "Documentation-as-Code (DaC) Engine",
    difficulty: "Easy",
    size: "175 Hours",
    topics: ["Docs", "Automation", "Workflow"],
    techStack: ["Docusaurus", "Markdown", "GitHub Actions", "Python"],
    mentors: ["TBD"],
    description: "Automate the generation of technical documentation by extracting comments and architecture patterns directly from the codebase into Docusaurus pages.",
    goals: [
      "Develop a parser to convert JSDoc/Docstrings to Docusaurus MDX",
      "Create a visual 'Architecture Map' generator for our repositories",
      "Implement automated broken link and grammar checks in CI/CD"
    ]
  }
];

export default function GSoC2026() {
  return (
    <Layout
      title="GSoC 2026 - CodeHarborHub"
      description="Join CodeHarborHub for Google Summer of Code 2026. Explore project ideas in AI, Real-time systems, and Open Source Tooling."
    >
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <main className="padding-vert--xl">
        {/* Header Hero */}
        <div className="container text--center margin-bottom--xl">
          <div className={clsx("shadow--lw", style.gsocHero)} style={{
            background: 'linear-gradient(135deg, #1e40af 0%, #7e22ce 100%)',
            color: 'white',
            borderRadius: '20px',
            padding: '5rem 2rem'
          }}>
            <Heading as="h1" style={{ fontSize: '3.5rem', fontWeight: '900', letterSpacing: '-1px' }}>
              Google Summer of Code 2026
            </Heading>
            <p className="text-[1.2rem]" style={{ opacity: 0.9, maxWidth: '800px', margin: '1rem auto' }}>
              Join CodeHarborHub to build developer tools, collaborative platforms, and AI-driven educational resources. 
              Help us empower the next generation of open-source contributors.
            </p>
            <div className="margin-top--lg flex justify-center gap-3">
              <a className="button button--secondary button--lg" href="#projects">View Project Ideas</a>
              <a className="button button--outline button--lg" style={{ color: 'white', borderColor: 'white' }} href="#">Join Discord</a>
              {/* https://discord.gg/codeharborhub */}
            </div>           
          </div>
        </div>

        {/* Success Guide */}
        <div className="container">
          <div className="row margin-bottom--xl">
            <div className="col col--12">
              <div className="card shadow--md" style={{ borderTop: '6px solid #2563eb', borderRadius: '12px' }}>
                <div className="card__body">
                  <div className="row align-items--center">
                    <div className="col col--7">
                      <Heading as="h2">Candidate Success Roadmap</Heading>
                      <p>GSoC is highly competitive. We evaluate contributors based on their technical skills, communication, and community involvement.</p>
                      <div className="row">
                        <div className="col col--6">
                          <ul className="text--sm">
                            <li>🎯 <strong>Active Participation:</strong> Join Discord and introduce yourself.</li>
                            <li>🛠️ <strong>Code Contributions:</strong> Submit at least 2 quality PRs to our repos.</li>
                          </ul>
                        </div>
                        <div className="col col--6">
                          <ul className="text--sm">
                            <li>📝 <strong>Solid Proposals:</strong> Follow our template and define clear milestones.</li>
                            <li>🤝 <strong>Mentorship:</strong> Be open to feedback during the drafting phase.</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col col--5 text--center">
                       <div style={{ padding: '2rem', background: 'var(--ifm-color-emphasis-100)', borderRadius: '12px' }}>
                          <Heading as="h4">Application Deadline</Heading>
                          <p className="text--bold text--primary" style={{ fontSize: '1.2rem' }}>March 2026 (TBA)</p>
                          <small>Follow the official GSoC timeline for exact dates.</small>
                       </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <hr className={style.home__hr} />

          {/* Projects Grid */}
          <div id="projects" className="padding-top--lg">
            <div className={style.home__divider}>
              <Heading as="h2" className="text--center" style={{ fontSize: '2.5rem', fontWeight: '800' }}>
                Explore Project Ideas
              </Heading>
              <p className="text--center text--muted margin-bottom--xl" style={{ fontSize: '1.1rem' }}>
                Find a project that matches your passion. We offer mentorship across various domains.
              </p>
            </div>

            <div className="row">
              {PROJECT_DATA.map((project, idx) => (
                <div key={idx} className="col col--6 margin-bottom--lg">
                  <div className={clsx("card shadow--md h-100", style.projectCard)}>
                    <div className="card__header">
                      <div className="row">
                        <div className="col col--8">
                          <span className={clsx("badge margin-bottom--sm", 
                            project.difficulty === 'Hard' ? 'badge--danger' : 
                            project.difficulty === 'Medium' ? 'badge--warning' : 'badge--success'
                          )}>
                            {project.difficulty}
                          </span>
                        </div>
                        <div className="col col--4 text--right text--sm text--muted">
                          <strong>{project.size}</strong>
                        </div>
                      </div>
                      <Heading as="h3" className="text--primary">{project.title}</Heading>
                    </div>
                    <div className="card__body">
                      <p className="text--italic">{project.description}</p>
                      <Heading as="h4" style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--ifm-color-emphasis-700)' }}>
                        Project Goals:
                      </Heading>
                      <ul className="text--sm padding-left--md">
                        {project.goals.map((goal, gIdx) => (
                          <li key={gIdx} className="margin-bottom--xs">{goal}</li>
                        ))}
                      </ul>
                      <div className="margin-top--md">
                        {project.techStack.map(tech => (
                          <span key={tech} style={{ 
                            fontSize: '0.65rem', 
                            padding: '2px 8px', 
                            border: '1px solid var(--ifm-color-emphasis-300)',
                            borderRadius: '4px',
                            marginRight: '4px',
                            display: 'inline-block'
                          }}>{tech}</span>
                        ))}
                      </div>
                    </div>
                    <div className="card__footer" style={{ background: 'var(--ifm-color-emphasis-100)', borderRadius: '0 0 12px 12px' }}>
                      <div className="row align-items--center">
                        <div className="col col--6">
                          <small><strong>Topics:</strong> {project.topics.join(", ")}</small>
                        </div>
                        <div className="col col--6 text--right">
                          <small><strong>Mentors:</strong> {project.mentors.join(", ")}</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action Footer */}
        <div className="container text--center padding-vert--xl">
          <div className="card padding--xl shadow--lw" style={{ borderRadius: '20px' }}>
            <Heading as="h2">Have a Custom Project Idea?</Heading>
            <p className="margin-bottom--lg">We welcome innovative proposals that align with our mission to empower developers.</p>
            <div className="flex justify-center gap-4">
               <a href="mailto:ajaydhangar49@gmail.com" className="button button--primary button--lg">Send Proposal Draft</a>
               <span className="margin-horiz--md"></span>
               <a href="https://github.com/codeharborhub" className="button button--outline button--secondary button--lg">Explore Repositories</a>
            </div>
          </div>
        </div>

        <ScrollTopToButton />
        <ScrollBottomToTop />
      </main>
    </Layout>
  );
}