import {
  Code2,
  FileCode2,
  LayoutTemplate,
  Sparkles,
} from "lucide-react";

import type {
  EditorTemplate,
} from "../components/Editor/types";

const starterProject = {
  id: "starter",
  name: "Starter",
  description:
    "A simple HTML, CSS and JavaScript project.",
  files: [
    {
      id: "starter-index",
      name: "index.html",
      language: "html" as const,
      value: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0"
  />
  <title>CodeHarborHub Editor</title>
</head>

<body>

  <main class="container">

    <span class="badge">
      CodeHarborHub
    </span>

    <h1>
      Build something amazing.
    </h1>

    <p>
      Edit the code and see your
      changes instantly.
    </p>

    <button id="helloButton">
      Click me
    </button>

    <p id="message"></p>

  </main>

</body>
</html>`,
    },

    {
      id: "starter-style",
      name: "style.css",
      language: "css" as const,
      value: `* {
  box-sizing: border-box;
}

body {
  margin: 0;
  min-height: 100vh;

  display: grid;
  place-items: center;

  background:
    radial-gradient(
      circle at top,
      rgba(46, 147, 226, 0.2),
      transparent 40%
    ),
    #07101d;

  color: white;

  font-family:
    Inter,
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    sans-serif;
}

.container {
  width: min(
    720px,
    calc(100% - 32px)
  );

  text-align: center;
}

.badge {
  display: inline-block;

  padding: 7px 12px;

  border-radius: 999px;

  background:
    rgba(46, 147, 226, 0.15);

  color: #65b9ff;

  font-size: 13px;
  font-weight: 800;
}

h1 {
  margin:
    20px 0 14px;

  font-size:
    clamp(42px, 8vw, 76px);

  line-height: 0.95;
  letter-spacing: -0.05em;
}

p {
  color: #9aa9bd;

  font-size: 18px;

  line-height: 1.7;
}

button {
  margin-top: 18px;

  padding:
    13px 20px;

  border: 0;
  border-radius: 12px;

  background: #2e93e2;
  color: white;

  font-weight: 800;

  cursor: pointer;

  transition:
    transform 180ms ease,
    filter 180ms ease;
}

button:hover {
  transform:
    translateY(-2px);

  filter:
    brightness(1.08);
}

#message {
  color: #62b7ff;
}`,
    },

    {
      id: "starter-script",
      name: "script.js",
      language: "javascript" as const,
      value: `const button =
  document.querySelector(
    "#helloButton"
  );

const message =
  document.querySelector(
    "#message"
  );

button?.addEventListener(
  "click",
  () => {
    message.textContent =
      "JavaScript is working! 🚀";

    console.log(
      "Button clicked successfully."
    );
  }
);`,
    },
  ],
};

const portfolioProject = {
  id: "portfolio",
  name: "Developer Portfolio",
  description:
    "A responsive developer portfolio starter.",
  files: [
    {
      id: "portfolio-index",
      name: "index.html",
      language: "html" as const,
      value: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />

  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0"
  />

  <title>Developer Portfolio</title>
</head>

<body>

<header class="header">

  <strong>
    DevPortfolio
  </strong>

  <nav>
    <a href="#projects">
      Projects
    </a>

    <a href="#contact">
      Contact
    </a>
  </nav>

</header>

<main>

<section class="hero">

  <span>
    FULL STACK DEVELOPER
  </span>

  <h1>
    I build modern
    digital experiences.
  </h1>

  <p>
    Building accessible,
    responsive and scalable
    web experiences.
  </p>

  <button id="contactButton">
    Contact me
  </button>

</section>

<section
  id="projects"
  class="projects"
>

  <h2>
    Featured Projects
  </h2>

  <div class="grid">

    <article>
      <h3>
        Project One
      </h3>

      <p>
        A modern web application.
      </p>
    </article>

    <article>
      <h3>
        Project Two
      </h3>

      <p>
        An open-source project.
      </p>
    </article>

    <article>
      <h3>
        Project Three
      </h3>

      <p>
        A developer tool.
      </p>
    </article>

  </div>

</section>

<section
  id="contact"
  class="contact"
>

  <h2>
    Let's build something.
  </h2>

  <p>
    Create your next project
    with CodeHarborHub.
  </p>

</section>

</main>

</body>
</html>`,
    },

    {
      id: "portfolio-style",
      name: "style.css",
      language: "css" as const,
      value: `* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;

  background: #070b14;

  color: white;

  font-family:
    Inter,
    system-ui,
    sans-serif;
}

.header {
  width:
    min(
      1100px,
      calc(100% - 40px)
    );

  margin: auto;

  padding: 24px 0;

  display: flex;

  justify-content:
    space-between;

  align-items: center;
}

.header nav {
  display: flex;
  gap: 20px;
}

.header a {
  color: #94a3b8;

  text-decoration: none;
}

.hero,
.projects,
.contact {
  width:
    min(
      1000px,
      calc(100% - 40px)
    );

  margin: auto;
}

.hero {
  padding:
    120px 0 100px;
}

.hero span {
  color: #2e93e2;

  font-weight: 800;

  letter-spacing:
    0.08em;
}

h1 {
  max-width: 850px;

  margin:
    18px 0;

  font-size:
    clamp(
      52px,
      9vw,
      100px
    );

  line-height: 0.9;

  letter-spacing:
    -0.06em;
}

.hero p {
  max-width: 620px;

  color: #94a3b8;

  font-size: 20px;

  line-height: 1.7;
}

button {
  margin-top: 20px;

  padding:
    14px 22px;

  border: 0;

  border-radius: 10px;

  background: #2e93e2;

  color: white;

  font-weight: 800;

  cursor: pointer;
}

.projects {
  padding:
    50px 0 100px;
}

.grid {
  display: grid;

  grid-template-columns:
    repeat(3, 1fr);

  gap: 18px;
}

article {
  padding: 26px;

  border:
    1px solid #1e293b;

  border-radius: 18px;

  background:
    #0d1421;
}

article p {
  color: #94a3b8;
}

.contact {
  padding:
    50px 0 120px;

  text-align: center;
}

.contact p {
  color: #94a3b8;
}

@media (max-width: 760px) {
  .header {
    width:
      calc(100% - 28px);
  }

  .grid {
    grid-template-columns:
      1fr;
  }

  .hero {
    padding-top: 80px;
  }
}`,
    },

    {
      id: "portfolio-script",
      name: "script.js",
      language: "javascript" as const,
      value: `const button =
  document.querySelector(
    "#contactButton"
  );

button?.addEventListener(
  "click",
  () => {
    document
      .querySelector("#contact")
      ?.scrollIntoView({
        behavior: "smooth",
      });

    console.log(
      "Contact section opened."
    );
  }
);`,
    },
  ],
};

