---
id: attribute-selectors
title: Attribute Selectors
sidebar_label: Attribute Selectors
sidebar_position: 2
tags: ['css-selectors', 'attribute-selectors', 'css', 'selectors']
description: "Grouping selectors with attribute selectors in CSS allows you to apply the same styles to multiple selectors based on their attributes."
keywords:
  - 'attribute selectors'
  - 'css attribute selectors'
  - 'css selectors'
  - 'css'
  - 'selectors'
  - 'grouping selectors'
  - 'css grouping selectors'
  - 'css selectors'
  - 'css'
  - 'selectors'
  - 'simple selectors'
---

In CSS, you can group multiple selectors together to apply the same styles to all of them. This is called grouping selectors. Grouping selectors can help you write more concise and maintainable CSS code.

<AdsComponent />

## What are Attribute Selectors?

Attribute selectors in CSS allow you to apply styles to elements based on their attributes. You can target elements with specific attributes and apply styles to them using attribute selectors. Attribute selectors are useful when you want to style elements based on their attributes, such as `href`, `src`, `type`, etc.

Here's an example of attribute selectors in CSS:

```css title="styles.css" showLineNumbers
a[target="_blank"] {
  color: blue;
}
```

In this example, we are targeting all anchor (`a`) elements with the `target="_blank"` attribute and applying the `color: blue;` style to them.

## Syntax of Attribute Selectors

The syntax for attribute selectors in CSS is simple. You can target elements based on their attributes by using square brackets (`[]`). Here's the syntax:

```css title="styles.css" showLineNumbers
selector[attribute="value"] {
  property: value;
}
```

In the syntax above:

- `selector` is the element you want to target.
- `attribute` is the attribute you want to target.
- `value` is the value of the attribute you want to target.
- `property: value;` is the style you want to apply to elements with the specified attribute and value.
- You can target elements with specific attributes by using the `[attribute="value"]` syntax.

<AdsComponent />

:::tip Key Points to Remember
You can also use other attribute selectors like `^`, `$`, `*`, and `~` to target elements based on different conditions. Here are some examples:

- `^` (prefix): `a[href^="https"]` targets all anchor elements with an `href` attribute that starts with `https`.
   For example:

    ```css title="styles.css" showLineNumbers
    a[href^="https"] {
      color: green;
    }
    ```
- `$` (suffix): `a[href$=".pdf"]` targets all anchor elements with an `href` attribute that ends with `.pdf`.
    For example:
    
     ```css title="styles.css" showLineNumbers
     a[href$=".pdf"] {
        color: red;
     }
     ```

- `*` (substring): `input[type*="text"]` targets all input elements with a `type` attribute that contains the substring `text`.
    For example:
    
     ```css title="styles.css" showLineNumbers
     input[type*="text"] {
        background-color: lightgray;
     }
     ```
- `~` (subsequent sibling): `input[type="checkbox"] ~ label` targets all `label` elements that are siblings of an `input` element with `type="checkbox"`.
    For example:
    
     ```css title="styles.css" showLineNumbers
     input[type="checkbox"] ~ label {
        font-weight: bold;
     }
     ```
:::

## Types of Attribute Selectors

There are different types of attribute selectors in CSS that you can use to target elements based on their attributes. Here are some common types of attribute selectors:

### Exact Match Attribute Selector

The exact match attribute selector targets elements with an attribute that exactly matches the specified value. You can use the `[attribute="value"]` syntax to target elements with an exact match attribute.

**For example:**

```css title="styles.css" showLineNumbers
input[type="text"] {
  border: 1px solid #ccc;
}
```

In this example, we are targeting all `input` elements with the `type="text"` attribute and applying the `border: 1px solid #ccc;` style to them.

<AdsComponent />

### Prefix Match Attribute Selector

The prefix match attribute selector targets elements with an attribute that starts with the specified value. You can use the `[attribute^="value"]` syntax to target elements with a prefix match attribute.

**For example:**

```css title="styles.css" showLineNumbers
a[href^="https"] {
  color: green;
}
```

