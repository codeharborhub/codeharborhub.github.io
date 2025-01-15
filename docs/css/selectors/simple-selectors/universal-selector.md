---
id: universal-selector
title: Universal Selector
sidebar_label: Universal Selector
sidebar_position: 4
tags:
  [
    universal-selector,
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
description: The universal selector is used to select all elements on a web page.
keywords:
  [
    universal selector,
    css universal selector,
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

In CSS, the universal selector is used to select all elements on a web page. It is denoted by an asterisk (`*`) and can be used to apply styles to all elements in a document.

<AdsComponent />

## What is a Universal Selector?

The universal selector selects all elements on a web page, regardless of their type or attributes. It is a wildcard selector that targets every element in the document. For example, to apply a margin of `0` to all elements, you can use the following CSS rule:

```css title="styles.css"
* {
  margin: 0;
}
```

In this example, the CSS rule selects all elements on the page and sets their margin to `0`. The universal selector is denoted by an asterisk (`*`) and curly braces `{}` containing the CSS properties and values to apply to all elements.

## Syntax of the Universal Selector

The syntax of the universal selector is

```css title="styles.css"
* {
  property: value;
}
```

The universal selector can be used to apply styles globally to all elements in a document. It is often used to reset default styles or apply common styles to all elements. However, it should be used with caution as it can have unintended consequences if not applied carefully.

:::tip Key Points to Remember
1. **Global Targeting:** The universal selector targets all elements on a web page.
2. **Wildcard Selector:** It is denoted by an asterisk (`*`) in CSS.
3. **Performance Impact:** Use it carefully, as applying styles to all elements can impact performance on larger websites.
4. **Default Resets:** It is often used to reset default styles or apply common styles to all elements.
:::

<AdsComponent />

## Example: Using the Universal Selector

Let's look at an example of using the universal selector to apply style to all elements on a web page:

<Tabs>
 <TabItem value="HTML" lable="index.html">
    ```html showLineNumbers
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>CSS Universal Selector</title>
      <link rel="stylesheet" href="styles.css">
    </head>
    <body>
      <h1>Welcome to the Universal Selector Demo</h1>
      <p>This is a paragraph of text.</p>
      <button>Click Me</button>
    </body>
    </html>
    ```

  </TabItem>
  <TabItem value="CSS" lable="styles.css">
    ```css showLineNumbers
    /* Apply global styles to all elements */
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: Arial, sans-serif;
    }

    /* Additional styling for specific elements */
    body {
      background-color: #f4f4f4;
      padding: 20px;
    }

    h1 {
      font-size: 2rem;
      color: #333;
      margin-bottom: 10px;
    }

    p {
      font-size: 1rem;
      color: #555;
      margin-bottom: 15px;
    }

    button {
      background-color: #007bff;
      color: white;
      border: none;
      padding: 10px 15px;
      cursor: pointer;
      border-radius: 5px;
    }

    button:hover {
      background-color: #0056b3;
    }
    ```

  </TabItem>
</Tabs>

Now, you can see the output of the above code in the Browser Window like this:

<BrowserWindow url="http://127.0.0.1:5500/index.html" bodyStyle={{fontFamily: "Arial, sans-serif", backgroundColor: "#f4f4f4", color: "#000"}}>
  <>
    <h1 style={{fontSize: "2rem", color: "#333", marginBottom: "10px"}}>Welcome to the Universal Selector Demo</h1>
    <p style={{fontSize: "1rem", color: "#555", marginBottom: "15px"}}>This is a paragraph of text.</p>
    <button style={{backgroundColor: "#007bff", color: "white", border: "none", padding: "10px 15px", cursor: "pointer", borderRadius: "5px"}} onMouseOver={(e) => e.target.style.backgroundColor = "#0056b3"} onMouseOut={(e) => e.target.style.backgroundColor = "#007bff"} >Click Me</button>
    </>
</BrowserWindow>

In this example, we have used the universal selector `*` to apply global styles to all elements on the page. We have set the margin, padding, box-sizing, and font-family properties for all elements. Additionally, we have applied specific styles to the `body`, `h1`, `p`, and `button` elements.

<AdsComponent />

## Tips & Tricks for Using the Universal Selector

Here are some tips and tricks for using the universal selector effectively in your CSS:

1. **Reset Margins and Padding:** Use the universal selector to reset margins and padding on all elements to create a consistent layout.
    - For example:
    
    ```css title="styles.css"
    * {
      margin: 0;
      padding: 0;
    }
    ```

2. **Set Box Sizing:** Use the universal selector to set the `box-sizing` property to `border-box` for all elements to include padding and border in the element's total width and height.

    ```css title="styles.css"
    * {
      box-sizing: border-box;
    }
    ```

3. **Apply Default Font:** Use the universal selector to set a default font family for all elements on the page.

    ```css title="styles.css"
    * {
      font-family: Arial, sans-serif;
    }
    ```

4. **Avoid Overuse:** Use the universal selector sparingly and avoid applying styles that are not needed for all elements, as it can impact performance.

5. **Scoped Use:** Consider scoping the universal selector within specific elements or sections of the page to limit its impact.

    - For example:
    
    ```css title="styles.css"
    .container * {
      font-family: 'Roboto', sans-serif;
    }
    ```

6. **Combining with Attribute Selectors:** You can combine the universal selector with attribute selectors to target specific types of elements.

    - For example:
    
    ```css title="styles.css"
    *[data-role] {
        border: 1px solid #ccc;
    }
    ```

By following these tips and tricks, you can effectively use the universal selector in your CSS to apply global styles to all elements on a web page.

<AdsComponent />

## Advanced Usage of the Universal Selector

While the universal selector is primarily used to target all elements on a web page, it can also be combined with other selectors to create more specific rules. Here are some advanced use cases of the universal selector:

### Applying Global Animations:

You can use the universal selector to apply animations to all elements on a page. For example, to apply a fade-in animation to all elements, you can use the following CSS rule:

```css title="styles.css"
* {
  animation: fadeIn 1s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
```

In this example, the `fadeIn` animation is applied to all elements using the universal selector.

### Resetting Default Styles:

The universal selector is often used to reset default styles provided by browsers. For example, to remove the default list-style from all lists on a page, you can use the following CSS rule:

```css title="styles.css"
* {
  list-style: none;
}
```

This rule removes the default bullet points or numbering from all lists on the page.

### Applying Global Transitions:

You can use the universal selector to apply transitions to all elements on a page. For example, to add a smooth transition effect to all elements when their color changes, you can use the following CSS rule:

```css title="styles.css"
* {
  transition: color 0.3s ease-in-out;
}
```

This rule applies a transition effect to all elements when their color changes, making the color change more visually appealing.

### Debugging Styles: 

The universal selector can be used to quickly debug styles on a page by applying a border to all elements. For example, to add a red border to all elements on a page, you can use the following CSS rule:

```css title="styles.css"
* {
  border: 1px solid red;
}
```

This rule can help you identify the layout and spacing of elements on a page during development.

### Thematic Styling: 

You can use the universal selector to apply thematic styling to all elements based on a specific theme or color scheme. For example, to apply a dark theme to all elements on a page, you can use the following CSS rule:

```css title="styles.css"
* {
  color: #fff;
  background-color: #333;
}
```

This rule sets the text color to white and the background color to dark gray for all elements on the page.

By combining the universal selector with other CSS selectors and properties, you can create powerful and flexible styles that apply globally to all elements on a web page.

<AdsComponent />

## When to Use the Universal Selector

The universal selector is a powerful tool in CSS that allows you to target all elements on a web page. It can be used in various scenarios, including:

1. **Global Resets:** Use the universal selector to reset default styles provided by browsers, such as margins, padding, and list styles.
2. **Common Styles:** Apply common styles, such as font families, box-sizing, or animations, to all elements on a page.
3. **Thematic Styling:** Apply thematic styling based on a specific theme or color scheme to all elements.

While the universal selector can be useful in these scenarios, it should be used with caution to avoid unintended consequences. Applying styles to all elements can impact performance, especially on larger websites with complex layouts.

## Best Practices

When using the universal selector in CSS, it is important to follow some best practices to ensure that your styles are applied effectively and efficiently:

1. **Use Sparingly:** Avoid applying styles to all elements unless necessary. Limit the use of the universal selector to global resets or common styles that need to be applied globally.
2. **Avoid Overriding Default Styles:** Be cautious when overriding default styles provided by browsers, as it can lead to unexpected behavior. Test your styles thoroughly to ensure they work as intended.
3. **Combine with Specific Selectors:** Use the universal selector in combination with specific selectors to create more targeted rules. This can help reduce the impact of the universal selector on performance.

By following these best practices, you can use the universal selector effectively in your CSS to apply global styles to all elements on a web page.

## Conclusion

The universal selector in CSS is a powerful tool that allows you to target all elements on a web page. It is denoted by an asterisk (`*`) and can be used to apply styles globally to all elements. While it can be useful for resetting default styles or applying common styles, it should be used with caution to avoid unintended consequences and performance issues.