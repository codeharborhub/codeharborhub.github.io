---
id: module-6-capstone-assessment
title: "Module 6: Capstone Assessment & Final Review"
sidebar_label: "Module 6 Capstone"
sidebar_position: 4
description: "Test your mastery of modern CSS with a comprehensive capstone assessment covering layout engines, modern state selectors, responsive design strategies, and design system architecture."
tags:
  - CSS
  - Capstone
  - Assessment
  - Practical Projects
  - CodeHarborHub
---

Congratulations on completing the practical projects in **Module 6**! This final capstone assessment evaluates your mastery of advanced CSS layout systems, responsive design principles, modern selector features, and scalable design system architecture.

## Technical Knowledge Review

### Part 1: Core Architectural Concepts

#### 1. Layout Engine Selection Matrix
Choosing the right CSS layout engine is critical for writing clean, maintainable stylesheets.

| Requirement | Best Choice | Rationale |
| :--- | :--- | :--- |
| **1D Directional Flow** | Flexbox | Ideal for single-row or single-column alignments (e.g., navigation bars, action buttons). |
| **2D Page Shell / App Grid** | CSS Grid (`grid-template-areas`) | Unifies rows and columns under explicit semantic region names. |
| **Fluid Grid Item Scaling** | CSS Grid (`auto-fit` + `minmax()`) | Creates responsive multi-column layouts without manual media query breakpoints. |
| **Overlapping Layers** | CSS Grid / Absolute Position | Grid allows multiple children to occupy the same grid area without taking elements out of normal flow. |

#### 2. Modern CSS Selectors & Features
* **Parent & State Selection (`:has()`):** Allows parent element styling based on child states (e.g., updating theme variables when a checkbox is checked).
* **Keyboard Focus Management (`:focus-visible`):** Restricts focus indicators strictly to keyboard navigation (<kbd>Tab</kbd>), keeping mouse interactions clean.
* **Aspect Ratio Preservation (`aspect-ratio`):** Replaces historic padding hacks with native aspect ratio enforcement.

## Interactive Capstone Project Challenge

In this final challenge, you will implement a **Production Card & Modal Layout** incorporating all Module 6 techniques: CSS Grid placement, custom property tokens, zero-JS state toggling using `:has()`, and responsive media query adaptations.

