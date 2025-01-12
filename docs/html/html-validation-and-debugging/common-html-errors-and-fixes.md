---
id: common-html-errors-and-fixes
title: Common HTML Errors and Fixes
sidebar_label: Common HTML Errors and Fixes
sidebar_position: 3
tags: [html, web-development, html-validation, debugging]
description: "In this tutorial, you will learn about common HTML errors and how to fix them to create valid and well-structured HTML documents."
keywords:
  [
    html,
    web development,
    html validation,
    debugging,
    common html errors,
    html errors,
    html fixes,
  ]
---

In this tutorial, you will learn about common HTML errors and how to fix them to create valid and well-structured HTML documents.

<AdsComponent />

## 1. Unclosed Tags

### Problem

One of the most common HTML errors is unclosed tags. An unclosed tag is a tag that is not properly closed with a corresponding closing tag. For example, consider the following HTML snippet:

```html title="index.html"
<!DOCTYPE html>
<html>
  <head>
    <title>My Website</title>
  </head>
  <body>
    <h1>Welcome to My Website
  </body>
</html>
```

In the above example, the `<h1>` tag is not properly closed with a `</h1>` tag. This will result in an unclosed tag error.

### Solution

To fix this error, you need to close the `<h1>` tag properly by adding a `</h1>` tag after the content of the heading. Here is the corrected version of the above example:

```html title="index.html"
<!DOCTYPE html>
<html>
  <head>
    <title>My Website</title>
  </head>
  <body>
    <h1>Welcome to My Website</h1>
  </body>
</html>
```

By closing the `<h1>` tag properly, you have resolved the unclosed tag error.

## 2. Missing DOCTYPE Declaration

### Problem

Another common HTML error is the missing `<!DOCTYPE>` declaration. The `<!DOCTYPE>` declaration specifies the document type and version of HTML being used in the document. For example, consider the following HTML snippet without a `<!DOCTYPE>` declaration:

```html title="index.html"
<html>
  <head>
    <title>My Website</title>
  </head>
  <body>
    <h1>Welcome to My Website</h1>
  </body>
</html>
```

In the above example, the `<!DOCTYPE>` declaration is missing, which can lead to compatibility issues with different browsers.

<AdsComponent />

### Solution

To fix this error, you need to add the `<!DOCTYPE>` declaration at the beginning of your HTML document. Here is the corrected version of the above example with the `<!DOCTYPE>` declaration:

```html title="index.html"
<!DOCTYPE html>
<html>
  <head>
    <title>My Website</title>
  </head>
  <body>
    <h1>Welcome to My Website</h1>
  </body>
</html>
```

By adding the `<!DOCTYPE>` declaration, you have resolved the missing `<!DOCTYPE>` error.

## 3. Incorrect Nesting of Tags

### Problem

Incorrect nesting of tags is another common HTML error. Tags should be properly nested within each other to create a well-structured HTML document. For example, consider the following HTML snippet with incorrect nesting:

```html title="index.html"
<!DOCTYPE html>
<html>
  <head>
    <title>My Website</title>
  </body>
  <h1>Welcome to My Website</h1>
</html>
```

In the above example, the `<h1>` tag is incorrectly placed outside the `<body>` tag, which results in incorrect nesting of tags.

### Solution

To fix this error, you need to ensure that tags are properly nested within each other. Here is the corrected version of the above example with correct nesting:

```html title="index.html"
<!DOCTYPE html>
<html>
  <head>
    <title>My Website</title>
  </head>
  <body>
    <h1>Welcome to My Website</h1>
  </body>
</html>
```

By correcting the nesting of tags, you have resolved the incorrect nesting error.

<AdsComponent />

## 4. Missing Alt Attribute for Images

### Problem

Another common HTML error is missing the `alt` attribute for images. The `alt` attribute provides alternative text for an image if the image cannot be displayed. For example, consider the following HTML snippet with a missing `alt` attribute:

```html title="index.html"
<!DOCTYPE html>
<html>
  <head>
    <title>My Website</title>
  </head>
  <body>
    <img src="image.jpg">
  </body>
</html>
```

