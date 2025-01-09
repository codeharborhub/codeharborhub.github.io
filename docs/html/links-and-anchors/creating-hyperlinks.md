---
id: creating-hyperlinks
title: Creating Hyperlinks in HTML
sidebar_label: Creating Hyperlinks
sidebar_position: 1
tags: [html, web-development, hyperlinks, links]
description: In this tutorial, you will learn how to create hyperlinks in HTML. Hyperlinks are used to link one web page to another, or to link to a specific section within the same web page.
keywords: [HTML hyperlinks, HTML links, anchor tag, href attribute, web development, HTML tutorial]
---

Hyperlinks, also known as links, are an essential part of web development. They allow users to navigate between different web pages or sections within the same page. In HTML, hyperlinks are created using the `<a>` (anchor) tag, which defines a clickable link to another location.

<AdsComponent />

In this tutorial, you will learn how to create hyperlinks in HTML, link to external websites, link to specific sections within a page, and use relative and absolute URLs.

## Creating a Basic Hyperlink

To create a basic hyperlink in HTML, you use the `<a>` tag along with the `href` attribute, which specifies the URL of the page or resource you want to link to. Here's an example of a simple hyperlink:

```html title="index.html"
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Hyperlink Example</title>
</head>
<body>
  <h1>Welcome to my website!</h1>
  <p>Click <a href="https://ajay-dhangar.github.io/">here</a> to visit my portfolio.</p>
</body>
</html>
```

In this example, the text "here" is a hyperlink that, when clicked, will take the user to the specified URL (in this case, my portfolio website).

<BrowserWindow url="http://.../index.html" bodyStyle={{backgroundColor: "#fff", color: "#333"}}>
<>
  <h1>Welcome to my website!</h1>
  <p>Click <a href="https://ajay-dhangar.github.io/">here</a> to visit my portfolio.</p>
</>
</BrowserWindow>

## Linking to Sections within a Page

You can also create hyperlinks that link to specific sections within the same web page. To do this, you need to use the `id` attribute to define an anchor point within the page and then create a hyperlink that points to that anchor. Here's an example:

```html title="index.html"
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Internal Link Example</title>
</head>
<body>
  <h1>Welcome to my website!</h1>
  <p>Click <a href="#about">here</a> to jump to the About section.</p>
  <h2 id="about">About</h2>
  <p>This is the About section of the page.</p>
</body>
</html>
```

In this example, the text "here" is a hyperlink that, when clicked, will scroll the page to the section with the `id="about"`. This technique is commonly used for creating navigation menus and linking to different sections of a long web page.

<BrowserWindow url="http://.../index.html" bodyStyle={{backgroundColor: "#fff", color: "#333"}}>
<>
  <h1>Welcome to my website!</h1>
  <p>Click <a href="#about">here</a> to jump to the About section.</p>
  <h2 id="about">About</h2>
  <p>This is the About section of the page.</p>
</>
</BrowserWindow>

<AdsComponent />

## Using Relative and Absolute URLs

When creating hyperlinks, you can use both relative and absolute URLs to specify the target location. Relative URLs are used to link to resources within the same website, while absolute URLs are used to link to external websites or resources.

### Relative URLs

Here's an example of a hyperlink using a relative URL:

```html title="index.html"
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Relative URL Example</title>
</head>
<body>
  <h1>Welcome to my website!</h1>
  <p>Click <a href="about.html">here</a> to learn more about me.</p>
</body>
</html>
```

In this example, the hyperlink points to a file named `about.html` in the same directory as the current page. Relative URLs are useful for linking to pages within the same website without specifying the full URL.

<AdsComponent />

### Absolute URLs

For linking to external websites or resources, you can use an absolute URL like this:

```html title="index.html"
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Absolute URL Example</title>
</head>

<body>
  <h1>Welcome to my website!</h1>
  <p>Click <a href="https://ajay-dhangar.github.io/ai-buddies/">here</a> to visit AI Buddies.</p>
</body>
</html>
```

In this case, the hyperlink points to an external website (AI Buddies) using an absolute URL. Absolute URLs include the full address of the resource, including the protocol (`http://` or `https://`), domain name, and path.

## Conclusion

Hyperlinks are a fundamental part of web development, allowing users to navigate between different pages and sections of a website. By using the `<a>` tag and the `href` attribute, you can create clickable links that enhance the user experience and provide easy access to relevant content.