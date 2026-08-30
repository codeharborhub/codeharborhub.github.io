---
id: project-1-responsive-landing-page
title: "Responsive Product Landing Page"
sidebar_label: "Project 1"
sidebar_position: 1
description: "Build a production-ready, mobile-first responsive landing page integrating modern CSS Grid, Flexbox, fluid typography, and dynamic CSS custom properties."
tags:
  - CSS
  - Responsive Design
  - Flexbox
  - CSS Grid
  - Projects
  - CodeHarborHub
---

In this hands-on project, you will consolidate your layout, typography, and responsive design skills by building a complete **Responsive Product Landing Page**. 

You will structure the page using semantic HTML5 elements and style it with mobile-first CSS breakpoints, fluid typography scaling using `clamp()`, and reusable CSS custom properties.

## Technical Specifications & Requirements

Before diving into the implementation, review the core engineering requirements for this project:

1. **Mobile-First Responsive Layout:**
   * Single-column layout by default for mobile viewports.
   * Flexbox navigation header that transitions to a full bar layout on desktop screens.
   * Multi-column CSS Grid layout for feature cards triggered via modern Range Syntax media queries (`@media (width >= 768px)`).

2. **Fluid Typography & Tokens:**
   * Centralized CSS Custom Properties defined on `:root` for colors, spacing, and font stacks.
   * Dynamic heading sizes scaled seamlessly using `clamp(1.75rem, 5vw, 3rem)` to eliminate abrupt text resizing across breakpoints.

3. **Interactive Components:**
   * Reusable BEM-styled button variants (`.btn--primary`, `.btn--outline`, `.btn--lg`).
   * Feature cards equipped with subtle transform animations (`translateY`) and smooth focus/hover transitions.

## Interactive Project Implementation

Test and inspect the live production solution below. You can toggle between HTML and CSS tabs to see how the layout rules and custom property tokens work together.


