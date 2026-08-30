---
id: container-queries
title: "CSS Container Queries & Modern Layouts"
sidebar_label: "Lecture 15"
sidebar_position: 4
description: "Master component-driven responsive design with CSS Container Queries (@container)—container types, query units, inline sizing, and adaptive UI components."
tags:
  - CSS
  - Container Queries
  - Responsive Design
  - Modern CSS
  - CodeHarborHub
---

While traditional media queries make styling decisions based on the width of the entire browser viewport, **CSS Container Queries** (`@container`) allow elements to query the dimensions and styles of their immediate parent container. This enables true modular, component-driven responsive design.

## 1. The Limitation of Viewport Media Queries

With standard viewport `@media` queries, a UI component (like a card) responds strictly to screen width, regardless of where it is placed on the page:


```

┌─────────────────────────────────────────────────────────────┐
│                       VIEWPORT                              │
│                                                             │
│  ┌───────────────────────────┐  ┌────────────────────────┐  │
│  │ Main Content Column (70%) │  │ Sidebar Column (30%)   │  │
│  │                           │  │                        │  │
│  │ ┌───────────────────────┐ │  │ ┌────────────────────┐ │  │
│  │ │ Card Component        │ │  │ │ Card Component     │ │  │
│  │ │ (Wants Wide Layout)   │ │  │ │ (Wants Stacked)    │ │  │
│  │ └───────────────────────┘ │  │ └────────────────────┘ │  │
│  └───────────────────────────┘  └────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘

```

Both cards above see the **same viewport width**, forcing developers to create fragile context-dependent modifier classes (e.g., `.card--sidebar`). **Container queries resolve this completely.**

## 2. Defining a Containment Context (`container-type`)

To query a parent element's size, you must first register it as a container using `container-type` and optionally assign a `container-name`.

```css
/* Step 1: Register the Container */
.card-wrapper {
  /* Establishes inline-size (width) containment */
  container-type: inline-size;
  container-name: card-host;
}

```

### Container Type Options

| Value | Description |
| --- | --- |
| **`inline-size`** *(Most Common)* | Queries the inline dimension (width) of the container. Avoids infinite height layout loops. |
| **`size`** | Queries both inline (width) and block (height) dimensions. Requires explicit container height. |
| **`normal`** | Removes containment tracking from the element. |

## 3. Querying the Container (`@container`)

Once a container context is established, child elements can target it using `@container` queries:

```css
/* Base Mobile/Narrow Component Styles */
.card {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

/* Step 2: Component responds when wrapper width reaches 400px */
@container (min-width: 400px) {
  .card {
    flex-direction: row;
    align-items: center;
  }
  
  .card-image {
    width: 150px;
    height: 100%;
  }
}

```

## 4. Container Query Length Units

CSS Container Queries introduce dynamic length units relative to the container's dimensions:

| Unit | Description | Relative Measurement |
| --- | --- | --- |
| **`cqw`** | Container Query Width | 1% of container's width |
| **`cqh`** | Container Query Height | 1% of container's height |
| **`cqi`** | Container Query Inline | 1% of container's inline size |
| **`cqb`** | Container Query Block | 1% of container's block size |
| **`cqmin`** | Container Query Minimum | Smaller value of `cqi` or `cqb` |
| **`cqmax`** | Container Query Maximum | Larger value of `cqi` or `cqb` |

```css
.card-title {
  /* Font size scales smoothly based on container width, not viewport */
  font-size: clamp(1rem, 5cqw, 1.75rem);
}

```

## Interactive Playground: Modular Responsive Card

Resize or view the card wrapper to see the component dynamically adapt its layout based on container width:

<CodePreview
defaultHtml={`
<div class="card-container">
  <div class="user-card">
    <div class="avatar">JD</div>
    <div class="info-content">
      <h3>John Doe</h3>
      <p>Frontend Engineer & UI Specialist</p>
    </div>
  </div>
</div>
`}
defaultCss={`
/* 1. Register Containment Context */
.card-container {
container-type: inline-size;
container-name: card-wrapper;
width: 100%;
resize: horizontal;
overflow: auto;
padding: 0.5rem;
background-color: #1e293b;
border: 1px dashed #475569;
border-radius: 6px;
}

/* Base Component (Narrow Layout) */
.user-card {
display: flex;
flex-direction: column;
gap: 1rem;
background-color: #0f172a;
padding: 1rem;
border-radius: 6px;
border: 1px solid #334155;
color: #ffffff;
}

.avatar {
width: 50px;
height: 50px;
background-color: #2563eb;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
font-weight: 700;
color: #ffffff;
}

.user-card h3 {
margin: 0 0 0.25rem 0;
color: #38bdf8;
font-size: clamp(1rem, 4cqi, 1.3rem);
}

.user-card p {
margin: 0;
font-size: 0.85rem;
color: #94a3b8;
}

/* 2. Container Query (Triggers based on container width) */
@container card-wrapper (min-width: 350px) {
.user-card {
flex-direction: row;
align-items: center;
}
}`}
height="360px"
/>

## Summary Reference Table

| Feature / Syntax | Example | Purpose |
| --- | --- | --- |
| **`container-type`** | `container-type: inline-size;` | Registers element as a queryable container |
| **`container-name`** | `container-name: sidebar;` | Names container for targeting specific parents |
| **`container` shorthand** | `container: sidebar / inline-size;` | Combines container name and type |
| **`@container` Query** | `@container (min-width: 400px) { ... }` | Applies conditional styles based on container size |
| **Container Units** | `font-size: 4cqw;` | Sizes elements relative to container dimensions |