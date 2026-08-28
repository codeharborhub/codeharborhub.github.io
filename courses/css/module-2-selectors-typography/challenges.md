---
id: challenges
title: "Practical Tasks & Code Challenges"
sidebar_label: "Module 2 Challenges"
sidebar_position: 4
description: "Hands-on CSS tasks and debugging challenges to master modern selectors, typography optimization, fluid clamping, and pseudo-class state management."
tags:
  - CSS
  - Challenges
  - Selectors
  - Typography
  - CodeHarborHub
---

Test your mastery of CSS selectors, typography scaling, attribute matching, and pseudo-elements with three production-grade engineering challenges.

## Challenge 1: Relational Target & Zero Specificity Overrides

### Problem Statement

You are maintaining a component library UI. A developer set default link styles using standard classes (`.card a`), which created high specificity and broke a low-priority reset designed to strip styles from buttons using `:where()`. Furthermore, cards containing external links need a highlighted border using `:has()`.

### Buggy Code Snippet

```css
/* High specificity rule overriding low-priority reset */
.card a {
  color: #2563eb;
  text-decoration: underline;
}

/* This reset rule fails to apply due to zero specificity! */
:where(.card) a.btn-reset {
  color: inherit;
  text-decoration: none;
}
```

### Task Requirements

1. Refactor the navigation links so that default typography reset styles inside `:where()` work without adding `!important`.
2. Target all links whose `href` attribute starts with `https://` and append an inline indicator (`↗`) using `::after`.
3. Use the relational parent pseudo-class `:has()` to apply a `2px solid #38bdf8` border to any `.card` container that encloses an external link.

### Implementation Strategy

* **Zero Specificity Reset:** Keep base styles inside `:where(a)` or lowering the card anchor selector specificity allows `:where()` defaults to override gracefully when structured properly.
* **Attribute Substring Matcher (`^=`):** Use `a[href^="https://"]` to filter protocol links.
* **Relational Parent (`:has()`):** Use `.card:has(a[href^="https://"])` to detect nested DOM structures dynamically without JavaScript.

```css
/* 1. Low specificity reset */
:where(.card) a {
  color: inherit;
  text-decoration: none;
}

/* 2. Target specific link types cleanly */
.card a.link-active {
  color: #2563eb;
  text-decoration: underline;
}

/* 3. External link generated content */
a[href^="https://"]::after {
  content: " ↗";
  font-size: 0.85em;
}

/* 4. Parent selection based on children */
.card:has(a[href^="https://"]) {
  border: 2px solid #38bdf8;
}
```

## Challenge 2: Fluid Typography & State Micro-Interactions

### Goal

Implement a responsive card with fluid typography using `clamp()`, unitless line height, and accessible keyboard focus state micro-interactions.

### Requirements

1. Set the card title `<h1>` to scale dynamically between 1.5rem (min) and 2.5rem (max), with a preferred fluid width calculation of 4vw.
2. Apply a unitless `line-height: 1.25` for the title and `1.6` for the body text.
3. Configure button focus states using `:focus-visible` to display an offset outline ring (`3px solid #38bdf8`, `outline-offset: 3px`) when navigated via keyboard.
4. Style the first paragraph inside the card body as a lead paragraph using `:first-of-type` with `font-size: 1.1rem` and `color: #cbd5e1`.

## Interactive Coding Lab

Refactor and debug the live sandbox below to complete all challenge requirements.

<CodePreview
defaultHtml={`
<div class="challenge-wrapper">
  <!-- Card 1: Internal Link (Should NOT trigger :has() border change) -->
  <div class="card">
    <h2 class="card-title">Internal Navigation</h2>
    <p class="card-body">This is the lead paragraph acting as the main summary for the internal card component.</p>
    <p class="card-body">This is a secondary paragraph containing an <a href="/dashboard">internal dashboard link</a>.</p>
    <div class="card-actions">
      <a href="#view" class="btn-link">View Details</a>
      <button class="btn-reset">Reset</button>
    </div>
  </div>

  <!-- Card 2: External Link (Should trigger :has() border change and ↗ indicator) -->
  <div class="card">
    <h2 class="card-title">External Resources</h2>
    <p class="card-body">This is the lead paragraph acting as the main summary for the external resource component.</p>
    <p class="card-body">Discover advanced layouts by reading the documentation on the <a href="https://mozilla.org">MDN Web Docs</a> website.</p>
    <div class="card-actions">
      <a href="https://css-tricks.com" class="btn-link">Explore CSS</a>
      <button class="btn-reset">Dismiss</button>
    </div>
  </div>
</div>
`}
defaultCss={`

/* Base Container Styling */
.challenge-wrapper {
display: grid;
gap: 1.5rem;
padding: 1rem;
background-color: #0f172a;
font-family: system-ui, -apple-system, sans-serif;
}

.card {
background-color: #1e293b;
border: 1px solid #334155;
padding: 1.5rem;
border-radius: 10px;
color: #f8fafc;
}

/* TASK 1.3: Apply border to card IF it contains an external link (https://) /
/ Write the :has() selector here */

/* TASK 2.1 & 2.2: Fluid Title with clamp() and unitless line-height /
.card-title {
/ Replace static font-size with clamp(1.5rem, 4vw, 2.5rem) */
font-size: 1.5rem;
line-height: 1.5;
margin-top: 0.5rem;
margin-bottom: 0.75rem;
color: #ffffff;
}

/* TASK 2.4: Target first paragraph as lead copy */
.card-body:first-of-type {
font-size: 1.1rem;
color: #cbd5e1;
line-height: 1.6;
}

.card-body {
font-size: 0.95rem;
line-height: 1.6;
color: #94a3b8;
}

/* TASK 1.2: Add external link indicator with ::after and ^= */
a[href^="https://"]::after {
content: " ↗";
color: #38bdf8;
}

/* Action Buttons & Focus States */
.card-actions {
display: flex;
gap: 1rem;
margin-top: 1.25rem;
}

.btn-link, .btn-reset {
padding: 0.5rem 1rem;
border-radius: 6px;
font-size: 0.875rem;
font-weight: 600;
text-decoration: none;
display: inline-block;
transition: all 0.2s ease;
}

.btn-link {
background-color: #2563eb;
color: #ffffff;
}

.btn-reset {
background-color: #334155;
color: #f8fafc;
}

/* TASK 2.3: Keyboard accessibility focus-visible ring */
.btn-link:focus-visible,
.btn-reset:focus-visible {
outline: 3px solid #38bdf8;
outline-offset: 3px;
}`}
height="460px"
/>

## Challenge Verification Matrix

|Challenge |	Target Objective |	Verification Step |
|---|---|---|
|Relational Parent|Style `.card` based on nested external link| Card 1 displays a `#38bdf8` border; Card 2 does not |
|Attribute Matcher|Append `↗` icon to HTTPS links automatically|External link displays generated text node via `::after`|
|Fluid Clamp |`clamp(1.5rem, 4vw, 2.5rem)` |Resizing preview pane dynamically alters `<h1>` font size |
|Accessibility Focus| Focus ring on keyboard navigation | Pressing `Tab` renders an outlined indicator ring |
