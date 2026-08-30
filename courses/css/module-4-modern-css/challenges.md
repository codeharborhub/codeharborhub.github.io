---
id: module-4-challenges
title: "Practical Challenges: Modern CSS"
sidebar_label: "Challenges"
sidebar_position: 5
description: "Test your mastery of Modern CSS with hands-on challenges covering CSS Custom Properties, Responsive Design, CSS Animations, and Container Queries."
tags:
  - CSS
  - Challenges
  - Custom Properties
  - Responsive Design
  - Animations
  - Container Queries
  - CodeHarborHub
---

Put your knowledge of Modern CSS into practice. These practical challenges test your mastery of **CSS Custom Properties (Variables)**, **Responsive Design & Media Queries**, **Transforms, Transitions & Animations**, and **CSS Container Queries**.

## Challenge 1: Dynamic Theme Token Engine

### Objective
Build a dynamic card component driven entirely by global and component-scoped **CSS Custom Properties**. The design tokens must handle theme variables and hover elevation through property re-assignments without duplicating base structural rules.

### Requirements
1. Define global color and spatial variables on the `:root` selector (`--bg-card`, `--text-main`, `--accent-color`, `--card-padding`).
2. Create a `.card-dark` scope override class that replaces color tokens for dark mode execution.
3. Add a fallback value inside the `var()` function for the border property in case `--card-border` is missing.

### Solution

<CodePreview
defaultHtml={`<!-- Light Theme Card -->
<div class="card-box">
  <h3>Light Theme Scope</h3>
  <p>Uses global :root design tokens.</p>
</div>

<!-- Dark Theme Override Scope -->
<div class="card-box card-dark">
  <h3>Dark Theme Scope</h3>
  <p>Overrides scoped CSS variables locally.</p>
</div>`}
  defaultCss={`/* 1. Global Token Declarations */
:root {
  --bg-card: #f8fafc;
  --text-main: #0f172a;
  --accent-color: #2563eb;
  --card-padding: 1.25rem;
}

/* 2. Scoped Dark Theme Tokens */
.card-dark {
  --bg-card: #0f172a;
  --text-main: #f8fafc;
  --accent-color: #38bdf8;
}

/* Base Component Consuming Variables */
.card-box {
  background-color: var(--bg-card);
  color: var(--text-main);
  padding: var(--card-padding);
  border-radius: 8px;
  /* 3. Fallback handling */
  border: 2px solid var(--card-border, var(--accent-color));
  margin-bottom: 1rem;
  font-family: system-ui, sans-serif;
}

.card-box h3 {
  margin-top: 0;
  color: var(--accent-color);
}`}
  height="320px"
/>

---

## Challenge 2: Mobile-First Responsive Product Grid

### Objective
Create a responsive product showcase grid using **Mobile-First architecture**, **Media Queries with Range Syntax**, and **Fluid Typography (`clamp()`)**.

### Requirements
1. Set up mobile-first single-column stacked layout as default.
2. Apply Media Query Level 4 range syntax (`width >= 600px`) to switch to 2 columns on tablets, and (`width >= 900px`) for 3 columns on desktops.
3. Use `clamp()` for card headings to scale fluidly without abrupt text steps.

### Solution

<CodePreview
  defaultHtml={`<div class="product-grid">
  <article class="product-card">
    <h3 class="product-title">Wireless Headphones</h3>
    <p>Premium noise cancellation audio gear.</p>
  </article>
  <article class="product-card">
    <h3 class="product-title">Mechanical Keyboard</h3>
    <p>Tactile hot-swappable gaming switch keyboard.</p>
  </article>
  <article class="product-card">
    <h3 class="product-title">UltraWide Monitor</h3>
    <p>4K IPS color accurate display setup.</p>
  </article>
</div>`}
  defaultCss={`/* Base Mobile Styles */
.product-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  padding: 1rem;
  background-color: #0f172a;
  border-radius: 8px;
  font-family: system-ui, sans-serif;
}

.product-card {
  background-color: #1e293b;
  padding: 1.25rem;
  border-radius: 6px;
  border: 1px solid #334155;
  color: #ffffff;
}

/* Fluid Typography */
.product-title {
  margin-top: 0;
  color: #38bdf8;
  font-size: clamp(1.1rem, 3vw, 1.6rem);
}

.product-card p {
  margin: 0;
  color: #94a3b8;
  font-size: 0.9rem;
}

/* Media Query Level 4 Range Syntax */
@media (width >= 600px) {
  .product-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (width >= 900px) {
  .product-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}`}
  height="340px"
/>

---

## Challenge 3: Animated Pulse Loader & Hover Cards

### Objective
Build interactive cards featuring GPU-accelerated **CSS Transforms**, smooth **Transitions**, and a multi-step **`@keyframes` loop animation**.