In the above example, the `<img>` tag is missing the `alt` attribute, which can lead to accessibility issues for users who rely on screen readers.

### Solution

To fix this error, you need to add the `alt` attribute to the `<img>` tag with a descriptive text that describes the content of the image. Here is the corrected version of the above example with the `alt` attribute:

```html title="index.html"
<!DOCTYPE html>
<html>
  <head>
    <title>My Website</title>
  </head>
  <body>
    <img src="image.jpg" alt="A beautiful landscape">
  </body>
</html>
```

By adding the `alt` attribute, you have resolved the missing `alt` attribute error.

<AdsComponent />

## 5. Incorrect Attribute Values

### Problem

Incorrect attribute values are another common HTML error. Attribute values should be enclosed in quotes (`""`) and should be valid according to the HTML specification. For example, consider the following HTML snippet with incorrect attribute values:

```html title="index.html"
<!DOCTYPE html>
<html>
  <head>
    <title>My Website</title>
  </head>
  <body>
    <a href=about.html>About Us</a>
  </body>
</html>
```

In the above example, the `href` attribute value is not enclosed in quotes, which results in incorrect attribute values.

### Solution

To fix this error, you need to enclose attribute values in quotes (`""`). Here is the corrected version of the above example with correct attribute values:

```html title="index.html"
<!DOCTYPE html>
<html>
  <head>
    <title>My Website</title>
  </head>
  <body>
    <a href="about.html">About Us</a>
  </body>
</html>
```

By enclosing the attribute value in quotes, you have resolved the incorrect attribute values error.

<AdsComponent />

## 6. Using Deprecated Elements

### Problem

Using deprecated elements is another common HTML error. Deprecated elements are elements that are no longer supported in the latest HTML specifications and should be avoided. For example, consider the following HTML snippet using the `<center>` element:

```html title="index.html"
<!DOCTYPE html>
<html>
  <head>
    <title>My Website</title>
  </head>
  <body>
    <center>
      <h1>Welcome to My Website</h1>
    </center>
  </body>
</html>
```

In the above example, the `<center>` element is a deprecated element and should not be used in modern HTML documents.

### Solution

To fix this error, you need to replace deprecated elements with modern alternatives. In the case of the `<center>` element, you can use CSS to center elements on the page. Here is the corrected version of the above example without using the `<center>` element:

```html title="index.html"
<!DOCTYPE html>
<html>
  <head>
    <title>My Website</title>
    <style>
      .center {
        text-align: center;
      }
    </style>
  </head>
  <body>
    <div class="center">
      <h1>Welcome to My Website</h1>
    </div>
  </body>
</html>
```


By replacing the deprecated `<center>` element with CSS, you have resolved the deprecated elements error.

<AdsComponent />

## 7. Incorrect Self-Closing Tags

### Problem

Incorrect self-closing tags are another common HTML error. Self-closing tags should end with a forward slash (`/`) before the closing angle bracket (`>`). For example, consider the following HTML snippet with incorrect self-closing tags:

```html title="index.html"
<!DOCTYPE html>
<html>
  <head>
    <title>My Website</title>
  </head>
  <body>
    <img src="image.jpg">
    <br>
  </body>
</html>
```

In the above example, the `<img>` and `<br>` tags are not properly self-closed with a forward slash (`/`).

### Solution

To fix this error, you need to properly self-close tags with a forward slash (`/`). Here is the corrected version of the above example with correct self-closing tags:

```html title="index.html"
<!DOCTYPE html>
<html>
  <head>
    <title>My Website</title>
  </head>
  <body>
    <img src="image.jpg" />
    <br />
  </body>
</html>
```

By properly self-closing tags, you have resolved the incorrect self-closing tags error.

<AdsComponent />

## 8. Incorrect Case in Tags and Attributes

### Problem

Incorrect case in tags and attributes is another common HTML error. HTML is case-insensitive, but it is recommended to use lowercase for tags and attributes for consistency and readability. For example, consider the following HTML snippet with incorrect case in tags and attributes:

```html title="index.html"
<!DOCTYPE html>
<HTML>
  <HEAD>
    <TITLE>My Website</TITLE>
  </HEAD>
  <BODY>
    <IMG SRC="image.jpg" ALT="A beautiful landscape">
  </BODY>
</HTML>
```

In the above example, the tags and attributes are written in uppercase, which can make the code harder to read and maintain.

### Solution

To fix this error, you need to use lowercase for tags and attributes. Here is the corrected version of the above example with correct case in tags and attributes:

```html title="index.html"
<!DOCTYPE html>
<html>
  <head>
    <title>My Website</title>
  </head>
  <body>
    <img src="image.jpg" alt="A beautiful landscape" />
  </body>
</html>
```

By using lowercase for tags and attributes, you have resolved the incorrect case error.

<AdsComponent />

## 9. Missing Closing Tags

### Problem

Missing closing tags is another common HTML error. All opening tags should have a corresponding closing tag to create a well-structured HTML document. For example, consider the following HTML snippet with missing closing tags:

```html title="index.html"
<!DOCTYPE html>
<html>
  <head>
    <title>My Website
  </head>
  <body>
    <h1>Welcome to My Website
    </body>
</html>
```

In the above example, the `<title>`, `<head>`, and `<h1>` tags are missing their corresponding closing tags.

### Solution

To fix this error, you need to add the missing closing tags to the HTML document. Here is the corrected version of the above example with missing closing tags:

```html title="index.html"
<!DOCTYPE html>
<html>
  <head>
    <title>My Website</title>
  </head>
  <body>
    <h1>Welcome to My Website</h1>
  </body>
</html>
```

By adding the missing closing tags, you have resolved the missing closing tags error.

<AdsComponent />

## 10. Incorrect Comment Syntax

### Problem

Incorrect comment syntax is another common HTML error. Comments in HTML should be enclosed in `<!--` and `-->` to be valid. For example, consider the following HTML snippet with incorrect comment syntax:

```html title="index.html"
<!DOCTYPE html>
<html>
  <head>
    <title>My Website</title>
  </head>
  <body>
    <!-- This is a comment
  </body>
</html>
```

In the above example, the comment is not properly enclosed in `<!--` and `-->`.

### Solution

To fix this error, you need to enclose comments in `<!--` and `-->`. Here is the corrected version of the above example with correct comment syntax:

```html title="index.html"
<!DOCTYPE html>
<html>
  <head>
    <title>My Website</title>
  </head>
  <body>
    <!-- This is a comment -->
  </body>
</html>
```

By enclosing comments in `<!--` and `-->`, you have resolved the incorrect comment syntax error.

<AdsComponent />

## 11. Duplicate `id` Attributes

### Problem

Using duplicate `id` attributes is another common HTML error. The `id` attribute should be unique within an HTML document and should not be repeated. For example, consider the following HTML snippet with duplicate `id` attributes:

```html title="index.html"
<!DOCTYPE html>
<html>
  <head>
    <title>My Website</title>
  </head>
  <body>
    <h1 id="heading">Welcome to My Website</h1>
    <p id="heading">Lorem ipsum dolor sit amet</p>
  </body>
</html>
```

In the above example, both the `<h1>` and `<p>` tags have the same `id` attribute value, which is not allowed.

### Solution

To fix this error, you need to ensure that `id` attributes are unique within the HTML document. Here is the corrected version of the above example with unique `id` attributes:

```html title="index.html"
<!DOCTYPE html>
<html>
  <head>
    <title>My Website</title>
  </head>
  <body>
    <h1 id="heading">Welcome to My Website</h1>
    <p id="content">Lorem ipsum dolor sit amet</p>
  </body>
</html>
```

By using unique `id` attributes, you have resolved the duplicate `id` attributes error.

<AdsComponent />

## 12. Incorrectly Written Form Inputs

### Problem

