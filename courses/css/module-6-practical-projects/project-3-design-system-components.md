---
id: project-3-design-system-components
title: "Project 3: Modular Design System Component Library"
sidebar_label: "Project 3"
sidebar_position: 3
description: Build a production-ready, modular CSS component library featuring design tokens, dark mode variants, interactive UI patterns, and accessibility primitives.
tags:
  - CSS
  - Design Systems
  - Design Tokens
  - BEM Architecture
  - Projects
  - CodeHarborHub
---

In this hands-on project, you will build a scalable, production-grade **Design System Component Library**. 

You will structure reusable CSS design primitives—including action controls, data display components, form controls, and feedback indicators—using Design Tokens, dynamic theme switching via `:has()`, and standard BEM syntax.

## Technical Specifications & Requirements

Review the core architectural and structural specifications for building this component library:

1. **Token-Driven Architecture:**
   * Global design tokens defined via `:root` CSS custom properties for spacing scale, color palettes, typography, and elevation shadows.
   * Scoped component tokens for fine-grained component override flexibility.

2. **Component Primitives Suite:**
   * **Buttons:** Multi-variant support (`primary`, `secondary`, `ghost`, `danger`) and state triggers (`:hover`, `:active`, `:focus-visible`).
   * **Cards:** Flexible structure featuring header, content body, and action footer zones.
   * **Forms:** Custom styled inputs, labels, and validation focus state treatments.
   * **Badges & Tags:** Semantic color indicators (`success`, `warning`, `info`, `danger`).

3. **Modern CSS Features & Accessibility:**
   * Modern state-driven theme switching using `:has()` selectors.
   * Clear `:focus-visible` outline rings for keyboard navigation compliance.

## Interactive Project Implementation

Inspect and test the modular component library system below:

<CodePreview
  defaultHtml={`<div class="ds-library">
  <!-- 2. Header and Dark Mode Switch -->
  <header class="ds-header">
    <h2>Design System Primitives</h2>
    <label class="ds-theme-toggle">
      <input type="checkbox" id="theme-switch" />
      <span>Dark Mode Mode (:has)</span>
    </label>
  </header>

  <!-- 3. Button Primitive Section -->
  <section class="ds-section">
    <div class="ds-section__title">Buttons (.ch-btn)</div>
    <div class="ds-row">
      <button class="ch-btn ch-btn--primary">Primary Action</button>
      <button class="ch-btn ch-btn--secondary">Secondary</button>
      <button class="ch-btn ch-btn--ghost">Ghost Outline</button>
      <button class="ch-btn ch-btn--danger">Danger Trigger</button>
      <button class="ch-btn ch-btn--primary" disabled>Disabled</button>
    </div>
  </section>

  <!-- 4. Badges Primitive Section -->
  <section class="ds-section">
    <div class="ds-section__title">Status Badges (.ch-badge)</div>
    <div class="ds-row">
      <span class="ch-badge ch-badge--info">Information</span>
      <span class="ch-badge ch-badge--success">Success</span>
      <span class="ch-badge ch-badge--warning">Warning State</span>
      <span class="ch-badge ch-badge--danger">Critical Error</span>
    </div>
  </section>

  <!-- 5. Form Controls Section -->
  <section class="ds-section">
    <div class="ds-section__title">Form Layouts</div>
    <div class="ds-form-group">
      <label class="ch-label" for="example-email">Account Email</label>
      <input class="ch-input" type="email" id="example-email" placeholder="you@domain.com" />
      <span class="ch-helper-text">Your system notifications map to this address.</span>
    </div>
  </section>

  <!-- 6. Composite Card Component -->
  <section class="ds-section">
    <div class="ds-section__title">Composite Components</div>
    <article class="ch-card">
      <header class="ch-card__header">
        <h3 class="ch-card__title">System Status Card</h3>
        <span class="ch-badge ch-badge--success">Active</span>
      </header>
      <div class="ch-card__body">
        <p>All pipeline runners are performing normally. No latency flags have been raised in the past 24 hours.</p>
      </div>
      <footer class="ch-card__footer">
        <button class="ch-btn ch-btn--ghost">Dismiss</button>
        <button class="ch-btn ch-btn--primary">View Metrics</button>
      </footer>
    </article>
  </section>
</div>`}
  defaultCss={`/* 1. Global System Tokens & Fallbacks */
:root {
  --ch-color-bg: #ffffff;
  --ch-color-surface: #f8fafc;
  --ch-color-border: #e2e8f0;
  --ch-color-text-main: #0f172a;
  --ch-color-text-muted: #64748b;

  --ch-color-primary: #2563eb;
  --ch-color-primary-hover: #1d4ed8;
  --ch-color-secondary: #475569;
  --ch-color-secondary-hover: #334155;
  --ch-color-danger: #dc2626;
  --ch-color-danger-hover: #b91c1c;

  --ch-color-info-bg: #dbeafe;
  --ch-color-info-text: #1e40af;
  --ch-color-success-bg: #dcfce7;
  --ch-color-success-text: #166534;
  --ch-color-warning-bg: #fef3c7;
  --ch-color-warning-text: #92400e;
  --ch-color-danger-bg: #fee2e2;
  --ch-color-danger-text: #991b1b;

  --ch-radius-sm: 4px;
  --ch-radius-md: 8px;
  --ch-shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --ch-shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  --ch-focus-ring: 0 0 0 3px rgba(37, 99, 235, 0.4);
}

/* Dynamic Dark Mode Override using Modern :has() Selector */
:has(#theme-switch:checked) {
  --ch-color-bg: #0f172a;
  --ch-color-surface: #1e293b;
  --ch-color-border: #334155;
  --ch-color-text-main: #f8fafc;
  --ch-color-text-muted: #94a3b8;

  --ch-color-info-bg: rgba(30, 64, 175, 0.3);
  --ch-color-info-text: #93c5fd;
  --ch-color-success-bg: rgba(22, 101, 52, 0.3);
  --ch-color-success-text: #86efac;
  --ch-color-warning-bg: rgba(146, 64, 14, 0.3);
  --ch-color-warning-text: #fde047;
  --ch-color-danger-bg: rgba(153, 27, 27, 0.3);
  --ch-color-danger-text: #fca5a5;
}

/* 2. Base Container Layout */
.ds-library {
  background-color: var(--ch-color-bg);
  color: var(--ch-color-text-main);
  padding: 1.5rem;
  font-family: system-ui, -apple-system, sans-serif;
  border-radius: var(--ch-radius-md);
  transition: background-color 0.3s ease, color 0.3s ease;
}

.ds-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--ch-color-border);
  padding-bottom: 1rem;
  margin-bottom: 1.5rem;
}

.ds-header h2 { margin: 0; font-size: 1.25rem; }

.ds-theme-toggle {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.85rem;
  cursor: pointer;
}

.ds-section {
  margin-bottom: 1.5rem;
}

.ds-section__title {
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--ch-color-text-muted);
  margin-bottom: 0.75rem;
}

.ds-row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.75rem;
}

/* 3. Button Primitive (.ch-btn) */
.ch-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  font-weight: 600;
  border-radius: var(--ch-radius-sm);
  border: 1px solid transparent;
  cursor: pointer;
  transition: all 0.2s ease;
}

.ch-btn:focus-visible {
  outline: none;
  box-shadow: var(--ch-focus-ring);
}

.ch-btn--primary {
  background-color: var(--ch-color-primary);
  color: #ffffff;
}
.ch-btn--primary:hover:not(:disabled) {
  background-color: var(--ch-color-primary-hover);
}

.ch-btn--secondary {
  background-color: var(--ch-color-secondary);
  color: #ffffff;
}
.ch-btn--secondary:hover:not(:disabled) {
  background-color: var(--ch-color-secondary-hover);
}

.ch-btn--ghost {
  background-color: transparent;
  color: var(--ch-color-text-main);
  border-color: var(--ch-color-border);
}
.ch-btn--ghost:hover:not(:disabled) {
  background-color: var(--ch-color-surface);
}

.ch-btn--danger {
  background-color: var(--ch-color-danger);
  color: #ffffff;
}
.ch-btn--danger:hover:not(:disabled) {
  background-color: var(--ch-color-danger-hover);
}

.ch-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* 4. Badges Primitive (.ch-badge) */
.ch-badge {
  display: inline-block;
  padding: 0.2rem 0.55rem;
  font-size: 0.75rem;
  font-weight: 600;
  border-radius: 9999px;
}

.ch-badge--info { background-color: var(--ch-color-info-bg); color: var(--ch-color-info-text); }
.ch-badge--success { background-color: var(--ch-color-success-bg); color: var(--ch-color-success-text); }
.ch-badge--warning { background-color: var(--ch-color-warning-bg); color: var(--ch-color-warning-text); }
.ch-badge--danger { background-color: var(--ch-color-danger-bg); color: var(--ch-color-danger-text); }

/* 5. Form Controls (.ch-input, .ch-label) */
.ds-form-group {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  max-width: 360px;
}

.ch-label {
  font-size: 0.85rem;
  font-weight: 600;
}

.ch-input {
  padding: 0.5rem 0.75rem;
  font-size: 0.875rem;
  background-color: var(--ch-color-surface);
  color: var(--ch-color-text-main);
  border: 1px solid var(--ch-color-border);
  border-radius: var(--ch-radius-sm);
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.ch-input:focus {
  outline: none;
  border-color: var(--ch-color-primary);
  box-shadow: var(--ch-focus-ring);
}

.ch-helper-text {
  font-size: 0.75rem;
  color: var(--ch-color-text-muted);
}

/* 6. Card Component (.ch-card) */
.ch-card {
  background-color: var(--ch-color-surface);
  border: 1px solid var(--ch-color-border);
  border-radius: var(--ch-radius-md);
  padding: 1.25rem;
  box-shadow: var(--ch-shadow-sm);
}

.ch-card__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
}

.ch-card__title {
  margin: 0;
  font-size: 1rem;
}

.ch-card__body p {
  margin: 0 0 1rem 0;
  font-size: 0.875rem;
  color: var(--ch-color-text-muted);
  line-height: 1.5;
}

.ch-card__footer {
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
}`}
  height="520px"
/>

## Technical Architectural Insights

### 1. Zero-JS Dark Mode via `:has()`

Instead of adding JavaScript to toggle class names, we leverage the native CSS parent selector `:has()`:

```css
:has(#theme-switch:checked) {
  --ch-color-bg: #0f172a;
  --ch-color-surface: #1e293b;
  --ch-color-border: #334155;
  --ch-color-text-main: #f8fafc;
}

```

When the user checks `#theme-switch`, `:has()` detects the change and dynamically updates the root CSS tokens.

### 2. Accessible Focus Management

Accessibility is built directly into every interactive component primitive using `:focus-visible`:

```css
.ch-btn:focus-visible {
  outline: none;
  box-shadow: var(--ch-focus-ring);
}

```

* **`:focus-visible`:** Prevents unsightly blue focus outlines for mouse clicks while ensuring high-contrast focus rings display for keyboard users pressing Tab.

---

## Key Takeaways

* Design tokens store baseline design values in custom properties, enabling effortless global updates.
* BEM naming conventions (`.block__element--modifier`) keep class names clear and prevent cascading selector conflicts.
* Combining accessibility triggers like `:focus-visible` with state selectors like `:has()` produces accessible, interactive UI components using pure CSS.