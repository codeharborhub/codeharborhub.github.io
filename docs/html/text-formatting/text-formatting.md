---
id: text-formatting
title: Text Formatting in HTML
sidebar_label: Text Formatting
sidebar_position: 3
tags: [html, text formatting, html formatting, html tutorial]
description: Learn how to use HTML tags to format text for emphasis, styling, and semantic structure, with examples and best practices.
keywords: [html text formatting, html formatting tags, html text styles, web development, html tutorial]
---

Text formatting in HTML allows you to emphasize, style, and structure text content on a webpage. HTML provides a variety of tags for bolding, italicizing, underlining, and more. Proper text formatting enhances readability, accessibility, and user engagement.

<AdsComponent />

## What is Text Formatting in HTML?

Text formatting refers to applying specific styles or emphasis to text elements using HTML tags. These tags are semantic, which means they convey meaning to both browsers and users (including screen readers).

### Common Use Cases:
1. **Emphasizing important text.**
2. **Defining document structure (e.g., headings, paragraphs).**
3. **Improving readability through visual cues.**

## Text Formatting Tags Overview

Below are the most commonly used HTML tags for text formatting:

| Tag         | Purpose                              | Example                              |
|-------------|--------------------------------------|--------------------------------------|
| `<b>`       | Bolds text (without semantic meaning)| `<b>Bold Text</b>`                  |
| `<strong>`  | Bolds text with semantic emphasis    | `<strong>Important Text</strong>`   |
| `<i>`       | Italics text (without semantic meaning) | `<i>Italicized Text</i>`         |
| `<em>`      | Italics text with semantic emphasis  | `<em>Emphasized Text</em>`          |
| `<u>`       | Underlines text                     | `<u>Underlined Text</u>`            |
| `<mark>`    | Highlights text                     | `<mark>Highlighted Text</mark>`     |
| `<small>`   | Reduces font size                   | `<small>Smaller Text</small>`       |
| `<del>`     | Strikethrough text (deleted content) | `<del>Deleted Text</del>`           |
| `<ins>`     | Underlined text (inserted content)  | `<ins>Inserted Text</ins>`          |
| `<sup>`     | Superscript text                    | `x<sup>2</sup>`                     |
| `<sub>`     | Subscript text                      | `H<sub>2</sub>O`                    |
| `<code>`    | Displays inline code                | `<code>let x = 5;</code>`           |
| `<pre>`     | Preserves whitespace formatting     | `<pre>Preformatted Text</pre>`      |

## Syntax and Examples

### 1. **Bold Text**
The `<b>` tag makes text bold but does not convey semantic importance.

<div className="flex flex-wrap items-center my-4 gap-4">

```html title="index.html"
<p>This is <b>bold text</b>.</p>
```

<BrowserWindow url="http://.../index.html" bodyStyle={{backgroundColor: "#fff", color: "#333"}}>
  <p>This is <b>bold text</b>.</p>
</BrowserWindow>

</div>

### 2. **Emphasized Text**
The `<strong>` tag conveys importance and renders text in bold.

<div className="flex flex-wrap items-center my-4 gap-4">

```html title="index.html"
<p>This is <strong>important text</strong>.</p>
```

<BrowserWindow url="http://.../index.html" bodyStyle={{backgroundColor: "#fff", color: "#333"}}>
  <p>This is <strong>important text</strong>.</p>
</BrowserWindow>

</div>

### 3. **Italic Text**

The `<i>` tag italicizes text without semantic emphasis.

<div className="flex flex-wrap items-center my-4 gap-4">
  
```html title="index.html"
<p>This is <i>italicized text</i>.</p>
```

<BrowserWindow url="http://.../index.html" bodyStyle={{backgroundColor: "#fff", color: "#333"}}>
  <p>This is <i>italicized text</i>.</p>
</BrowserWindow>

</div>

### 4. **Underlined Text**
The `<u>` tag underlines text.

<div className="flex flex-wrap items-center my-4 gap-4">

```html title="index.html"
<p>This is <u>underlined text</u>.</p>
```

<BrowserWindow url="http://.../index.html" bodyStyle={{backgroundColor: "#fff", color: "#333"}}>
  <p>This is <u>underlined text</u>.</p>
</BrowserWindow>

</div>

### 5. **Highlighted Text**
The `<mark>` tag highlights text.

<div className="flex flex-wrap items-center my-4 gap-4">

```html title="index.html"
<p>This is <mark>highlighted text</mark>.</p>
```

<BrowserWindow url="http://.../index.html" bodyStyle={{backgroundColor: "#fff", color: "#333"}}>
  <p>This is <mark>highlighted text</mark>.</p>