### Requirements
1. Implement hardware-accelerated transforms (`translateY` and `scale`) on hover with cubic-bezier easing.
2. Build a continuous multi-stage `@keyframes` radar pulse badge inside the card.
3. Ensure motion properties target `transform` and `opacity` to prevent browser layout reflows.

### Solution

<CodePreview
  defaultHtml={`<div class="motion-demo-container">
  <div class="action-card">
    <div class="status-badge">
      <span class="pulse-ring"></span>
      <span class="status-dot"></span>
      Live Server
    </div>
    <h3>Interactive Node</h3>
    <p>Hover over this element to test smooth hardware-accelerated motion.</p>
  </div>
</div>`}
  defaultCss={`.motion-demo-container {
  padding: 2rem;
  background-color: #0f172a;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  font-family: system-ui, sans-serif;
}

.action-card {
  background-color: #1e293b;
  padding: 1.5rem;
  border-radius: 8px;
  border: 1px solid #334155;
  color: #ffffff;
  width: 260px;
  cursor: pointer;
  /* Hardware-accelerated transition */
  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease;
}

.action-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 12px 24px -6px rgba(0, 0, 0, 0.5);
}

.action-card h3 {
  margin: 0.75rem 0 0.5rem 0;
  color: #38bdf8;
}

.action-card p {
  margin: 0;
  color: #94a3b8;
  font-size: 0.85rem;
}

/* Live Status Badge with Keyframes */
.status-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  position: relative;
  font-size: 0.8rem;
  font-weight: 600;
  color: #10b981;
}

.status-dot {
  width: 8px;
  height: 8px;
  background-color: #10b981;
  border-radius: 50%;
}

.pulse-ring {
  position: absolute;
  left: 0;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #10b981;
  animation: radarPulse 2s ease-out infinite;
}

@keyframes radarPulse {
  0% {
    transform: scale(1);
    opacity: 0.8;
  }
  100% {
    transform: scale(3.5);
    opacity: 0;
  }
}`}
  height="340px"
/>

## Challenge 4: Component-Driven Container Queries

### Objective
Create a modular widget component that rearranges its internal structure based on the **width of its container**, completely independent of the browser viewport size.

### Requirements
1. Register a wrapper parent as an inline-size containment context using `container-type: inline-size`.
2. Apply an `@container` query that shifts internal item flow from a stacked column to a side-by-side row when wrapper width surpasses `380px`.
3. Utilize Container Query Inline (`cqi`) length units to size widget titles fluidly.

### Solution

<CodePreview
  defaultHtml={`<div class="container-demo-wrapper">
  <div class="widget-host">
    <div class="profile-widget">
      <div class="profile-avatar">CH</div>
      <div class="profile-info">
        <h4>Modular Container Profile</h4>
        <p>I automatically transform into a row layout when my direct parent container is wider than 380px.</p>
      </div>
    </div>
  </div>
</div>`}
  defaultCss={`/* Root Wrapper */
.container-demo-wrapper {
  padding: 1rem;
  background-color: #0f172a;
  border-radius: 8px;
  font-family: system-ui, sans-serif;
}

/* 1. Establish Container Context */
.widget-host {
  container-type: inline-size;
  container-name: widget-container;
  width: 100%;
  padding: 0.75rem;
  background-color: #1e293b;
  border: 1px dashed #475569;
  border-radius: 6px;
}

/* Base Component Layout (Narrow Container) */
.profile-widget {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  background-color: #0f172a;
  padding: 1.25rem;
  border-radius: 6px;
  color: #ffffff;
}

.profile-avatar {
  width: 48px;
  height: 48px;
  background-color: #059669;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
}

/* 3. Fluid sizing with cqi units */
.profile-info h4 {
  margin: 0 0 0.25rem 0;
  color: #34d399;
  font-size: clamp(1rem, 4.5cqi, 1.3rem);
}

.profile-info p {
  margin: 0;
  font-size: 0.85rem;
  color: #94a3b8;
}

/* 2. Container Query Execution */
@container widget-container (min-width: 380px) {
  .profile-widget {
    flex-direction: row;
    align-items: center;
  }
}`}
  height="360px"
/>

## Summary of Module 4 Key Concepts

| Topic | Primary Mechanism | Key Advantage |
| :--- | :--- | :--- |
| **Custom Properties** | `--var-name` / `var()` | Runtime dynamic styling, inheritance, and clean theme switching |
| **Responsive Design** | Mobile-First / `@media (width >= 768px)` | Fluid layouts and clean adaptation across screens |
| **Transitions & Animations** | `transition`, `@keyframes`, `transform` | Smooth hardware-accelerated user interaction and continuous loops |
| **Container Queries** | `container-type: inline-size` / `@container` | True component modularity based on parent container dimensions |