---
id: unordered-lists
title: "HTML Unordered Lists"
sidebar_label: Unordered Lists
sidebar_position: 2
tags: [html, web-development, unordered-lists, lists]
description: In this tutorial, you will learn about unordered lists in HTML. Unordered lists are used to display a list of items in no particular order.
---

Unordered lists in HTML are used to represent a collection of items without any specific order or sequence. Each item in the list is displayed with a bullet point or other marker to indicate that it is part of a list. Unordered lists are commonly used for navigation menus, itemized lists, and other scenarios where the order of items is not important.

<AdsComponent />

## Creating an Unordered List

To create an unordered list in HTML, you use the `<ul>` (unordered list) tag. Each item in the list is represented by the `<li>` (list item) tag. Here's an example of an unordered list with three items:

```html title="index.html"
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Unordered List Example</title>
</head>
<body>
  <h1>My Favorite Fruits</h1>
  <ul>
    <li>Apple</li>
    <li>Orange</li>
    <li>Banana</li>
  </ul>
</body>
</html>
```

<BrowserWindow url="http://.../index.html" bodyStyle={{backgroundColor: "#fff", color: "#333"}}>
<>
  <h1>My Favorite Fruits</h1>
  <ul>
    <li>Apple</li>
    <li>Orange</li>
    <li>Banana</li>
  </ul>
</>
</BrowserWindow>

In this example, the list contains three items: "Apple," "Orange," and "Banana." Each item is displayed with a bullet point by default.

<AdsComponent />

## Why Use Unordered Lists?

1. **Flexibility:** Unordered lists are versatile and can be used in various contexts, such as navigation menus, itemized lists, and feature lists.
2. **Visual Hierarchy:** The use of bullet points or other markers helps create a visual hierarchy that distinguishes list items from surrounding content.
3. **Accessibility:** Screen readers and other assistive technologies can interpret unordered lists, making content more accessible to users with disabilities.
4. **Consistency:** Using unordered lists ensures a consistent and structured presentation of items, improving the overall readability of the content.
5. **Styling:** Unordered lists can be styled using CSS to match the design of a website or application, providing a cohesive visual experience.
6. **Semantic Meaning:** Unordered lists add semantic meaning to the content, helping search engines and browsers understand the structure of the information.
7. **Easy to Implement:** Creating unordered lists in HTML is straightforward and requires minimal markup, making it easy for developers to add lists to web pages.
8. **Cross-Browser Compatibility:** Unordered lists are supported by all major web browsers, ensuring consistent rendering across different platforms.

## Customizing Unordered Lists

You can customize the appearance of unordered lists using CSS to match the design of your website. Common styling options include changing the bullet style, size, color, and spacing. Here's an example of customizing the bullet style of an unordered list:

```css title="styles.css"
ul {
  list-style-type: square;
  color: #007bff;
}
```

In this CSS code snippet, we set the `list-style-type` property to "square" to change the bullet style of the unordered list to squares. We also change the color of the bullets to blue using the `color` property.

<AdsComponent />

## Nested Unordered Lists

Unordered lists can be nested within other lists to create a hierarchical structure. This is useful when you have a list of items that contain sub-items or categories. Here's an example of a nested unordered list:

```html title="index.html"
<ul>
  <li>Fruits
    <ul>
      <li>Apple</li>
      <li>Orange</li>
      <li>Banana</li>
    </ul>
  </li>
  <li>Vegetables
    <ul>
      <li>Carrot</li>
      <li>Broccoli</li>
      <li>Spinach</li>
    </ul>
  </li>
</ul>
```

<BrowserWindow url="http://.../index.html" bodyStyle={{backgroundColor: "#fff", color: "#333"}}>
<div>
  <ul>
    <li>
      Fruits
      <ul>
        <li>Apple</li>
        <li>Orange</li>
        <li>Banana</li>
      </ul>
    </li>
    <li>
      Vegetables
      <ul>
        <li>Carrot</li>
        <li>Broccoli</li>
        <li>Spinach</li>
      </ul>
    </li>
  </ul>
</div>
</BrowserWindow>

In this example, the main list contains two items: "Fruits" and "Vegetables." Each item has a nested list of sub-items. This structure helps organize the content into categories and subcategories.

<AdsComponent />

## Attributes of the `<ul>` Tag

The `<ul>` tag supports several attributes that allow you to customize the appearance and behavior of unordered lists. Some common attributes include:

- `type`: Specifies the type of bullet or marker used for list items. Possible values include "disc," "circle," and "square."
- `start`: Specifies the starting value of the list items. Useful for creating lists that do not start at 1.
- `compact`: Deprecated attribute that specifies whether the list should have reduced spacing between items. Not recommended for use in modern web development.
- `class`: Specifies one or more CSS classes to apply to the list for styling purposes.
- `id`: Specifies a unique identifier for the list, which can be used for scripting or styling purposes.
- `style`: Specifies inline CSS styles to apply to the list.
- `title`: Specifies a title or tooltip for the list, which is displayed when the user hovers over the list.
- `aria-*`: Attributes for defining accessible roles, states, and properties for assistive technologies.
- `role`: Specifies the role of the list in the document structure.


### Example: Using the `type` Attribute

You can use the `type` attribute to change the bullet style of an unordered list. Here's an example:

<div className="flex flex-wrap items-center my-4 gap-4">

```html title="index.html"
<ul type="circle">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```

<BrowserWindow url="http://.../index.html" bodyStyle={{backgroundColor: "#fff", color: "#333"}}>
  <ul type="circle">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </ul>
</BrowserWindow>

</div>

In this example, we use the `type="circle"` attribute to change the bullet style of the unordered list to circles.

<AdsComponent />

## Conclusion

Unordered lists in HTML are a versatile and effective way to present a collection of items without a specific order. By using the `<ul>` and `<li>` tags, you can create structured lists that enhance the readability and organization of your content. Whether you're creating a simple list of items or a complex hierarchy of categories and subcategories, unordered lists provide a flexible and accessible solution for displaying information on the web.