---
id: transitions-transforms-animations
title: "Transitions, Transforms & Keyframe Animations"
sidebar_label: "Lecture 14"
sidebar_position: 3
description: "Master modern CSS motion design—hardware-accelerated 2D/3D transforms, fluid transitions, timing functions, and multi-stage @keyframes animations."
tags:
  - CSS
  - Animations
  - Transitions
  - Transforms
  - Motion Design
  - CodeHarborHub
---

Adding motion to web user interfaces elevates the user experience by providing visual feedback, guiding user attention, and creating polished interactions. CSS provides three core mechanisms for UI motion: **Transforms**, **Transitions**, and **Keyframe Animations**.

## 1. 2D & 3D CSS Transforms

The `transform` property allows you to visually manipulate an element's spatial geometry without disturbing the surrounding normal document flow (preventing unnecessary layout reflows).

```
                  [ CSS Transform Functions ]
                               │
  ┌────────────────┬───────────┴───────────┬────────────────┐
  ▼                ▼                       ▼                ▼
[ translate() ]  [ scale() ]           [ rotate() ]     [ skew() ]
Moves element     Resizes element      Rotates element  Tilts element along
along X/Y/Z axes  relative to origin   by angle deg     X/Y axes

```

### Common Transform Properties

```css
.card {
  /* Combine multiple transform operations */
  transform: translateY(-8px) scale(1.03) rotate(1deg);
  
  /* Change the origin point of transformation (Default: 50% 50%) */
  transform-origin: top left;
}

```

:::tip Performance Optimization
Always prefer animating `transform` and `opacity`. Browsers offload these properties directly to the GPU (Graphics Processing Unit), avoiding expensive layout recalculations (`reflow`) and repaints.
:::

## 2. CSS Transitions

CSS Transitions enable smooth value changes over a specified duration when an element switches between different visual states (such as `:hover`, `:focus`, or JavaScript class toggles).

### Shorthand Syntax

$$
\text{transition: [property] [duration] [timing-function] [delay];}
$$

```css
.button {
  background-color: #2563eb;
  transform: scale(1);
  
  /* Transition specific properties for optimal performance */
  transition: background-color 0.3s ease, transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.button:hover {
  background-color: #1d4ed8;
  transform: scale(1.05);
}

```

### Common Timing Functions (`transition-timing-function`)

* `ease` *(default)*: Starts slow, speeds up, then slows down.
* `linear`: Constant speed from start to end.
* `ease-in-out`: Symmetric slow start and end.
* `cubic-bezier(p1, p2, p3, p4)`: Custom acceleration curve for ultra-smooth UI motion.

## 3. Multi-Stage Keyframe Animations

While transitions require a state change trigger (like `:hover`), `@keyframes` animations run automatically, can loop infinitely, and support complex multi-step sequences.

### Defining Keyframes & Applying Animations

```css
/* 1. Define the Keyframe Sequence */
@keyframes pulseGlow {
  0% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(37, 99, 235, 0.7);
  }
  50% {
    transform: scale(1.05);
    box-shadow: 0 0 20px 10px rgba(37, 99, 235, 0);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(37, 99, 235, 0);
  }
}

/* 2. Apply to Element */
.badge-live {
  /* animation: name duration timing-function delay iteration-count direction fill-mode */
  animation: pulseGlow 2s ease-in-out infinite;
}

```

## Interactive Playground: Hardware-Accelerated Motion

Test combined transform state changes, transition curves, and continuous keyframe loops in the live editor below:

<CodePreview
defaultHtml={`
<div class="interactive-box transition-box">
  Hover Me
</div>

<div class="interactive-box animation-box">
  Floating Pulse
</div>
`}
defaultCss={`
/* Base Box Style */
.interactive-box {
width: 140px;
height: 100px;
border-radius: 8px;
color: #ffffff;
font-weight: 600;
font-size: 0.85rem;
display: flex;
align-items: center;
justify-content: center;
text-align: center;
cursor: pointer;
}

/* 1. Transition Box */
.transition-box {
background-color: #2563eb;
transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), background-color 0.3s ease;
}

.transition-box:hover {
transform: translateY(-10px) scale(1.08);
background-color: #059669;
}

/* 2. Keyframe Animation Box */
.animation-box {
background-color: #d97706;
animation: floatPulse 2.5s ease-in-out infinite;
}

@keyframes floatPulse {
0%, 100% {
transform: translateY(0);
}
50% {
transform: translateY(-8px) scale(1.04);
}
}`}
height="340px"
/>

## Summary Reference Table

| Motion Tool | Primary Trigger | Complexity Level | GPU Accelerated? |
| --- | --- | --- | --- |
| **`transform`** | Applied directly or via state | Spatial changes (move, rotate, scale) | Yes |
| **`transition`** | State change (`:hover`, JS class) | A-to-B smooth state interpolation | Yes (for opacity/transform) |
| **`@keyframes`** | Page load or class assignment | Multi-step dynamic sequence loops | Yes (for opacity/transform) |