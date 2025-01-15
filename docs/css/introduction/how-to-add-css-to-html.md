---
id: how-to-add-css-to-html
title: How to Add CSS to HTML
sidebar_label: How to Add CSS to HTML
sidebar_position: 2
tags:
  [
    how-to-add-css-to-html,
    css-introduction,
    css,
    introduction,
    css-basics,
    css-tutorial,
    css-guide,
    css-tutorial-for-beginners,
    learn-css,
    css-tutorial-for-beginners,
    css-tutorial-for-beginners-2025,
    css-tutorial-for-learning,
  ]
description: In this tutorial, you will learn how to add CSS to an HTML document using internal, external, and inline styles.
keywords:
  [
    how to add css to html,
    add css to html,
    css introduction,
    css basics,
    css tutorial,
    css guide,
    css tutorial for beginners,
    learn css,
    css tutorial for beginners 2025,
    css tutorial for learning,
  ]
---

In this tutorial, you will learn how to add CSS to an HTML document using internal, external, and inline styles. CSS (Cascading Style Sheets) is a style sheet language that is used to describe the look and formatting of a document written in HTML or XML. It allows you to style web pages and user interfaces, making it easier to create visually appealing and responsive websites.

<AdsComponent />

## How to Add CSS to HTML

There are three ways to add CSS to an HTML document:

### 1. Internal CSS

Internal CSS is added within the `<style>` element in the `<head>` section of an HTML document. It allows you to define styles that apply only to that specific document. Here's an example of how to add internal CSS to an HTML document:

```html title="index.html"
<!DOCTYPE html>
<html>
<head>
  <title>Internal CSS Example</title>
  <style>
    body {
      background-color: lightblue;
    }

    h1 {
      color: navy;
      text-align: center;
    }
  </style>
</head>
<body>
  <h1>Welcome to My Website</hh1>
  <p>This is an example of internal CSS.</p>    
</body>
</html>
```

In this example, the background color of the `<body>` element is set to `lightblue`, and the color and alignment of the `<h1>` element are defined using internal CSS.

When you run this HTML document in a web browser. It will display the content with the styles defined in the internal CSS.

<BrowserWindow url="http://127.0.0.1:5500/index.html" bodyStyle={{fontFamily: "Arial, sans-serif", backgroundColor: "lightblue", color: "#000"}}>
       <>
        <h1 style={{ color: 'navy', textAlign: 'center' }}>Welcome to My Website</h1>
        <p>This is an example of internal CSS.</p>
       </>
</BrowserWindow>

<AdsComponent />

### 2. External CSS

External CSS is added in a separate CSS file and linked to an HTML document using the `<link>` element in the `<head>` section. It allows you to define styles that can be shared across multiple documents. Here's an example of how to add external CSS to an HTML document:

```html title="index.html"
<!DOCTYPE html>
<html>
<head>
  <title>External CSS Example</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <h1>Welcome to My Website</hh1>
  <p>This is an example of external CSS.</p>
</body>
</html>
```

And create a separate CSS file named `styles.css` with the following content:

```css title="styles.css"
body {
  background-color: lightblue;
}

h1 {
  color: navy;
  text-align: center;
}
```

In this example, the CSS styles are defined in a separate file named `styles.css`, which is linked to the HTML document using the `<link>` element. The styles defined in the external CSS file are applied to the elements in the HTML document.

<AdsComponent />

When you run this HTML document in a web browser. It will display the content with the styles defined in the external CSS.

<BrowserWindow url="http://127.0.0.1:5500/index.html" bodyStyle={{fontFamily: "Arial, sans-serif", backgroundColor: "lightblue", color: "#000"}}>
       <>
        <h1 style={{ color: 'navy', textAlign: 'center' }}>Welcome to My Website</h1>
        <p>This is an example of external CSS.</p>
       </>
</BrowserWindow>

### 3. Inline CSS

Inline CSS is added directly to an HTML element using the `style` attribute. It allows you to define styles that apply only to that specific element. Here's an example of how to add inline CSS to an HTML document:

```html title="index.html"
<!DOCTYPE html>
<html>
<head>
  <title>Inline CSS Example</title>
</head>
<body>
  <h1 style="color: navy; text-align: center;">Welcome to My Website</h1>
  <p style="color: green;">This is an example of inline CSS.</p>
</body>
</html>
```

In this example, the color and alignment of the `<h1>` element and the color of the `<p>` element are defined using inline CSS.

When you run this HTML document in a web browser. It will display the content with the styles defined in the inline CSS.

<BrowserWindow url="http://127.0.0.1:5500/index.html" bodyStyle={{fontFamily: "Arial, sans-serif", backgroundColor: "#f9f9f9"}}>
       <>
        <h1 style={{ color: 'navy', textAlign: 'center' }}>Welcome to My Website</h1>
        <p style={{ color: 'green' }}>This is an example of inline CSS.</p>
       </>
</BrowserWindow>

By using internal, external, and inline CSS, you can style web pages and user interfaces to create visually appealing and responsive websites.

<AdsComponent />

:::note
1. Make sure the `styles.css` file is in the same directory as the `index.html` file.
2. The `<link>` element should be placed in the `<head>` section of the HTML document.
3. The `href` attribute of the `<link>` element should point to the location of the external CSS file.
4. `<link rel="stylesheet" href="styles.css">` where:
   - `rel="stylesheet"` specifies the relationship between the HTML document and the linked CSS file.
   - `href="styles.css"` specifies the location of the external CSS file.
5. The `style` attribute is used to add inline CSS to an HTML element.
6. The `style` attribute contains one or more CSS property-value pairs separated by a semicolon.
7. The CSS property is followed by a colon (`:`) and the property value.
8. The CSS property-value pairs are enclosed in double quotes (`"`).
9. The CSS property-value pairs are separated by a semicolon (`;`).
10. The `style` attribute is added directly to the HTML element.
11. The `style` attribute overrides any styles applied to the element using internal or external CSS.
12. The `style` attribute is not recommended for large-scale styling as it can make the HTML document harder to maintain. 
:::

## Conclusion

In this tutorial, you learned how to add CSS to an HTML document using internal, external, and inline styles. Internal CSS is added within the `<style>` element in the `<head>` section, external CSS is added in a separate CSS file and linked to the HTML document using the `<link>` element, and inline CSS is added directly to an HTML element using the `style` attribute. By using these methods, you can style web pages and user interfaces to create visually appealing and responsive websites.