---
id: introduction
title: Modern CSS
sidebar_label: CSS Course Overview
sidebar_position: 1
slug: /css
description: This course is designed to help you master modern CSS techniques and concepts, from foundational selectors to advanced layout systems and responsive design.
tags: [css, web development, frontend, responsive design, layout, selectors, typography]
---

Welcome to the **Modern CSS Mastery Course** on CodeHarborHub. This curriculum transforms how you design and build for the web by focusing on how browser rendering engines calculate layouts, manage cascade rules, and render visual components.

Rather than relying on framework abstractions or quick hacks, this course helps you develop deep mental models for native CSS features—from foundational selectors to dynamic CSS custom properties and 2D/3D visual transforms.

---

## Interactive Learning Experience

Every concept in this course is paired with live, hands-on code environments. You can tweak properties, experiment with values, and observe real-time layout updates directly in your browser.

<CodePreview
  defaultHtml={`<div class="hero-card">
  <h2>Welcome to CodeHarborHub</h2>
  <p>Edit the CSS variables below to customize this component live!</p>
  <button class="btn">Explore Course</button>
</div>`}
  defaultCss={`:root {
  --primary-color: #2563eb;
  --accent-color: #3b82f6;
  --text-color: #ffffff;
  --radius: 12px;
}

.hero-card {
  background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
  color: var(--text-color);
  padding: 2rem;
  border-radius: var(--radius);
  font-family: system-ui, sans-serif;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

.hero-card h2 {
  margin-bottom: 0.5rem;
  font-size: 1.5rem;
}

.hero-card p {
  opacity: 0.9;
  margin-bottom: 1.25rem;
}

.btn {
  background-color: #ffffff;
  color: var(--primary-color);
  border: none;
  padding: 0.6rem 1.2rem;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.btn:hover {
  transform: translateY(-2px);
}`}
  height="340px"
/>

---

## What You Will Learn

* **Rendering Engine Mechanics:** Understand DOM and CSSOM parsing, paint cycles, GPU layer creation, and browser rendering pipelines.
* **Layout Systems:** Build robust, flex-based, and multi-dimensional grid structures using CSS Grid and Flexbox without utility clutter.
* **Architecture & Specificity:** Master the cascade algorithm, specificity calculation rules, inheritance propagation, and native CSS layers (`@layer`).
* **Modern Responsive Design:** Transition from static media queries to modern content-aware container queries and dynamic fluid typography.

---

## Course Curriculum Breakdown

| Module | Lecture Title | Core Learning Objective |
| :--- | :--- | :--- |
| **Module 1: Foundations** | Lecture 1: What is CSS & How it Works | DOM tree generation, CSSOM, and rendering engine flow |
| | [Lecture 2: Parts of a CSS Rule](#) | Anatomical breakdown of selectors, declarations, properties, and values |
| | [Lecture 3: Types of CSS Rules](#) | Standard style rules vs. metadata directives and `@`-rules |
| | Lecture 4: The Cascade, Specificity & Inheritance | Specificity scoring math, cascade layers, and value inheritance |
| **Module 2: Selectors & Typography** | Lecture 5: CSS Selectors (Basic to Advanced) | Class, ID, attribute selectors, and relational combinators |
| | Lecture 6: Pseudo-Classes & Pseudo-Elements | Dynamic user state pseudo-classes and DOM insertion pseudo-elements |
| | Lecture 7: Typography & Text Styling | Web font integration via `@font-face`, line heights, and fluid sizing |
| **Module 3: Box Model & Layouts** | Lecture 8: The CSS Box Model | Content-box vs. border-box sizing calculations and margin collapsing |
| | Lecture 9: Display & Positioning | Document flow context, absolute/relative offsets, and sticky placement |
| | Lecture 10: Flexbox Masterclass | Axis distributions, alignment properties, and flex item shrink/grow logic |
| | Lecture 11: CSS Grid Architecture | Two-dimensional template areas, track sizing, and auto-fit placement |
| **Module 4: Modern CSS** | Lecture 12: CSS Custom Properties | Scoped variables, dynamic runtime overrides, and dark mode themes |
| | Lecture 13: Responsive Design & Media Queries | Mobile-first breakpoints, viewport units, and container queries |
| | Lecture 14: Transitions, Transforms & Animations | Keyframe definitions, GPU hardware acceleration, and timing functions |

---

## Prerequisites

Before taking this course, you should have a basic understanding of:
1. **HTML Fundamentals:** Document structure, tags, attributes, and basic semantic elements.
2. **Text Editor Familiarity:** Basic experience writing code in VS Code or similar development environments.
3. **Browser DevTools:** Knowing how to right-click an element and select **Inspect** to view styles live.

:::info Recommended Learning Path
Work through the lectures sequentially. Each lesson builds upon the rendering concepts established in prior modules.
:::


<div style={{ marginTop: '2rem', textAlign: 'center' }}>
  <a class="button button--primary button--lg" href="/courses/category/module-1-foundations">Start Course: Lecture 1 →</a>
</div>