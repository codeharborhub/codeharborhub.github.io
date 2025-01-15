---
id: element-selector
title: Element Selector
sidebar_label: Element Selector
sidebar_position: 1
tags:
  [
    element-selector,
    css-selectors,
    css,
    selectors,
    simple-selectors,
    css-basics,
    css-tutorial,
    css-guide,
    css-tutorial-for-beginners,
    learn-css,
    css-tutorial-for-beginners-2025,
    css-tutorial-for-learning,
  ]
description: The element selector is used to select elements on a web page based on their element type.
keywords:
  [
    element selector,
    css element selector,
    css selectors,
    css basics,
    css tutorial,
    css guide,
    css tutorial for beginners,
    learn css,
    css tutorial for beginners 2025,
    css tutorial for learning,
  ]
---

In CSS, the element selector is used to select elements on a web page based on their element type. It is one of the simplest and most commonly used selectors in CSS.

<AdsComponent />

## What is an Element Selector?

An element selector selects all elements on a web page that match a specified element type. It targets HTML elements based on their tag name. For example, to select all `<p>` elements on a page, you would use the following CSS rule:

```css title="styles.css"
p {
  color: red;
}
```

In this example, the CSS rule selects all `<p>` elements and sets their text color to red. The element selector is denoted by the tag name (`p` in this case) followed by curly braces `{}` containing the CSS properties and values to apply to the selected elements.

## Syntax of the Element Selector

The syntax of the element selector is as follows:

```css title="styles.css"
element {
  property: value;
}
```

Where:

- `element`: Represents the tag name of the HTML element you want to target.
- `property`: Refers to the CSS property you want to apply to the selected elements.
- `value`: Specifies the value of the CSS property.
- `{}`: Encloses the CSS properties and values to be applied to the selected elements.
- `;`: Separates multiple CSS properties within the rule.

The element selector can be used to style various HTML elements, such as headings (`<h1>`, `<h2>`, etc.), paragraphs (`<p>`), links (`<a>`), lists (`<ul>`, `<ol>`, `<li>`), and more.

:::tip Key Points to Remember
- The element selector applies styles to **all instances** of the specified element in the document.
- It does not differentiate between elements based on their position, class, or ID unless combined with other selectors.
:::

<AdsComponent />

## Example

Let's look at an example where we use the element selector to style different HTML elements on a web page:

<Tabs>
    <TabItem value="html" label="index.html">
        ```html showLineNumbers
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>CSS Element Selector</title>
          <link rel="stylesheet" href="styles.css">
        </head>
        <body>
          <h1>Welcome to CSS Tutorials!</h1>
          <p>This is an introduction to the Element Selector.</p>
          <p>All paragraphs will share the same style.</p>
          <button>Click Me</button>
        </body>
        </html>
        ```
    </TabItem>
    <TabItem value="css" label="styles.css">
        ```css showLineNumbers
        /* Apply styles to all <h1> elements */
        h1 {
          color: #4CAF50;
          font-family: Arial, sans-serif;
          text-align: center;
        }

        /* Apply styles to all <p> elements */
        p {
          font-size: 16px;
          line-height: 1.5;
          color: #333;
        }

        /* Apply styles to all <button> elements */
        button {
          background-color: #007BFF;
          color: white;
          border: none;
          padding: 10px 15px;
          font-size: 14px;
          cursor: pointer;
        }

        /* Button hover effect */
        button:hover {
          background-color: #0056b3;
        }
        ```
    </TabItem>
</Tabs>

Now, you can see the output of the above code in the Browser Window like this:

<BrowserWindow url="http://127.0.0.1:5500/index.html" bodyStyle={{fontFamily: "Arial, sans-serif", backgroundColor: "#f9f9f9", color: "#000"}}>
  <>
    <h1 style={{ color: '#4CAF50', textAlign: 'center' }}>Welcome to CSS Tutorials!</h1>
    <p style={{ fontSize: '16px', lineHeight: '1.5', color: '#333' }}>This is an introduction to the Element Selector.</p>
    <p style={{ fontSize: '16px', lineHeight: '1.5', color: '#333' }}>All paragraphs will share the same style.</p>
    <button style={{ backgroundColor: '#007BFF', color: 'white', border: 'none', padding: '10px 15px', fontSize: '14px', cursor: 'pointer' }} onMouseOver={(e) => e.target.style.backgroundColor = '#0056b3'} onMouseOut={(e) => e.target.style.backgroundColor = '#007BFF'}>Click Me</button>
  </>
</BrowserWindow>


In this example:

- The `<h1>` element is styled with a green color, centered text, and a specific font family.
- All `<p>` elements are styled with a font size of 16px, a line height of 1.5, and a dark gray color.
- The `<button>` element is styled with a blue background color, white text color, and some padding. It also changes its background color on hover.
- The styles defined in the `styles.css` file are applied to the corresponding HTML elements in the `index.html` file.
- The element selector targets all instances of the specified elements and applies the defined styles uniformly.

By using the element selector, you can easily apply styles to multiple elements of the same type across your web page.

<AdsComponent />

## Advantages

The element selector offers several advantages:

- **Simplicity**: It is easy to use and understand, making it suitable for beginners.
- **Consistency**: It allows you to apply consistent styles to all instances of a specific element type.
- **Efficiency**: It helps you style multiple elements with the same tag name without repeating the styles for each element.
- **Scalability**: It can be combined with other selectors to create more complex and specific styling rules.
- **Maintainability**: It simplifies the process of updating styles for a particular element type across the entire website.

## When to Use

The element selector is best suited for scenarios where you want to apply consistent styles to all instances of a specific element type across your website. It is ideal for setting default styles for HTML elements and creating a cohesive design language.

You can use the element selector to define base styles for headings, paragraphs, lists, buttons, and other elements that appear multiple times on your web pages. It simplifies the process of styling these elements uniformly and ensures a consistent look and feel throughout your site.

While the element selector is a powerful tool for styling elements based on their tag names, it is essential to use it judiciously and consider its limitations when designing and developing websites.

## Conclusion

The element selector is a simple yet powerful CSS selector that targets elements based on their tag names. It allows you to apply styles uniformly to all instances of a specific element type on your web pages. By using the element selector, you can create consistent and visually appealing designs that enhance the user experience.