Incorrectly written form inputs are another common HTML error. Form inputs should have a `name` attribute to identify the input when the form is submitted. For example, consider the following HTML snippet with incorrectly written form inputs:

```html title="index.html"
<!DOCTYPE html>
<html>
  <head>
    <title>My Form</title>
  </head>
  <body>
    <form action="/submit" method="post">
      <input type="text" placeholder="Enter your name">
      <input type="submit" value="Submit">
    </form>
  </body>
</html>
```

In the above example, the form inputs are missing the `name` attribute, which is required to identify the input when the form is submitted.

### Solution

To fix this error, you need to add the `name` attribute to form inputs. Here is the corrected version of the above example with the `name` attribute:

```html title="index.html"
<!DOCTYPE html>
<html>
  <head>
    <title>My Form</title>
  </head>
  <body>
    <form action="/submit" method="post">
      <input type="text" name="name" placeholder="Enter your name">
      <input type="submit" value="Submit">
    </form>
  </body>
</html>
```

By adding the `name` attribute to form inputs, you have resolved the incorrectly written form inputs error.

<AdsComponent />

## 13. Forgetting Meta Tags

### Problem

Forgetting meta tags is another common HTML error. Meta tags provide metadata about the HTML document, such as the character encoding, viewport settings, and description. For example, consider the following HTML snippet without meta tags:

```html title="index.html"
<!DOCTYPE html>
<html>
  <head>
    <title>My Website</title>
  </head>
  <body>
    <h1>Welcome to My Website</h1>
  </body>
</html>
```

In the above example, meta tags such as `<meta charset="UTF-8">` and `<meta name="viewport" content="width=device-width, initial-scale=1.0">` are missing.

### Solution

To fix this error, you need to add meta tags to the HTML document. Here is the corrected version of the above example with meta tags:

```html title="index.html"
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Website</title>
  </head>
  <body>
    <h1>Welcome to My Website</h1>
  </body>
</html>
```

By adding meta tags, you have resolved the forgetting meta tags error.

<AdsComponent />

## 14. Overlapping CSS and Inline Styles

### Problem

Overlapping CSS and inline styles is another common HTML error. Inline styles should be avoided in favor of external CSS files for better maintainability and separation of concerns. For example, consider the following HTML snippet with overlapping CSS and inline styles:

```html title="index.html"
<!DOCTYPE html>
<html>
  <head>
    <title>My Website</title>
    <style>
      h1 {
        color: red;
      }
    </style>
  </head>
  <body>
    <h1 style="color: blue;">Welcome to My Website</h1>
  </body>
</html>
```

In the above example, the `<h1>` tag has an inline style that overrides the CSS style defined in the `<style>` tag.

### Solution

To fix this error, you need to avoid overlapping CSS and inline styles. You can use external CSS files or internal CSS to define styles for your HTML document. Here are two ways to fix the overlapping CSS and inline styles error:

<Tabs>
  <TabItem value="External CSS file" label="External CSS file">

```css title="styles.css"
h1 {
  color: red;
}
```

```html title="index.html"
<!DOCTYPE html>
<html>
  <head>
    <title>My Website</title>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <h1>Welcome to My Website</h1>
  </body>
</html>
```

</TabItem>

<TabItem value="Internal CSS" label="Internal CSS">

```html title="index.html"
<!DOCTYPE html>
<html>
  <head>
    <title>My Website</title>
    <style>
      h1 {
        color: red;
      }
    </style>
  </head>
  <body>
    <h1>Welcome to My Website</h1>
  </body>
</html>
```

</TabItem>
</Tabs>

By using external CSS files or internal CSS, you can avoid overlapping CSS and inline styles.

<AdsComponent />

## 15. Not Testing in Multiple Browsers

### Problem

Not testing in multiple browsers is another common HTML error. Different browsers may render HTML and CSS differently, leading to compatibility issues. For example, a web page that looks fine in Google Chrome may have layout issues in Internet Explorer.

### Solution