</BrowserWindow>
</div>

### 6. **Strikethrough Text**
The `<del>` tag strikes through text, often used to indicate deleted content.

<div className="flex flex-wrap items-center my-4 gap-4">

```html title="index.html"
<p>This is <del>struck-through text</del>.</p>
```

<BrowserWindow url="http://.../index.html" bodyStyle={{backgroundColor: "#fff", color: "#333"}}>
  <p>This is <del>struck-through text</del>.</p>
</BrowserWindow>

</div>

### 7. **Superscript and Subscript**
Use `<sup>` for superscript and `<sub>` for subscript.

<div className="flex flex-wrap items-center my-4 gap-4">

```html title="index.html"
<p>Superscript: E = mc<sup>2</sup></p>
<p>Subscript: H<sub>2</sub>O</p>
```

<BrowserWindow url="http://.../index.html" bodyStyle={{backgroundColor: "#fff", color: "#333"}}>
  <>
  <p>Superscript: E = mc<sup>2</sup></p>
  <p>Subscript: H<sub>2</sub>O</p>
  </>
</BrowserWindow>

</div>

### 8. **Code and Preformatted Text**
The `<code>` tag displays inline code, while `<pre>` preserves whitespace formatting.

<div className="flex flex-wrap items-center my-4 gap-4">

```html title="index.html"
<p>
  Inline Code: <code>let x = 10;</code>
</p>
<pre>
  Preformatted Text
  Line 2
</pre>
```

<BrowserWindow url="http://.../index.html">
  <>
  <p>Inline Code: <code>let x = 10;</code></p>
  <pre>
    Preformatted Text
    Line 2
  </pre>
  </>
</BrowserWindow>

</div>

<AdsComponent />

## Example: Combining Formatting Tags

```html title="index.html"
<!DOCTYPE html>
<html>
<head>
  <title>HTML Text Formatting</title>
</head>
<body>
  <h1>Text Formatting Example</h1>
  <p><b>This text is bold.</b></p>
  <p><strong>This text is bold and important.</strong></p>
  <p><i>This text is italicized.</i></p>
  <p><em>This text is italicized and emphasized.</em></p>
  <p><u>This text is underlined.</u></p>
  <p><mark>This text is highlighted.</mark></p>
  <p>Superscript: x<sup>2</sup></p>
  <p>Subscript: H<sub>2</sub>O</p>
  <p>Inline Code: <code>let x = 5;</code></p>
</body>
</html>
```

<BrowserWindow url="http://127.0.0.1:5500/index.html" bodyStyle={{backgroundColor: "#fff", color: "#333"}}>
  <>
  <h1>Text Formatting Example</h1>
  <p><b>This text is bold.</b></p>
  <p><strong>This text is bold and important.</strong></p>
  <p><i>This text is italicized.</i></p>
  <p><em>This text is italicized and emphasized.</em></p>
  <p><u>This text is underlined.</u></p>
  <p><mark>This text is highlighted.</mark></p>
  <p>Superscript: x<sup>2</sup></p>
  <p>Subscript: H<sub>2</sub>O</p>
  <p>Inline Code: <code>let x = 5;</code></p>
  </>
</BrowserWindow>

## Styling Formatted Text with CSS

HTML formatting tags can be styled further using CSS. For example:

```html title="index.html"
<!DOCTYPE html>
<html>
<head>
  <style>
    p {
      font-family: Arial, sans-serif;
    }
    mark {
      background-color: yellow;
      font-weight: bold;
    }
    code {
      font-family: "Courier New", monospace;
      background-color: #f4f4f4;
      padding: 2px 4px;
    }
  </style>
</head>
<body>
  <h1>Formatted Text with CSS</h1>
  <p>This is <mark>highlighted</mark> and <code>inline code</code>.</p>
</body>
</html>
```

<BrowserWindow url="http://127.0.0.1:5500/index.html" bodyStyle={{backgroundColor: "#fff", color: "#333"}}>
  <>
  <h1>Formatted Text with CSS</h1>
  <p style={{fontFamily: "Arial, sans-serif"}}>This is <mark style={{fontWeight: "bold"}}>highlighted</mark> and <code style={{fontFamily: `"Courier New", monospace`,
      backgroundColor: "#f4f4f4", padding: "2px 4px"}}>inline code</code>.</p>
  </>
</BrowserWindow>


## Conclusion

Text formatting in HTML enhances the readability and structure of your content. By using semantic tags like `<strong>`, `<em>`, and `<mark>`, you can make your content more accessible and engaging. Combined with CSS, text formatting allows for visually appealing designs tailored to your audience's needs.