---
id: list-intro
title: "HTML Lists Introduction"
sidebar_label: Lists Introduction
sidebar_position: 1
tags: [html, web-development, lists]
description: "In this tutorial, you will learn about lists in HTML. Lists are used to display a collection of items in a structured format."
keywords:
  [html lists, html ul, html ol, html dl, html list items, html list tags]
---

Lists in HTML are used to display a collection of items in a structured format. Lists are essential for organizing content, creating navigation menus, and presenting information in a readable manner. HTML provides three types of lists: unordered lists, ordered lists, and definition lists.

<AdsComponent />

## Types of Lists in HTML

There are three main types of lists in HTML:

1. **Unordered Lists (`<ul>`):** Unordered lists are used to represent a collection of items without any specific order or sequence. The list items are typically displayed with bullet points.
2. **Ordered Lists (`<ol>`):** Ordered lists are used to represent a collection of items in a specific order or sequence. The list items are typically displayed with numbers or letters.
3. **Definition Lists (`<dl>`):** Definition lists are used to represent a list of terms and their corresponding definitions. Each term is displayed with a definition following it.

## List Structure

### 1. Unordered Lists

Unordered lists are created using the `<ul>` tag. Each item in the list is represented by the `<li>` (list item) tag. The items are displayed with bullet points by default.

<div className="flex flex-wrap items-center my-4 gap-4">

```html title="Unordered List Example"
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```

<BrowserWindow url="http://.../index.html" bodyStyle={{backgroundColor: "#fff", color: "#333"}}>
  <ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </ul>
</BrowserWindow>

</div>

<AdsComponent />

### 2. Ordered Lists

Ordered lists are created using the `<ol>` tag. Each item in the list is represented by the `<li>` tag. The items are displayed with numbers or letters by default.

<div className="flex flex-wrap items-center my-4 gap-4">

```html title="Ordered List Example"
<ol>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ol>
```

<BrowserWindow url="http://.../index.html" bodyStyle={{backgroundColor: "#fff", color: "#333"}}>
  <ol>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </ol>
</BrowserWindow>

</div>

<AdsComponent />

### 3. Definition Lists

Definition lists are created using the `<dl>` tag. Each term in the list is represented by the `<dt>` (definition term) tag, and each definition is represented by the `<dd>` (definition description) tag.

<div className="flex flex-wrap items-center my-4 gap-4">

```html title="Definition List Example"
<dl>
  <dt>Term 1</dt>
  <dd>Definition 1</dd>
  <dt>Term 2</dt>
  <dd>Definition 2</dd>
  <dt>Term 3</dt>
  <dd>Definition 3</dd>
</dl>
```

<BrowserWindow url="http://.../index.html" bodyStyle={{backgroundColor: "#fff", color: "#333"}}>
  <dl>
    <dt>Term 1</dt>
    <dd>Definition 1</dd>
    <dt>Term 2</dt>
    <dd>Definition 2</dd>
    <dt>Term 3</dt>
    <dd>Definition 3</dd>
  </dl>
</BrowserWindow>

</div>

<AdsComponent />

## Conclusion

In this tutorial, you learned about the different types of lists in HTML: unordered lists, ordered lists, and definition lists. Lists are an essential part of web development and are used to organize and present information in a structured format. You can use lists to create navigation menus, display content in a readable manner, and improve the overall user experience of your web pages. Experiment with different list types and styles to enhance the visual appeal and usability of your websites.