---
id: project-2-interactive-dashboard
title: "Responsive Interactive Analytics Dashboard"
sidebar_label: "Project 2"
sidebar_position: 2
description: "Build a complex, multi-pane analytics dashboard using CSS Grid layouts, auto-fit/minmax strategies, sidebar toggles, data visualization cards, and CSS custom property theme tokens."
tags:
  - CSS
  - Responsive Design
  - CSS Grid
  - Flexbox
  - Dashboard
  - Projects
  - CodeHarborHub
---

In this project, you will move beyond single-page marketing layouts and build a multi-pane **Responsive Interactive Analytics Dashboard**. 

You will master advanced 2D layouts using CSS Grid `grid-template-areas`, dynamic auto-fitting cards, state-driven sidebar collapse patterns, and CSS variables for dark/light UI tokens.

## Technical Specifications & Requirements

Review the core technical constraints and architectural requirements for the analytics dashboard layout:

1. **Grid-Based Main Shell:**
   * Multi-zone structural layout managed via `grid-template-areas` for header, sidebar, main content, and footer region.
   * Responsive collapse behavior that shifts from a desktop multi-pane layout to a single-column layout on smaller screens.

2. **Auto-Responsive Data Cards:**
   * Dynamic metric cards auto-fit using `grid-template-columns: repeat(auto-fit, minmax(220px, 1fr))` without requiring individual media query breakpoints.

3. **Data Visualization Components:**
   * CSS-only progress bars, stat change indicator badges (positive/negative indicators), and structured data table styling.
   * Styled scrollable data panel with custom scrollbar styling (`::-webkit-scrollbar`).

## Interactive Project Implementation

Inspect and test the complete production code for the analytics dashboard below:

<CodePreview
  defaultHtml={`<div class="dashboard">
  <!-- 3. Header Component -->
  <header class="db-header">
    <div class="db-header__brand">
      <span>📊</span> AdminSuite
    </div>
    <div class="db-header__user">
      <span class="user-badge">Pro Account</span>
      <div class="user-avatar">AD</div>
    </div>
  </header>

  <!-- 4. Sidebar Component -->
  <aside class="db-sidebar">
    <nav class="db-menu">
      <a href="#dash" class="db-menu__item db-menu__item--active">Dashboard</a>
      <a href="#trans" class="db-menu__item">Transactions</a>
      <a href="#settings" class="db-menu__item">Settings</a>
    </nav>
  </aside>

  <!-- 5. Main Workspace -->
  <main class="db-main">
    <!-- Auto-Fitting Metrics Grid -->
    <div class="metrics-grid">
      <div class="stat-card">
        <span class="stat-card__label">Total Revenue</span>
        <span class="stat-card__value">$7,440.00</span>
        <div class="progress-bar"><div class="progress-bar__fill" style="width: 75%"></div></div>
      </div>
      <div class="stat-card">
        <span class="stat-card__label">Active Licenses</span>
        <span class="stat-card__value">1,204</span>
        <div class="progress-bar"><div class="progress-bar__fill" style="width: 40%"></div></div>
      </div>
    </div>

    <!-- 7. Detailed Analytics Table -->
    <section class="content-panel">
      <h3 class="panel-title">Recent Transactions</h3>
      <div class="table-container">
        <table class="data-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Customer</th>
              <th>Status</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>#TR-1082</td>
              <td>TechCorp Inc</td>
              <td><span class="badge badge--success">Completed</span></td>
              <td>$2,400.00</td>
            </tr>
            <tr>
              <td>#TR-1083</td>
              <td>DevStudio LLC</td>
              <td><span class="badge badge--pending">Pending</span></td>
              <td>$1,150.00</td>
            </tr>
            <tr>
              <td>#TR-1084</td>
              <td>Apex Systems</td>
              <td><span class="badge badge--success">Completed</span></td>
              <td>$3,890.00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </main>
</div>`}
  defaultCss={`/* 1. Root Variable Configuration */
:root {
  --db-bg: #0f172a;
  --db-surface: #1e293b;
  --db-surface-hover: #334155;
  --db-border: #334155;
  --db-text: #ffffff;
  --db-muted: #94a3b8;
  --db-primary: #2563eb;
  --db-success: #10b981;
  --db-warning: #f59e0b;
  --db-danger: #ef4444;
}

/* 2. Grid Shell Layout Setup */
.dashboard {
  display: grid;
  grid-template-areas:
    "header"
    "sidebar"
    "main";
  grid-template-columns: 1fr;
  min-height: 480px;
  background-color: var(--db-bg);
  color: var(--db-text);
  font-family: system-ui, -apple-system, sans-serif;
  border-radius: 8px;
  overflow: hidden;
}

/* Desktop Grid Shell Layout */
@media (width >= 768px) {
  .dashboard {
    grid-template-areas:
      "header header"
      "sidebar main";
    grid-template-columns: 220px 1fr;
    grid-template-rows: auto 1fr;
  }
}

/* 3. Header Styling */
.db-header {
  grid-area: header;
  background-color: var(--db-surface);
  border-bottom: 1px solid var(--db-border);
  padding: 0.75rem 1.25rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.db-header__brand {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 700;
  font-size: 1.1rem;
}

.db-header__user {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.user-badge {
  font-size: 0.75rem;
  background-color: var(--db-border);
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  color: var(--db-muted);
}

.user-avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: var(--db-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  font-weight: 700;
}

/* 4. Sidebar Styling */
.db-sidebar {
  grid-area: sidebar;
  background-color: var(--db-surface);
  border-right: 1px solid var(--db-border);
  padding: 1rem 0.5rem;
}

.db-menu {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.db-menu__item {
  color: var(--db-muted);
  text-decoration: none;
  padding: 0.6rem 0.8rem;
  border-radius: 6px;
  font-size: 0.9rem;
  transition: all 0.2s ease;
}

.db-menu__item:hover,
.db-menu__item--active {
  background-color: var(--db-surface-hover);
  color: var(--db-text);
}

.db-menu__item--active {
  border-left: 3px solid var(--db-primary);
}

/* 5. Main Workspace & Auto-Fitting Grid */
.db-main {
  grid-area: main;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.metrics-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1rem;
}

.stat-card {
  background-color: var(--db-surface);
  border: 1px solid var(--db-border);
  border-radius: 8px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.stat-card__label {
  font-size: 0.8rem;
  color: var(--db-muted);
}

.stat-card__value {
  font-size: 1.5rem;
  font-weight: 700;
}

/* 6. Badges & Visual Widgets */
.badge {
  font-size: 0.75rem;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  width: fit-content;
}

.badge--success {
  background-color: rgba(16, 185, 129, 0.15);
  color: var(--db-success);
}

.badge--danger {
  background-color: rgba(239, 68, 68, 0.15);
  color: var(--db-danger);
}

.badge--pending {
  background-color: rgba(245, 158, 11, 0.15);
  color: var(--db-warning);
}

.progress-bar {
  height: 6px;
  background-color: var(--db-border);
  border-radius: 3px;
  overflow: hidden;
}

.progress-bar__fill {
  height: 100%;
  background-color: var(--db-primary);
}

/* 7. Data Table Section */
.content-panel {
  background-color: var(--db-surface);
  border: 1px solid var(--db-border);
  border-radius: 8px;
  padding: 1rem;
}

.panel-title {
  margin: 0 0 1rem 0;
  font-size: 1rem;
}

.table-container {
  overflow-x: auto;
}

.data-table {
  width: 100%;
  border-collapse: collapse;
  text-align: left;
  font-size: 0.85rem;
}

.data-table th,
.data-table td {
  padding: 0.6rem 0.8rem;
  border-bottom: 1px solid var(--db-border);
}

.data-table th {
  color: var(--db-muted);
  font-weight: 600;
}
`}
  height="500px"
/>

## Technical Architectural Insights

### 1. Multi-Area Layout Mechanics

The core grid shell leverages `grid-template-areas` to clearly separate placement layout semantics from structure:

```css
.dashboard {
  display: grid;
  grid-template-areas:
    "header header"
    "sidebar main";
  grid-template-columns: 220px 1fr;
  grid-template-rows: auto 1fr;
}

```

* **Header Span:** Occupies `header header`, effortlessly spanning the top bar across both the sidebar and content column.
* **Flexible Column Sizing:** The fixed sidebar size (`220px`) combined with `1fr` ensures content fills the remainder without horizontal scroll.

### 2. Auto-Fit Cards via `minmax()`

The metric cards automatically rearrange based on available container width:

```css
.metrics-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
}

```

* **`auto-fit`:** Automatically calculates how many cards fit into the row container.
* **`minmax(180px, 1fr)`:** Guarantees each card will shrink down to `180px` before wrapping, but expands up to consume available fraction space equally.

---

## Key Takeaways

* CSS Grid Areas (`grid-template-areas`) reduce media query complexity when reorganizing full Application Shell topologies.
* Dynamic auto-fit grids (`repeat(auto-fit, minmax(...))`) eliminate manual breakpoint calculations for component lists.
* Encapsulating status styles via color variables and alpha overlays creates flexible, maintenance-friendly design themes.