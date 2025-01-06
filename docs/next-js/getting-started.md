---
id: getting-started
title: "Next.js - Getting Started"
sidebar_label: Getting Started
sidebar_position: 26
tags: ["getting-started", "next-js"]
description: "In this tutorial, we will learn how to get started with Next.js."
keywords: ["getting-started", "next-js"]
---

import Home from './_scripts/Home';

Next.js is a React framework that enables server-side rendering and static site generation for React applications. It is a popular choice for building web applications due to its ease of use and performance benefits.

In this tutorial, we will learn how to get started with Next.js.

  <AdsComponent />

## Prerequisites

Before we begin, make sure you have Node.js installed on your machine. You can download and install Node.js from the official website: [https://nodejs.org](https://nodejs.org).

## Step 1: Create a New Next.js Project

To create a new Next.js project, you can use the following command:

```bash
npx create-next-app@latest
```

On installation, you'll see the following prompts:

```bash
What is your project named? my-app
Would you like to use TypeScript? No / Yes
Would you like to use ESLint? No / Yes
Would you like to use Tailwind CSS? No / Yes
Would you like your code inside a `src/` directory? No / Yes
Would you like to use App Router? (recommended) No / Yes
Would you like to use Turbopack for `next dev`?  No / Yes
Would you like to customize the import alias (`@/*` by default)? No / Yes
What import alias would you like configured? @/*
```

You can choose the options based on your preferences. Once the project is created, navigate to the project directory:

```bash
cd my-app
```

## Step 2: Run the Development Server

To start the development server, run the following command:

```bash
npm run dev
```

This will start the development server at `http://localhost:3000`. You can open this URL in your browser to view the Next.js application.

<BrowserWindow bodyStyle={{ padding: 0 }}>
  <Home />
</BrowserWindow>

## Conclusion

In this tutorial, we learned how to get started with Next.js. We created a new Next.js project and ran the development server to view the application in the browser.