<CodePreview
  defaultHtml={`<!-- Interactive Capstone UI Challenge -->
<div class="capstone-app">
  <!-- Theme & Overlay Controller -->
  <input type="checkbox" id="modal-toggle" class="modal-toggle-state" hidden>

  <!-- Main Showcase Workspace -->
  <div class="capstone-shell">
    <header class="capstone-header">
      <h2>Module 6 Certification Challenge</h2>
      <label for="modal-toggle" class="btn btn--primary">
        Preview Component Spec
      </label>
    </header>

    <!-- Auto-Responsive Grid Cards -->
    <div class="capstone-grid">
      <article class="card">
        <div class="card__badge">Grid Layout</div>
        <h3 class="card__title">2D App Shells</h3>
        <p class="card__body">Master complex layouts using grid-template-areas and fluid columns.</p>
        <div class="card__footer">
          <span class="status status--complete">Completed</span>
        </div>
      </article>

      <article class="card">
        <div class="card__badge">Design Systems</div>
        <h3 class="card__title">Token Architecture</h3>
        <p class="card__body">Manage global variables, light/dark themes, and component scopes.</p>
        <div class="card__footer">
          <span class="status status--complete">Completed</span>
        </div>
      </article>

      <article class="card">
        <div class="card__badge">Modern CSS</div>
        <h3 class="card__title">State Selectors</h3>
        <p class="card__body">Implement zero-JS interaction patterns using CSS :has() selectors.</p>
        <div class="card__footer">
          <span class="status status--active">In Progress</span>
        </div>
      </article>
    </div>
  </div>

  <!-- Accessible Modal Overlay -->
  <div class="modal-backdrop">
    <div class="modal-dialog">
      <div class="modal-header">
        <h4>Assessment Checklist</h4>
        <label for="modal-toggle" class="modal-close">&times;</label>
      </div>
      <div class="modal-body">
        <ul>
          <li>✓ Modern Flexbox and CSS Grid structure</li>
          <li>✓ Fluid typography and auto-fit minmax strategy</li>
          <li>✓ Pure CSS modal trigger via :has() selector</li>
        </ul>
      </div>
      <div class="modal-footer">
        <label for="modal-toggle" class="btn btn--secondary">Close Window</label>
      </div>
    </div>
  </div>
</div>`}
  defaultCss={`/* 1. CSS Custom Properties / Design Tokens */
:root {
  --cap-bg: #0f172a;
  --cap-surface: #1e293b;
  --cap-border: #334155;
  --cap-text: #f8fafc;
  --cap-muted: #94a3b8;
  --cap-primary: #3b82f6;
  --cap-primary-hover: #2563eb;
  --cap-success: #10b981;
  --cap-warning: #f59e0b;
  --cap-radius: 8px;
}

/* 2. Base Container Shell */
.capstone-app {
  position: relative;
  background-color: var(--cap-bg);
  color: var(--cap-text);
  padding: 1.5rem;
  font-family: system-ui, -apple-system, sans-serif;
  border-radius: var(--cap-radius);
  min-height: 420px;
}

.capstone-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--cap-border);
  padding-bottom: 1rem;
  margin-bottom: 1.5rem;
}

.capstone-header h2 {
  margin: 0;
  font-size: 1.2rem;
}

/* 3. Fluid Auto-Fit Card Grid */
.capstone-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.25rem;
}

.card {
  background-color: var(--cap-surface);
  border: 1px solid var(--cap-border);
  border-radius: var(--cap-radius);
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.card__badge {
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--cap-primary);
  font-weight: 700;
}

.card__title {
  margin: 0;
  font-size: 1.05rem;
}

.card__body {
  margin: 0;
  font-size: 0.85rem;
  color: var(--cap-muted);
  line-height: 1.4;
  flex-grow: 1;
}

.card__footer {
  padding-top: 0.5rem;
  border-top: 1px solid var(--cap-border);
}

.status {
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
}

.status--complete {
  background-color: rgba(16, 185, 129, 0.15);
  color: var(--cap-success);
}

.status--active {
  background-color: rgba(245, 158, 11, 0.15);
  color: var(--cap-warning);
}

/* 4. Action Buttons */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 0.9rem;
  font-size: 0.85rem;
  font-weight: 600;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn--primary {
  background-color: var(--cap-primary);
  color: #ffffff;
}

.btn--primary:hover {
  background-color: var(--cap-primary-hover);
}

.btn--secondary {
  background-color: transparent;
  color: var(--cap-text);
  border: 1px solid var(--cap-border);
}

/* 5. Zero-JS Modal Overlay via :has Selector */
.modal-backdrop {
  position: absolute;
  inset: 0;
  background-color: rgba(15, 23, 42, 0.8);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
  border-radius: var(--cap-radius);
}

.modal-dialog {
  background-color: var(--cap-surface);
  border: 1px solid var(--cap-border);
  border-radius: var(--cap-radius);
  width: 90%;
  max-width: 400px;
  padding: 1.25rem;
  transform: translateY(-10px);
  transition: transform 0.3s ease;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
}

.modal-header h4 {
  margin: 0;
}

.modal-close {
  cursor: pointer;
  font-size: 1.2rem;
  color: var(--cap-muted);
}

.modal-body ul {
  padding-left: 1.2rem;
  margin: 0 0 1rem 0;
  font-size: 0.85rem;
  color: var(--cap-muted);
}

.modal-body li {
  margin-bottom: 0.4rem;
}

.modal-footer {
  display: flex;
  justify-content: flex-end;
}

/* Trigger Modal State using :has() */
.capstone-app:has(.modal-toggle-state:checked) .modal-backdrop {
  opacity: 1;
  pointer-events: auto;
}

.capstone-app:has(.modal-toggle-state:checked) .modal-dialog {
  transform: translateY(0);
}`}
  height="480px"
/>

## Final Self-Assessment Checklist

Verify your readiness before moving on to advanced frameworks or real-world deployment:

* Can build 2D Application layouts using `grid-template-areas`.
* Understand the operational difference between `auto-fit` and `auto-fill` inside `minmax()` column rules.
* Know how to structure design systems with modular CSS variables and BEM naming architecture.
* Familiar with modern state-driven selectors like `:has()` and accessible focus rings via `:focus-visible`.