To fix this error, you need to test your web pages in multiple browsers to ensure cross-browser compatibility. You can use tools like [BrowserStack](https://www.browserstack.com/) or [CrossBrowserTesting](https://www.smartbear.com/product/crossbrowsertesting/overview/) to test your web pages in various browsers and devices.

By testing in multiple browsers, you can identify and fix compatibility issues before deploying your web pages to production.

<AdsComponent />

## 16. Semantic HTML Issues

### Problem

Semantic HTML issues are another common HTML error. Semantic HTML elements should be used to provide meaning and structure to the content of the web page. For example, using `<div>` elements for headings instead of `<h1>`, `<h2>`, etc., can lead to semantic HTML issues.

For example, consider the following HTML snippet with non-semantic HTML elements:

```html title="index.html"
<!DOCTYPE html>
<html>
  <head>
    <title>My Website</title>
  </head>
  <body>
    <div>Welcome to My Website</div>
    <div>About Us</div>
    <div>Lorem ipsum dolor sit amet</div>
    <div>&copy; 2022 My Website</div>
  </body>
</html>
```

### Solution

To fix this error, you need to use semantic HTML elements to structure the content of your web page. Here is an example of using semantic HTML elements for headings:

```html title="index.html"
<!DOCTYPE html>
<html>
  <head>
    <title>My Website</title>
  </head>
  <body>
    <header>
      <h1>Welcome to My Website</h1>
    </header>
    <main>
      <article>
        <h2>About Us</h2>
        <p>Lorem ipsum dolor sit amet</p>
      </article>
    </main>
    <footer>
      <p>&copy; 2022 My Website</p>
    </footer>
  </body>
</html>
```

By using semantic HTML elements, you can improve the structure and accessibility of your web pages.

<AdsComponent />

## 17. JavaScript Integration Mistakes

### Problem

JavaScript integration mistakes are another common HTML error. Integrating JavaScript code directly into HTML documents can lead to maintenance issues and performance problems. For example, consider the following HTML snippet with inline JavaScript code:

```html title="index.html"
<!DOCTYPE html>
<html>
  <head>
    <title>My Website</title>
  </head>
  <body>
    <h1>Welcome to My Website</h1>
    <script>
      alert('Hello, World!');
    </script>
  </body>
</html>
```

In the above example, the JavaScript code is embedded directly into the HTML document, which can make the code harder to maintain and debug.

### Solution

To fix this error, you need to separate JavaScript code from HTML documents and use external JavaScript files. Here is an example of using an external JavaScript file:

```html title="index.html"
<!DOCTYPE html>
<html>
  <head>
    <title>My Website</title>
  </head>
  <body>
    <h1>Welcome to My Website</h1>
    <script src="script.js"></script>
  </body>
</html>
```

```javascript title="script.js"
alert('Hello, World!');
```

By using external JavaScript files, you can improve the maintainability and performance of your web pages.

<AdsComponent />

## 18. Accessibility Issues

### Problem

Accessibility issues are another common HTML error. Web pages should be designed to be accessible to users with disabilities, such as screen reader users. For example, using non-descriptive link text like "Click Here" can be a barrier to users who rely on screen readers.

### Solution

To fix this error, you need to design your web pages with accessibility in mind. Here are some tips to improve accessibility:

- Use descriptive link text that provides context about the link destination.
- Add alternative text to images using the `alt` attribute.
- Use semantic HTML elements to structure the content of your web pages.
- Ensure that form inputs have labels associated with them.
- Test your web pages with screen readers to identify accessibility issues.
- Follow the [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/) to make your web pages accessible to all users.

By addressing accessibility issues, you can create web pages that are inclusive and usable by everyone.


This tutorial has covered some of the most common HTML errors and how to fix them. By understanding and addressing these errors, you can create valid and well-structured HTML documents that are accessible to all users.


## Conclusion

By understanding and fixing these common HTML errors, you can create valid and well-structured HTML documents. It is important to validate your HTML code regularly using tools like the [W3C Markup Validation Service](https://validator.w3.org/) to ensure that your web pages are error-free and accessible to all users.