In this example, we are targeting all anchor (`a`) elements with an `href` attribute that starts with `https` and applying the `color: green;` style to them.

### Suffix Match Attribute Selector

The suffix match attribute selector targets elements with an attribute that ends with the specified value. You can use the `[attribute$="value"]` syntax to target elements with a suffix match attribute.

**For example:**

```css title="styles.css" showLineNumbers
a[href$=".pdf"] {
  color: red;
}
```

In this example, we are targeting all anchor (`a`) elements with an `href` attribute that ends with `.pdf` and applying the `color: red;` style to them.

### Substring Match Attribute Selector

The substring match attribute selector targets elements with an attribute that contains the specified value. You can use the `[attribute*="value"]` syntax to target elements with a substring match attribute.

**For example:**

```css title="styles.css" showLineNumbers
input[type*="text"] {
  background-color: lightgray;
}
```

In this example, we are targeting all `input` elements with a `type` attribute that contains the substring `text` and applying the `background-color: lightgray;` style to them.

<AdsComponent />

### Space-separated Values Attribute Selector

The space-separated values attribute selector targets elements with an attribute that contains the specified value as one of the space-separated values. You can use the `[attribute~="value"]` syntax to target elements with space-separated values attribute.

**For example:**

```css title="styles.css" showLineNumbers
input[type="checkbox"] ~ label {
  font-weight: bold;
}
```

In this example, we are targeting all `label` elements that are siblings of an `input` element with `type="checkbox"` and applying the `font-weight: bold;` style to them.

## Grouping Selectors with Attribute Selectors

You can group selectors with attribute selectors to apply the same styles to multiple selectors based on their attributes. Grouping selectors with attribute selectors can help you write more concise and maintainable CSS code.

Here's an example of grouping selectors with attribute selectors in CSS:

```css title="styles.css" showLineNumbers
[href^="https"], [href*="codeharborhub"] {
  color: green;
}
```

In this example, we are grouping selectors with attribute selectors to target all elements with an `href` attribute that starts with `https` or contains the substring `codeharborhub` (for example, `https://codeharborhub.github.io`) and applying the `color: green;` style to them.

<AdsComponent />

## Example: Using Attribute Selectors

Let's see an example of using attribute selectors in CSS to style elements based on their attributes:

<Tabs>
 <TabItem value="HTML" lable="index.html">
    ```html showLineNumbers
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>CSS Attribute Selectors</title>
      <link rel="stylesheet" href="styles.css">
    </head>
    <body>
      <h1>Attribute Selectors Example</h1>
      <p><a href="https://codeharborhub.github.io">Visit CodeHarborHub</a></p>
      <p><a href="https://www.w3schools.com" target="_blank">Visit W3Schools</a></p>
      <p><a href="http://localhost:3000/">Visit Localhost</a></p>
      <input type="text" placeholder="Enter your name">
      <input type="submit" value="Submit">
      <img src="image.jpg" alt="Sample Image">
      <p title="Tooltip Example">Hover over me!</p>
    </body>
    </html>
    ```
  </TabItem>

  <TabItem value="CSS" lable="styles.css">
    ```css showLineNumbers
    /* Select elements with a title attribute */
    [title] {
      color: blue;
      cursor: pointer;
    }

    /* Select links with href starting with 'https' */
    [href^="https"] {
      color: green;
      text-decoration: none;
    }

    /* Select links containing 'codeharborhub' in their href */
    [href*="codeharborhub"] {
      text-decoration: underline;
      font-weight: bold;
    }

    /* Select input elements of type text */
    [type="text"] {
      border: 2px solid #ccc;
      padding: 5px;
      border-radius: 4px;
    }

    /* Select images with src ending in .jpg */
    [src$=".jpg"] {
      width: 100px;
      height: auto;
      border: 1px solid black;
    }

    /* Select input elements of type submit */
    [type="submit"] {
      background-color: #007bff;
      color: white;
      border: none;
      padding: 10px 15px;
      cursor: pointer;
      border-radius: 5px;
    }
    ```
  </TabItem>