const javascriptProject = {
  id: "javascript",
  name: "JavaScript App",
  description:
    "An interactive JavaScript counter.",
  files: [
    {
      id: "counter-index",
      name: "index.html",
      language: "html" as const,
      value: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />

  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0"
  />

  <title>JavaScript Counter</title>
</head>

<body>

  <main class="app">

    <span>
      JavaScript Playground
    </span>

    <h1 id="counter">
      0
    </h1>

    <div class="actions">

      <button id="decrease">
        −
      </button>

      <button id="reset">
        Reset
      </button>

      <button id="increase">
        +
      </button>

    </div>

  </main>

</body>
</html>`,
    },

    {
      id: "counter-style",
      name: "style.css",
      language: "css" as const,
      value: `* {
  box-sizing: border-box;
}

body {
  margin: 0;

  min-height: 100vh;

  display: grid;

  place-items: center;

  background: #080d18;

  color: white;

  font-family:
    system-ui,
    sans-serif;
}

.app {
  width:
    min(
      420px,
      calc(100% - 32px)
    );

  padding: 42px;

  text-align: center;

  border:
    1px solid #1e293b;

  border-radius: 24px;

  background:
    #101827;

  box-shadow:
    0 30px 80px
    rgba(0, 0, 0, 0.3);
}

.app span {
  color: #94a3b8;

  font-size: 14px;
}

#counter {
  margin:
    15px 0 30px;

  font-size: 90px;
}

.actions {
  display: flex;

  justify-content:
    center;

  gap: 10px;
}

button {
  min-width: 52px;

  padding:
    12px 16px;

  border: 0;

  border-radius: 10px;

  cursor: pointer;

  font-weight: 800;
}`,
    },

    {
      id: "counter-script",
      name: "script.js",
      language: "javascript" as const,
      value: `let count = 0;

const counter =
  document.querySelector(
    "#counter"
  );

function render() {
  counter.textContent =
    String(count);
}

document
  .querySelector("#increase")
  ?.addEventListener(
    "click",
    () => {
      count++;
      render();

      console.log(
        "Count:",
        count
      );
    }
  );

document
  .querySelector("#decrease")
  ?.addEventListener(
    "click",
    () => {
      count--;
      render();
    }
  );

document
  .querySelector("#reset")
  ?.addEventListener(
    "click",
    () => {
      count = 0;
      render();
    }
  );

render();`,
    },
  ],
};

export const editorTemplates: EditorTemplate[] =
  [
    {
      id: "starter",
      name: "Starter",
      description:
        "HTML, CSS and JavaScript starter.",
      icon: <Sparkles size={18} />,
      project: starterProject,
    },

    {
      id: "portfolio",
      name: "Portfolio",
      description:
        "Responsive developer portfolio.",
      icon: <LayoutTemplate size={18} />,
      project: portfolioProject,
    },

    {
      id: "javascript",
      name: "JavaScript App",
      description:
        "Interactive JavaScript application.",
      icon: <Code2 size={18} />,
      project: javascriptProject,
    },
  ];