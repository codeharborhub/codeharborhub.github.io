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

<AdsComponent />

By using class selectors, you can apply consistent styles to elements with the same class across your web page, making it easier to maintain and update the styles.

## Multiple Classes

You can assign multiple classes to a single HTML element by separating class names with spaces. This allows you to combine styles from different classes on the same element. For example:

```html title="index.html"
<button class="btn btn-primary">Primary Button</button>
```

In this example, the button element has both the `btn` and `btn-primary` classes applied to it. This allows you to style the button using styles from both classes.

## Tips & Tricks for Using Class Selectors

1. **Use Descriptive Names:** Choose meaningful class names to make your code more readable and maintainable. For example, use `btn-primary` instead of `blue-button`.
   - For example:
   
   <div className="flex flex-wrap gap-4 mt-4">
      ```css title="Bad Example" showLineNumbers
      .blue-button {
        background-color: blue;
        color: white;
        padding: 10px 20px;
        border-radius: 5px;
      }
      ```

      ```css title="Good Example" showLineNumbers
      .btn-primary {
        background-color: blue;
        color: white;
        padding: 10px 20px;
        border-radius: 5px;
      }
      ```
    </div>

2. **Avoid Inline Styles:** Instead of using inline styles, apply styles using class selectors to keep your CSS separate from your HTML.
    - For example:
      
        ```html title="Bad Example" showLineNumbers
        <button style="background-color: blue; color: white; padding: 10px 20px; border-radius: 5px;">Click Me</button>
        ```

        ```html title="Good Example" showLineNumbers
        <button class="btn-primary">Click Me</button>
        ```

3. **Avoid Over-Nesting:** Try to keep your class selectors flat and avoid deep nesting to maintain a clear and concise style structure.
    - For example:
      
        ```css title="Bad Example" showLineNumbers
        .card .content .title {
          font-size: 1.5rem;
          color: #333;
        }
        ```

        ```css title="Good Example" showLineNumbers
        .card-title {
          font-size: 1.5rem;
          color: #333;
        }
        ```

4. **Combine Classes:** Use multiple classes on an element to combine styles and create reusable components.
    - For example:
      
        ```html title="index.html" showLineNumbers
        <button class="btn btn-primary">Primary Button</button>
        ```

        ```css title="styles.css" showLineNumbers
        .btn {
          padding: 10px 20px;
          border-radius: 5px;
        }

        .btn-primary {
          background-color: blue;
          color: white;
        }
        ```

5. **Utility Classes:** Consider using utility classes for common styles like margins, padding, and text alignment to keep your CSS concise and modular.
    - For example:
      
        ```html title="index.html" showLineNumbers
        <div class="flex justify-center items-center p-4">
          <p class="text-center">Centered Text</p>
        </div>
        ```

        ```css title="styles.css" showLineNumbers
        .flex {
          display: flex;
        }

        .justify-center {
          justify-content: center;
        }

        .items-center {
          align-items: center;
        }

        .p-4 {
          padding: 1rem;
        }

        .text-center {
          text-align: center;
        }
        ```

6. **CSS Framework-Like Approach:** Adopt a framework-like approach with predefined class structures for buttons, grids, cards, etc.
    - For example:
      
        ```html title="index.html" showLineNumbers
        <div class="card">
          <h2 class="card-title">Card Title</h2>
          <p class="card-content">This is some content inside a card.</p>
        </div>
        ```

        ```css title="styles.css" showLineNumbers
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
        ```

7. **Debugging Tip:** Use browser developer tools to inspect elements and check which styles are being applied to them. This can help you troubleshoot styling issues and conflicts.

By following these tips and best practices, you can effectively use class selectors to style your web pages and create maintainable CSS code.

<AdsComponent />

## Advanced Usage of Class Selectors

### Combining Class Selectors

You can combine multiple class selectors to create more specific styles for elements that have both classes applied. For example:

```css title="styles.css"
.btn {
  padding: 10px 20px;
  border-radius: 5px;
}

.btn-primary {
  background-color: blue;
  color: white;
}

.btn.btn-primary {
  font-weight: bold;
}
```

In this example, the `.btn.btn-primary` selector targets elements that have both the `btn` and `btn-primary` classes applied to them. This allows you to create more specific styles for elements with multiple classes.

### Pseudo-Classes with Class Selectors

You can also use pseudo-classes in combination with class selectors to style elements based on their state or interaction. For example:

```css title="styles.css"
.btn {
  padding: 10px 20px;
  border-radius: 5px;
}

.btn:hover {
  background-color: #3498db;
  color: white;
}
```

In this example, the `.btn:hover` selector applies styles to the button when it is hovered over by the user. Pseudo-classes can be a powerful way to add interactivity to your web page using class selectors.

<AdsComponent />

### Nesting Class Selectors

While CSS does not support true nesting of selectors, you can simulate nesting by chaining class selectors together. For example:

```css title="styles.css"
.card {
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 20px;
  margin: 20px 0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.card .card-title {
  font-size: 1.5rem;
  color: #007bff;
}

.card .card-content {
  font-size: 1rem;
  color: #555;
}
```

In this example, the `.card .card-title` and `.card .card-content` selectors simulate nesting by targeting elements with the `card-title` and `card-content` classes that are descendants of elements with the `card` class.

### Attribute Selectors with Class Selectors

You can also use attribute selectors in combination with class selectors to target elements based on their attributes. For example:

```css title="styles.css"
.btn {
  padding: 10px 20px;
  border-radius: 5px;
}

.btn[type="submit"] {
  background-color: #2ecc71;
  color: white;
}

.btn[type="reset"] {
  background-color: #e74c3c;
  color: white;
}
```

In this example, the `.btn[type="submit"]` and `.btn[type="reset"]` selectors target buttons with the `btn` class and specific `type` attributes, applying different styles based on the button type.

<AdsComponent />

By using these advanced techniques, you can create more complex and specific styles for your web page using class selectors.

## When to Use Class Selectors

Class selectors are ideal for styling groups of elements that share common styles or characteristics. Here are some scenarios where class selectors are commonly used:

1. **Reusable Styles:** Use class selectors to create reusable styles that can be applied to multiple elements across your web page.
2. **Component Styling:** Apply class selectors to style components or sections of your web page consistently.
3. **Button Styling:** Use class selectors to style buttons with different variations (e.g., primary, secondary, success, danger).
4. **Card Components:** Style card-like components with class selectors to create consistent layouts.
5. **Navigation Menus:** Apply class selectors to style navigation menus, links, and buttons for a cohesive design.
6. **Form Elements:** Use class selectors to style form elements like input fields, checkboxes, and radio buttons.
7. **Alert Messages:** Style alert messages, notifications, or banners with class selectors for a consistent look and feel.

By using class selectors in these scenarios, you can create a more organized and maintainable CSS structure for your web page.

## Conclusion

The class selector in CSS is a powerful tool for selecting and styling elements based on their class attributes. By using class selectors, you can apply consistent styles to groups of elements across your web page, making it easier to maintain and update the styles. It allows you to create reusable styles that can be applied to multiple elements, improving the consistency and maintainability of your CSS code.