</Tabs>

Now, you can see the output of the above code in the Browser Window like this:

<BrowserWindow url="http://127.0.0.1:5500/index.html" bodyStyle={{ backgroundColor: "#f9f9f9", color: "#000" }}>
  <>
    <h1>Attribute Selectors Example</h1>
    <p>
      <a
        href="https://codeharborhub.github.io"
        style={{
          color: "green",
          textDecoration: "underline",
          fontWeight: "bold",
        }}
      >
        Visit CodeHarborHub
      </a>
    </p>
    <p>
      <a
        href="https://www.w3schools.com"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          color: "green",
          textDecoration: "none",
        }}
      >
        Visit W3Schools
      </a>
    </p>
    <p>
      <a
        href="http://localhost:3000/"
        style={{
          color: "blue",
          textDecoration: "underline",
        }}
      >
        Visit Localhost
      </a>
    </p>
    <input
      type="text"
      placeholder="Enter your name"
      style={{
        border: "2px solid #ccc",
        padding: "5px",
        borderRadius: "4px",
        margin: "10px 0",
      }}
    />
    <input
      type="submit"
      value="Submit"
        style={{
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            padding: "10px 15px",
            cursor: "pointer",
            borderRadius: "5px",
            margin: "10px 5px",
        }}
    />
    <img
      src="/assets/jpeg-image.jpg"
      alt="Sample Image"
      style={{
        width: "100px",
        height: "auto",
        border: "1px solid black",
        margin: "10px 0",
        borderRadius: "0",
      }}
    />
    <p
      title="Tooltip Example"
      style={{
        color: "blue",
        cursor: "pointer",
      }}
    >
      Hover over me!
    </p>
  </>
</BrowserWindow>

In this example, we are using attribute selectors in CSS to style elements based on their attributes. We are targeting elements with specific attributes like `title`, `href`, `type`, and `src` and applying styles to them using attribute selectors.

<AdsComponent />

## Tips & Tricks for Attribute Selectors

### Dynamic Styling

You can use attribute selectors to dynamically style elements based on their attributes. For example, you can style links differently based on their `href` attribute values.

For example, you can style external links differently from internal links by using attribute selectors:

```css title="styles.css" showLineNumbers
a[href^="http"] {
  color: blue;
}

a[href^="https"] {
  color: green;
}

[placeholder] {
  font-style: italic;
  color: #999;
}
```

In this example, we are styling links with `href` attributes that start with `http` in blue and links with `href` attributes that start with `https` in green. We are also styling elements with `placeholder` attributes in italic and gray color.

### Target External Links

You can use attribute selectors to target external links and apply specific styles to them. For example, you can style external links to open in a new tab and have a different color.

```css title="styles.css" showLineNumbers
a[target="_blank"] {
  color: blue;
  text-decoration: none;
}
```

In this example, we are targeting all anchor (`a`) elements with the `target="_blank"` attribute and applying the `color: blue;` and `text-decoration: none;` styles to them.

### Responsive Design

You can use attribute selectors inside media queries to apply different styles based on the screen size. For example, you can make input elements full-width on smaller screens using media queries.

```css title="styles.css" showLineNumbers
@media (max-width: 600px) {
  [type="text"] {
    width: 100%;
  }
}
```

In this example, we are using a media query to target all `input` elements with the `type="text"` attribute and applying the `width: 100%;` style to them when the screen width is less than or equal to `600px`.

### Debugging

You can use attribute selectors to debug your HTML code by targeting elements with specific attributes. For example, you can style elements with missing alt attributes to make them stand out.

```css title="styles.css" showLineNumbers
img:not([alt]) {
  border: 2px solid red;
}
```

In this example, we are targeting all `img` elements without an `alt` attribute and applying the `border: 2px solid red;` style to them.

<AdsComponent />

### Custom Data Attributes

You can use custom data attributes in HTML to store additional information about elements and target them using attribute selectors in CSS. Custom data attributes start with `data-` followed by a name.

For example, you can use custom data attributes to store information about elements and style them differently based on the data attribute values.

