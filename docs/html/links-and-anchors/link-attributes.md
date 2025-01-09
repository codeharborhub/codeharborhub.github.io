---
id: link-attributes
title: Link Attributes in HTML
sidebar_label: Link Attributes
sidebar_position: 2
tags: [html, web-development, link-attributes, links]
description: In this tutorial, you will learn about link attributes in HTML. Link attributes define the behavior, appearance, and target of hyperlinks in web pages.
keywords:
  [
    HTML link attributes,
    HTML hyperlinks,
    anchor tag,
    href attribute,
    target attribute,
    rel attribute,
    web development,
    HTML tutorial,
  ]
---

Hyperlinks, also known as links, are an essential part of web development. They allow users to navigate between different web pages or sections within the same page. In HTML, hyperlinks are created using the `<a>` (anchor) tag, which defines a clickable link to another location.

<AdsComponent />

In this tutorial, you will learn about link attributes in HTML that define the behavior, appearance, and target of hyperlinks in web pages.

## The `href` Attribute

The `href` attribute is the most important attribute of the `<a>` tag and specifies the URL of the page or resource you want to link to. It can be an absolute URL (e.g., `https://.../page.html`) or a relative URL (e.g., `page.html`).

Here's an example of a hyperlink with the `href` attribute:

```html title="index.html"
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Hyperlink Example</title>
  </head>
  <body>
    <h1>Welcome to my website!</h1>
    <p>Click <a href="https://.../page.html">here</a> to visit a page.</p>
  </body>
</html>
```

In this example, the `href` attribute specifies the URL of the page that the hyperlink points to.

<AdsComponent />

## The `target` Attribute

The `target` attribute specifies where the linked document will be opened when the hyperlink is clicked. It can have the following values:

- `_self`: Opens the linked document in the same window or tab.
- `_blank`: Opens the linked document in a new window or tab.
- `_parent`: Opens the linked document in the parent frame.
- `_top`: Opens the linked document in the full body of the window.

Here's an example of a hyperlink with the `target` attribute:

```html title="index.html"
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Hyperlink Example</title>
  </head>
  <body>
    <h1>Welcome to my website!</h1>
    <p>
      Click <a href="https://.../page.html" target="_blank">here</a> to visit a
      page in a new tab
    </p>
  </body>
</html>
```

In this example, the `target` attribute is set to `_blank`, which opens the linked document in a new tab.

<AdsComponent />

## The `rel` Attribute

The `rel` attribute specifies the relationship between the current document and the linked document. It is commonly used to indicate the type of link being used. Some common values for the `rel` attribute include:

- `nofollow`: Instructs search engines not to follow the link.
- `noopener`: Prevents the new page from having access to the window.opener property.
- `noreferrer`: Prevents the Referer header from being sent to the linked page.
- `external`: Indicates that the link points to an external resource.
- `nofollow noreferrer`: A combination of `nofollow` and `noreferrer`.
- `noopener noreferrer`: A combination of `noopener` and `noreferrer`.

Here's an example of a hyperlink with the `rel` attribute:

```html title="index.html"
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Hyperlink Example</title>
  </head>
  <body>
    <h1>Welcome to my website!</h1>
    <p>
      Click <a href="https://.../page.html" rel="noopener noreferrer">here</a>
      to visit a page with security measures.
    </p>
  </body>
</html>
```

In this example, the `rel` attribute is set to `noopener noreferrer`, which adds security measures to the link.

## Conclusion

Link attributes in HTML provide additional functionality and control over hyperlinks in web pages. By using attributes like `href`, `target`, and `rel`, you can customize the behavior, appearance, and security of your links to create a better user experience for your website visitors. Experiment with different attributes to see how they affect the behavior of your hyperlinks and enhance the usability of your web pages.