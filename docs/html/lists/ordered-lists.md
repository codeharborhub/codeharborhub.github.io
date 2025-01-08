---
id: ordered-lists
title: "HTML Ordered Lists"
sidebar_label: Ordered Lists
sidebar_position: 3
tags: [html, web-development, ordered-lists, lists]
description: In this tutorial, you will learn about ordered lists in HTML. Ordered lists are used to display a list of items in a specific order, such as numerical or alphabetical order.
---

Ordered lists in HTML are used to represent a collection of items in a specific order, such as numerical or alphabetical order. Each item in the list is displayed with a number or letter to indicate its position in the sequence. Ordered lists are commonly used for steps in a process, rankings, and other scenarios where the order of items is important.

<AdsComponent />

## Creating an Ordered List

To create an ordered list in HTML, you use the `<ol>` (ordered list) tag. Each item in the list is represented by the `<li>` (list item) tag. Here's an example of an ordered list with three items:

```html title="index.html"
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ordered List Example</title>
</head>
<body>
  <h1>Steps to Create a Website</h1>
  <ol>
    <li>Plan your website structure.</li>
    <li>Create wireframes and mockups.</li>
    <li>Develop and test your website.</li>
  </ol>
</body>
</html>
```

<BrowserWindow url="http://.../index.html" bodyStyle={{backgroundColor: "#fff", color: "#333"}}>
<>
  <h1>Steps to Create a Website</h1>
  <ol>
    <li>Plan your website structure.</li>
    <li>Create wireframes and mockups.</li>
    <li>Develop and test your website.</li>
  </ol>
</>
</BrowserWindow>

In this example, the ordered list contains three items that represent the steps to create a website. Each item is displayed with a number to indicate its position in the sequence.

<AdsComponent />

## Why Use Ordered Lists?

1. **Sequential Order:** Ordered lists help convey information in a specific sequence, making them ideal for steps, rankings, and other ordered content.
2. **Clarity:** The use of numbers or letters provides clarity and structure to the content, making it easier for users to follow.
3. **Organization:** Ordered lists organize information in a logical and hierarchical manner, improving the readability and comprehension of the content.
4. **Accessibility:** Screen readers and assistive technologies can interpret ordered lists, enhancing the accessibility of the content.
5. **Consistency:** Using ordered lists ensures a consistent presentation of items, especially when the order is essential to understanding the content.
6. **Styling:** Ordered lists can be styled using CSS to match the design of a website or application, enhancing the visual appeal.
7. **Semantic Meaning:** Ordered lists add semantic meaning to the content, helping search engines and browsers understand the structure of the information.
8. **Easy to Implement:** Creating ordered lists in HTML is straightforward and requires minimal markup, making it easy for developers to include ordered content in web pages.

<AdsComponent />

## Attributes of Ordered Lists (`<ol>`)

The `<ol>` tag in HTML supports several attributes that allow you to customize the appearance and behavior of ordered lists. Here are some common attributes used with ordered lists:

### 1. `type`

The `type` attribute specifies the type of numbering used for the list items. The possible values are:

1. **Numbers (default):** The list items are numbered with Arabic numerals (1, 2, 3, ...).
   
  <div className="flex flex-wrap items-center my-4 gap-4">
  ```html
  <ol type="1">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </ol>
  ```

  <BrowserWindow url="http://.../index.html" bodyStyle={{backgroundColor: "#fff", color: "#333"}}>
    <ol type="1">
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ol>
  </BrowserWindow>

  </div>

2. **Uppercase Letters:** The list items are numbered with uppercase letters (A, B, C, ...).

  <div className="flex flex-wrap items-center my-4 gap-4">
  ```html
  <ol type="A">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </ol>
  ```

  <BrowserWindow url="http://.../index.html" bodyStyle={{backgroundColor: "#fff", color: "#333"}}>
    <ol type="A">
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ol>
  </BrowserWindow>

  </div>

  <AdsComponent />

3. **Lowercase Letters:** The list items are numbered with lowercase letters (a, b, c, ...).

  <div className="flex flex-wrap items-center my-4 gap-4">
  ```html
  <ol type="a">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </ol>
  ```

  <BrowserWindow url="http://.../index.html" bodyStyle={{backgroundColor: "#fff", color: "#333"}}>
    <ol type="a">
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ol>
  </BrowserWindow>

  </div>

4. **Uppercase Roman Numerals:** The list items are numbered with uppercase Roman numerals (I, II, III, ...).

  <div className="flex flex-wrap items-center my-4 gap-4">
  ```html
  <ol type="I">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </ol>
  ```

  <BrowserWindow url="http://.../index.html" bodyStyle={{backgroundColor: "#fff", color: "#333"}}>
    <ol type="I">
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ol>
  </BrowserWindow>

  </div>

  <AdsComponent />

5. **Lowercase Roman Numerals:** The list items are numbered with lowercase Roman numerals (i, ii, iii, ...).

  <div className="flex flex-wrap items-center my-4 gap-4">
  ```html
  <ol type="i">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </ol>
  ```

  <BrowserWindow url="http://.../index.html" bodyStyle={{backgroundColor: "#fff", color: "#333"}}>
    <ol type="i">
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ol>
  </BrowserWindow>

  </div>

### 2. `start`

The `start` attribute specifies the starting value of the list items. This attribute is useful when you want the list to start at a value other than 1.

<div className="flex flex-wrap items-center my-4 gap-4">
```html
<ol start="5">
  <li>Item 5</li>
  <li>Item 6</li>
  <li>Item 7</li>
</ol>
```

<BrowserWindow url="http://.../index.html" bodyStyle={{backgroundColor: "#fff", color: "#333"}}>
  <ol start="5">
    <li>Item 5</li>
    <li>Item 6</li>
    <li>Item 7</li>
  </ol>
</BrowserWindow>

</div>

### 3. `reversed`

The `reversed` attribute reverses the numbering of the list items. The last item in the list is numbered first, and the first item is numbered last.

<div className="flex flex-wrap items-center my-4 gap-4">
```html
<ol reversed>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ol>
```

<BrowserWindow url="http://.../index.html" bodyStyle={{backgroundColor: "#fff", color: "#333"}}>
  <ol reversed>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </ol>
</BrowserWindow>

</div>

<AdsComponent />

### 4. `compact`

The `compact` attribute is a deprecated attribute that specifies whether the list should have reduced spacing between items. It is not recommended for use in modern web development.

### 5. `class`

The `class` attribute specifies one or more CSS classes to apply to the list for styling purposes.

```html title="index.html"
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Styled Ordered List</title>
  <style>
    .custom-list {
      color: #007bff;
      font-weight: bold;
    }
  </style>
</head>
<body>
  <h1>Styled Ordered List</h1>
  <ol class="custom-list">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </ol>
</body>
</html>
```

<BrowserWindow url="http://.../index.html" bodyStyle={{backgroundColor: "#fff", color: "#333"}}>
<>
  <h1>Styled Ordered List</h1>
  <ol style={{color: "#007bff", fontWeight: "bold"}}>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </ol>
</>
</BrowserWindow>

## Conclusion

Ordered lists in HTML are a useful way to present information in a specific order. By using the `<ol>` tag, you can create lists that are numbered or lettered to indicate the sequence of items. The attributes of the `<ol>` tag allow you to customize the appearance and behavior of ordered lists, making them versatile for various scenarios.