<Tabs>
 <TabItem value="HTML" lable="index.html">
    ```html showLineNumbers
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Custom Data Attributes</title>
      <link rel="stylesheet" href="styles.css">
    </head>
    <body>
      <h1>Custom Data Attributes</h1>
      <p data-category="news">Latest News</p>
      <p data-category="sports">Sports News</p>
      <p data-category="tech">Tech News</p>
    </body>
    </html>
    ```
  </TabItem>
    
  <TabItem value="CSS" lable="styles.css">
        ```css showLineNumbers
    /* Select elements with data-category attribute */
    [data-category="news"] {
      color: blue;
    }

    [data-category="sports"] {
      color: green;
    }

    [data-category="tech"] {
      color: red;
    }
    ```

  </TabItem>
</Tabs>

Now, you can see the output of the above code in the Browser Window like this:

<BrowserWindow url="http://127.0.0.1:5500/index.html" bodyStyle={{ backgroundColor: "#f9f9f9", color: "#000" }}>
  <>
    <h1>Custom Data Attributes</h1>
    <p style={{ color: "blue" }} data-category="news">Latest News</p>
    <p style={{ color: "green" }} data-category="sports">Sports News</p>
    <p style={{ color: "red" }} data-category="tech">Tech News</p>
  </>
</BrowserWindow>

In this example, we are using custom data attributes in HTML to store information about elements and styling them differently based on the data attribute values using attribute selectors in CSS.

## Advanced Usage of Attribute Selectors

Attribute selectors in CSS are powerful and versatile. You can use them in combination with other selectors, pseudo-classes, and pseudo-elements to create complex and dynamic styles for your web pages.

Here are some advanced use cases of attribute selectors in CSS:

### Combining Attribute Selectors

You can combine multiple attribute selectors to target elements with specific attributes and values. For example, you can target links with specific `href` values and `target` attributes.

```css title="styles.css" showLineNumbers
a[href^="https"][target="_blank"] {
  color: blue;
  text-decoration: none;
}
```

In this example, we are targeting all anchor (`a`) elements with an `href` attribute that starts with `https` and a `target="_blank"` attribute and applying the `color: blue;` and `text-decoration: none;` styles to them.

<AdsComponent />

### Using Attribute Selectors with Pseudo-classes

You can use attribute selectors with pseudo-classes to style elements based on their state or position. For example, you can style input elements with specific attributes when they are in focus.

```css title="styles.css" showLineNumbers
input[type="text"]:focus {
  border-color: blue;
  box-shadow: 0 0 5px rgba(0, 0, 255, 0.5);
}
```

In this example, we are targeting all `input` elements with the `type="text"` attribute when they are in focus and applying the `border-color: blue;` and `box-shadow: 0 0 5px rgba(0, 0, 255, 0.5);` styles to them.

### Animations

You can use attribute selectors with animations to create dynamic effects on elements based on their attributes. For example, you can create a pulsating effect on elements with a specific attribute value.

```css title="styles.css" showLineNumbers
[data-loading="true"] {
  animation: pulse 1s infinite;
}

@keyframes pulse {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}
```

In this example, we are targeting all elements with the `data-loading="true"` attribute and applying a pulsating animation to them using keyframes.

By using attribute selectors in combination with other CSS features, you can create more complex and powerful styles for your web pages.

## Best Practices for Attribute Selectors

When using attribute selectors in CSS, consider the following best practices:

- Avoid overly complex selectors for performance-sensitive applications.
- Use attribute selectors in combination with classes for specificity when needed.
- Test compatibility with older browsers if you rely heavily on attribute selectors.

By following these best practices, you can ensure that your CSS code is maintainable, performant, and compatible with a wide range of browsers.

## Conclusion

Attribute selectors in CSS allow you to target elements based on their attributes and apply styles to them. You can use attribute selectors to create dynamic and responsive styles for your web pages. By grouping selectors with attribute selectors, you can apply the same styles to multiple selectors based on their attributes. Attribute selectors are a powerful feature of CSS that can help you write more concise and maintainable code.