<CodePreview
  defaultHtml={`<div class="landing-page">
  <!-- Header Component -->
  <header class="header">
    <div class="header__logo">DevScale</div>
    <nav class="header__nav">
      <a href="#features">Features</a>
      <a href="#docs">Docs</a>
    </nav>
  </header>

  <!-- Hero Section -->
  <section class="hero">
    <h1 class="hero__title">Build Faster Layouts</h1>
    <p class="hero__subtitle">A modern development framework leveraging fluid design, container components, and atomic custom utility structures.</p>
    <div class="hero__actions">
      <button class="btn btn--primary btn--lg">Get Started</button>
      <button class="btn btn--outline btn--lg">Live Demo</button>
    </div>
  </section>

  <!-- Feature Grid -->
  <section id="features" class="features">
    <div class="feature-card">
      <div class="feature-card__icon">⚡</div>
      <h3>Fluid Type</h3>
      <p>Typography scaling rules using native clamp rules instead of excessive breakdown items.</p>
    </div>
    <div class="feature-card">
      <div class="feature-card__icon">🎨</div>
      <h3>Theme Layers</h3>
      <p>Dynamic design scoping engine driven strictly through customized global variables.</p>
    </div>
    <div class="feature-card">
      <div class="feature-card__icon">📦</div>
      <h3>BEM Layout</h3>
      <p>Maintainable structural scopes optimized for predictable application styles.</p>
    </div>
  </section>
</div>`}
  defaultCss={`/* 1. Root Variables Setup */
:root {
  --bg-main: #0f172a;
  --bg-card: #1e293b;
  --text-primary: #ffffff;
  --text-muted: #94a3b8;
  --border: #334155;
  --accent: #2563eb;
  --accent-hover: #1d4ed8;
  --radius: 8px;
}

/* 2. Page Reset & Base Styles */
.landing-page {
background-color: var(--bg-main);
color: var(--text-primary);
padding: 1.5rem;
font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
border-radius: var(--radius);
box-sizing: border-box;
}

/* 3. Header Component */
.header {
display: flex;
justify-content: space-between;
align-items: center;
padding-bottom: 1.5rem;
border-bottom: 1px solid var(--border);
}

.header__logo {
font-weight: 800;
font-size: 1.25rem;
color: #38bdf8;
letter-spacing: -0.02em;
}

.header__nav {
display: flex;
align-items: center;
gap: 1rem;
}

.header__nav a {
color: var(--text-muted);
text-decoration: none;
font-size: 0.9rem;
transition: color 0.2s ease;
}

.header__nav a:hover {
color: var(--text-primary);
}

/* 4. Hero Section & Fluid Typography */
.hero {
text-align: center;
padding: 3.5rem 1rem;
max-width: 800px;
margin: 0 auto;
}

.hero__title {
font-size: clamp(1.75rem, 5vw, 3rem);
font-weight: 800;
line-height: 1.2;
margin-bottom: 1rem;
background: linear-gradient(135deg, #38bdf8, #818cf8);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
}

.hero__subtitle {
font-size: clamp(0.95rem, 2vw, 1.2rem);
color: var(--text-muted);
margin-bottom: 2rem;
line-height: 1.6;
}

.hero__actions {
display: flex;
justify-content: center;
gap: 1rem;
flex-wrap: wrap;
}

/* 5. Button System */
.btn {
padding: 0.6rem 1.2rem;
border-radius: 6px;
font-weight: 600;
border: none;
cursor: pointer;
transition: all 0.2s ease;
}

.btn--primary {
background-color: var(--accent);
color: #ffffff;
}

.btn--primary:hover {
background-color: var(--accent-hover);
}

.btn--outline {
background-color: transparent;
color: var(--text-primary);
border: 1px solid var(--border);
}

.btn--outline:hover {
background-color: var(--bg-card);
}

.btn--lg {
padding: 0.8rem 1.6rem;
font-size: 1rem;
}

/* 6. Feature Grid (Mobile-First Single Column) */
.features {
display: grid;
grid-template-columns: 1fr;
gap: 1.5rem;
margin-top: 2rem;
}

.feature-card {
background-color: var(--bg-card);
padding: 1.5rem;
border-radius: var(--radius);
border: 1px solid var(--border);
transition: transform 0.3s ease, border-color 0.3s ease;
}

.feature-card:hover {
transform: translateY(-4px);
border-color: #38bdf8;
}

.feature-card__icon {
font-size: 2rem;
margin-bottom: 0.75rem;
}

.feature-card h3 {
margin: 0 0 0.5rem 0;
color: #38bdf8;
}

.feature-card p {
margin: 0;
color: var(--text-muted);
font-size: 0.9rem;
line-height: 1.5;
}

/* 7. Media Queries (Desktop Viewport Expansion) */
@media (width >= 768px) {
.features {
grid-template-columns: repeat(3, 1fr);
}
}`}
  height="480px"
/>

## Code Breakdown & Architectural Insights

### 1. Fluid Typography Scaling

Instead of writing multiple `@media` rules to change `font-size` for small, medium, and large screens, we use the `clamp()` function:

```css
.hero__title {
  font-size: clamp(1.75rem, 5vw, 3rem);
}

```

* **Minimum Limit (`1.75rem`):** Ensures the title never becomes unreadably small on mobile devices.
* **Preferred Value (`5vw`):** Scales smoothly relative to 5% of the viewport width.
* **Maximum Limit (`3rem`):** Prevents text from becoming oversized on ultra-wide desktop monitors.

### 2. Modern Range Media Queries

Notice the updated media query syntax used in the CSS implementation:

```css
/* Modern Range Media Query */
@media (width >= 768px) {
  .features {
    grid-template-columns: repeat(3, 1fr);
  }
}

```

This replacing the traditional syntax (`@media (min-width: 768px)`) provides cleaner reading and aligns directly with mathematical logical comparisons.

## Key Takeaways

* Mobile-first architecture ensures faster initial rendering and simpler layout overrides.
* CSS Custom Properties (`var(--name)`) provide a single source of truth for color and spacing themes.
* Combining Flexbox for 1D alignments (header and buttons) with CSS Grid for 2D layouts (features grid) creates robust, maintenance-friendly web pages.