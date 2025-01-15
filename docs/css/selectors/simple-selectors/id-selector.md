---
id: id-selector
title: ID Selector
sidebar_label: ID Selector
sidebar_position: 3
tags:
  [
    id-selector,
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
description: The ID selector is used to select a single element on a web page based on its ID attribute.
keywords:
  [
    id selector,
    css id selector,
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

In CSS, the ID selector is used to select a single element on a web page based on its ID attribute. It is denoted by a hash (`#`) followed by the ID name.

<AdsComponent />

## What is an ID Selector?

An ID selector selects a single element on a web page that has a specified ID attribute. It targets an HTML element based on the value of its `id` attribute. For example, to select an element with the ID `header`, you would use the following CSS rule:

```css title="styles.css"
#header {
  background-color: lightblue;
}
```

In this example, the CSS rule selects the element with the ID `header` and sets its background color to light blue. The ID selector is denoted by a hash (`#`) followed by the ID name (`header` in this case) and curly braces `{}` containing the CSS properties and values to apply to the selected element.

## Syntax of the ID Selector

The syntax of the ID selector is

```css title="styles.css"
#idname {
  property: value;
}
```

where `idname` is the ID attribute value of the element you want to select, and `property` and `value` are the CSS properties and values you want to apply to that element.

:::note
1. IDs should be unique within an HTML document. Using the same ID for multiple elements is invalid HTML and can lead to unexpected behavior in your web page.
2. IDs are typically used to target specific elements for styling or scripting purposes.
3. Unlike classes, IDs are not reusable because they are designed to uniquely identify a single element.
:::

By using ID selectors, you can target and style individual elements on your web page based on their unique ID attributes.

<AdsComponent />

## Example

<Tabs>
 <TabItem value="HTML" lable="index.html">
    ```html showLineNumbers
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>CSS ID Selector</title>
      <link rel="stylesheet" href="styles.css">
    </head>
    <body>
      <h1 id="main-heading">Welcome to the CSS Tutorial!</h1>
      <p>This is a regular paragraph.</p>
      <p id="highlighted-paragraph">This paragraph has a unique style.</p>
      <button id="special-button">Click Me</button>
    </body>
    </html>
    ```
  </TabItem>
  <TabItem value="CSS" lable="styles.css">
    ```css showLineNumbers
    /* Style for the main heading */
    #main-heading {
      font-size: 2.5rem;
      color: #2c3e50;
      text-align: center;
      text-transform: uppercase;
      margin-bottom: 20px;
    }

    /* Style for the highlighted paragraph */
    #highlighted-paragraph {
      font-size: 1.2rem;
      color: white;
      background-color: #ff5733;
      padding: 10px;
      border-radius: 5px;
    }

    /* Style for the special button */
    #special-button {
      background-color: #4caf50;
      color: white;
      border: none;
      padding: 10px 20px;
      font-size: 16px;
      cursor: pointer;
      border-radius: 5px;
    }

    #special-button:hover {
      background-color: #45a049;
    }
    ```
  </TabItem>
</Tabs>

Now, you can see the output of the above code in the Browser Window like this:

<BrowserWindow url="http://127.0.0.1:5500/index.html" bodyStyle={{fontFamily: "Arial, sans-serif", backgroundColor: "#f9f9f9", color: "#000"}}>
  <>
    <h1 style={{fontSize: "2.5rem", color: "#2c3e50", textAlign: "center", textTransform: "uppercase", marginBottom: "20px"}}>Welcome to the CSS Tutorial!</h1>
    <p>This is a regular paragraph.</p>
    <p id="highlighted-paragraph" style={{fontSize: "1.2rem", color: "white", backgroundColor: "#ff5733", padding: "10px", borderRadius: "5px"}}>This paragraph has a unique style.</p>
    <button id="special-button" style={{backgroundColor: "#4caf50", color: "white", border: "none", padding: "10px 20px", fontSize: "16px", cursor: "pointer", borderRadius: "5px"}}
    onMouseOver={(e) => e.target.style.backgroundColor = "#45a049"}
    onMouseOut={(e) => e.target.style.backgroundColor = "#4caf50"}
    >Click Me</button>
  </>
</BrowserWindow>

In this example, we have used the ID selector to style the main heading, a highlighted paragraph, and a special button on the web page. Each element is uniquely identified by its ID attribute, and the corresponding CSS rules apply specific styles to those elements.

<AdsComponent />

## Tips & Tricks for Using ID Selectors

Here are some tips and best practices for using ID selectors effectively in your CSS code:

1. **Use IDs Sparingly:** IDs should be used judiciously and only for elements that require unique styling or scripting. Avoid using IDs for styling common elements that can be targeted with classes.
2. **Avoid Overwriting:** Avoid overwriting styles applied by ID selectors with more specific selectors like classes or element selectors. Keep your CSS rules organized and avoid unnecessary specificity.
3. **Keep IDs Unique:** Ensure that each ID is unique within an HTML document. Using the same ID for multiple elements can lead to conflicts and unexpected behavior.
4. **Debugging Specificity Issues:** If you encounter specificity issues in your CSS code, use browser developer tools to inspect the applied styles and identify conflicting selectors.
5. **Avoid Combining IDs with Other Selectors:** While it is possible to combine ID selectors with other selectors, such as element selectors or class selectors, it is generally not recommended due to specificity concerns. Keep your selectors simple and specific to avoid unintended side effects.
6. **Good for Anchors:** IDs are commonly used for creating anchor links that navigate to specific sections of a web page. Use IDs for anchor links to improve accessibility and user experience.
   - For example
    
    ```html title="index.html"
    <a href="#section1">Go to Section 1</a>    
    <div id="section1">This is Section 1</div>
    ```

    In this example, the anchor link `<a href="#section1">Go to Section 1</a>` navigates to the section with the ID `section1` on the same page.

By following these tips and best practices, you can effectively use ID selectors in your CSS code and create well-structured and maintainable stylesheets.

## Advanced Usage of ID Selectors

### Combining with Pseudo-Classes

You can combine ID selectors with pseudo-classes to create interactive elements on your web page. For example, you can change the background color of a button when a user hovers over it by using the `:hover` pseudo-class:

```css title="styles.css"
#special-button:hover {
  background-color: #45a049;
}
```

In this example, the background color of the button changes to a different shade of green when the user hovers over it.

<AdsComponent />

### Using IDs in JavaScript

IDs are commonly used in JavaScript to target specific elements for dynamic behavior. You can access elements by their ID using the `document.getElementById()` method in JavaScript. For example, to change the text content of an element with the ID `main-heading`, you can use the following JavaScript code:

```javascript title="script.js"
document.getElementById('main-heading').textContent = 'Welcome to the New CSS Tutorial!';
```

This code snippet changes the text content of the element with the ID `main-heading` to "Welcome to the New CSS Tutorial!".

:::tip
By combining CSS and JavaScript, you can create dynamic and interactive web pages that respond to user actions.
:::

### Avoid Inline IDs 

While using IDs in CSS is a common practice, it is generally recommended to avoid inline IDs in HTML. Instead, use classes for styling elements and reserve IDs for JavaScript interactions or anchor links. This separation of concerns helps maintain a clean and modular codebase.

```html title="index.html"
<p id="highlighted-paragraph" style="color: red;">Avoid this approach.</p>
```

In the example above, the `style` attribute with an inline ID is discouraged. It is better to define styles in an external CSS file or use classes for styling elements.

<AdsComponent />

By following best practices and separating concerns, you can create well-structured and maintainable web pages.

## When to Use ID Selectors

ID selectors are useful when you need to target a specific element on a web page for styling or scripting purposes. Here are some scenarios where ID selectors are commonly used:

1. **Styling Unique Elements**: Use ID selectors to style elements that have unique styles or properties different from other elements on the page.
2. **JavaScript Interactions**: Use IDs to target elements for JavaScript interactions, such as event handling or dynamic content updates.
3. **Anchor Links**: IDs are often used to create anchor links that navigate to specific sections of a web page.
4. **Form Elements**: IDs can be used to target form elements for validation or custom styling.

By using ID selectors judiciously and following best practices, you can create well-designed and functional web pages that are easy to maintain and update.

## Conclusion

The ID selector in CSS allows you to target and style individual elements on a web page based on their unique ID attributes. By using the hash (`#`) symbol followed by the ID name, you can apply specific styles to a single element. IDs should be unique within an HTML document and are typically used for targeting specific elements for styling or scripting purposes. Use the ID selector to customize the appearance of individual elements and create a visually appealing and well-structured web page.