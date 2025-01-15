---
id: class-selector
title: Class Selector
sidebar_label: Class Selector
sidebar_position: 2
tags:
  [
    class-selector,
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
description: The class selector is used to select elements on a web page based on their class attribute.
keywords:
  [
    class selector,
    css class selector,
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

In CSS, the class selector is used to select elements on a web page based on their class attribute. It is denoted by a dot (`.`) followed by the class name.

<AdsComponent />

## What is a Class Selector?

A class selector selects all elements on a web page that have a specified class attribute. It targets HTML elements based on the value of their `class` attribute. For example, to select all elements with the class `highlight`, you would use the following CSS rule:

```css title="styles.css"
.highlight {
  background-color: yellow;
}
```

In this example, the CSS rule selects all elements with the class `highlight` and sets their background color to yellow. The class selector is denoted by a dot (`.`) followed by the class name (`highlight` in this case) and curly braces `{}` containing the CSS properties and values to apply to the selected elements.

## Syntax of the Class Selector

The syntax of the class selector is

```css title="styles.css"
.classname {
  property: value;
}
```

where `.classname` represents the class selector, and `property: value;` represents the CSS properties and values to apply to the selected elements.

:::tip Key Points to Remember
1. **Reusability:** Classes are reusable and can be applied to multiple elements across your HTML document.
2. **Combining Classes:** You can assign multiple classes to a single HTML element by separating class names with spaces.
3. **Higher Specificity:** Class selectors are more specific than element selectors but less specific than ID selectors.
:::

By using class selectors, you can style specific groups of elements based on their class attributes, making it a powerful tool for styling web pages.

## Example

<Tabs>
 <TabItem value="HTML" lable="index.html">
    ```html showLineNumbers
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>CSS Class Selector</title>
      <link rel="stylesheet" href="styles.css">
    </head>
    <body>
      <h1 class="title">Welcome to the CSS Tutorial!</h1>
      <p class="highlight">This paragraph has a highlighted style.</p>
      <p class="highlight bold">This paragraph is both highlighted and bold.</p>
      <div class="card">
        <h2 class="card-title">Card Title</h2>
        <p class="card-content">This is some content inside a card.</p>
      </div>
      <button class="btn">Click Me</button>
      <button class="btn btn-primary">Primary Button</button>
    </body>
    </html>
    ```
  </TabItem>
  <TabItem value="CSS" label="styles.css">
    ```css showLineNumbers
    /* Basic styling for the title */
    .title {
      font-size: 2rem;
      color: #2c3e50;
      text-align: center;
    }

    /* Highlighted text styling */
    .highlight {
      background-color: #f9f871;
      color: #333;
      padding: 5px;
      border-radius: 5px;
    }

    /* Add bold text styling */
    .bold {
      font-weight: bold;
    }

    /* Card styles */
    .card {
      border: 1px solid #ccc;
      border-radius: 10px;
      padding: 20px;
      margin: 20px 0;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    .card-title {
      font-size: 1.5rem;
      color: #007bff;
    }

    .card-content {
      font-size: 1rem;
      color: #555;
    }

    /* Button styling */
    .btn {
      background-color: #2ecc71;
      color: white;
      border: none;
      padding: 10px 15px;
      font-size: 14px;
      border-radius: 5px;
      cursor: pointer;
    }

    /* Additional styling for primary buttons */
    .btn-primary {
      background-color: #3498db;
    }

    .btn:hover {
      opacity: 0.8;
    }
    ```
  </TabItem>
</Tabs>

Now, you can see the output of the above code in the Browser Window like this:

<BrowserWindow url="http://127.0.0.1:5500/index.html" bodyStyle={{fontFamily: "Arial, sans-serif", backgroundColor: "#f9f9f9", color: "#000"}}>
  <>
    <h1 style={{ fontSize: '2rem', color: '#2c3e50', textAlign: 'center' }}>Welcome to the CSS Tutorial!</h1>
    <p style={{ backgroundColor: '#f9f871', color: '#333', padding: '5px', borderRadius: '5px' }}>This paragraph has a highlighted style.</p>
    <p style={{ backgroundColor: '#f9f871', color: '#333', padding: '5px', borderRadius: '5px', fontWeight: 'bold' }}>This paragraph is both highlighted and bold.</p>
    <div style={{ border: '1px solid #ccc', borderRadius: '10px', padding: '20px', margin: '20px 0', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
      <h2 style={{ fontSize: '1.5rem', color: '#007bff' }}>Card Title</h2>
      <p style={{ fontSize: '1rem', color: '#555' }}>This is some content inside a card.</p>
    </div>
    <button style={{ backgroundColor: '#2ecc71', color: 'white', border: 'none', padding: '10px 15px', fontSize: '14px', borderRadius: '5px', cursor: 'pointer'}} onMouseOver={(e) => e.target.style.opacity = '0.8'} onMouseOut={(e) => e.target.style.opacity = '1'}>Click Me</button> &nbsp;
    <button style={{ backgroundColor: '#3498db', color: 'white', border: 'none', padding: '10px 15px', fontSize: '14px', borderRadius: '5px', cursor: 'pointer'}} onMouseOver={(e) => e.target.style.opacity = '0.8'} onMouseOut={(e) => e.target.style.opacity = '1'}>Primary Button</button>
  </>
</BrowserWindow>

In the above example, we have used the class selector to style different elements on the web page based on their class attributes. The `highlight` class is used to style paragraphs with a highlighted background color, the `bold` class is used to make text bold, and the `card` class is used to style a card-like container. The `btn` class is used to style buttons, and the `btn-primary` class is used to style primary buttons differently.

By using class selectors, you can apply consistent styles to elements with the same class across your web page, making it easier to maintain and update the styles.

## Multiple Classes

You can assign multiple classes to a single HTML element by separating class names with spaces. This allows you to combine styles from different classes on the same element. For example:

```html title="index.html"
<button class="btn btn-primary">Primary Button</button>
```

In this example, the button element has both the `btn` and `btn-primary` classes applied to it. This allows you to style the button using styles from both classes.

## Conclusion

The class selector in CSS is a powerful tool for selecting and styling elements based on their class attributes. By using class selectors, you can apply consistent styles to groups of elements across your web page, making it easier to maintain and update the styles. It allows you to create reusable styles that can be applied to multiple elements, improving the consistency and maintainability of your CSS code.