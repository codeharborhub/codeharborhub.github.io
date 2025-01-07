---
id: headings
title: Headings in HTML
sidebar_label: Headings
sidebar_position: 1
tags: [html, web-development, headings]
description: In this tutorial, you will learn about headings in HTML. Headings are used to define the structure of a web page and are used to provide a hierarchy of information.
keywords: [html headings, h1 to h6, heading tags, semantic headings, html structure]
---

Headings are an essential part of structuring a web page. In HTML, headings are defined using the `<h1>` to `<h6>` tags, where `<h1>` represents the main heading or title of the page, and `<h2>` to `<h6>` represent subheadings of decreasing importance.

<AdsComponent />

## What are Headings in HTML?

HTML headings are used to define the titles or subtitles of a web page. They represent the hierarchical structure of the content, making it easier for users and search engines to understand the importance and relationships between sections.

### Key Points about HTML Headings:
1. `<h1>` is typically used for the main title or heading of the page.
2. `<h2>` through `<h6>` are used for subheadings, organizing content hierarchically.
3. Search engines and assistive technologies, such as screen readers, rely on headings to interpret the structure of a page.
4. Proper usage of headings improves accessibility, readability, and SEO.

:::info
**Best Practice:** Use only one `<h1>` per page, as it represents the main topic. Subheadings (`<h2>`, `<h3>`, etc.) should follow logically based on the content's structure.
:::

## Syntax of HTML Headings

The general syntax for HTML headings is:

```html
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>
```

Each heading tag (`<h1>` to `<h6>`) renders text in decreasing font size and weight by default. However, the appearance can be customized using CSS.

<Tabs>
  <TabItem value="HTML">
  
  ```html
  <!DOCTYPE html>
  <html>
    <head>
      <title>HTML Headings Example</title>
    </head>
    <body>
      <h1>Main Title (H1)</h1>
      <h2>Subheading (H2)</h2>
      <h3>Sub-subheading (H3)</h3>
      <h4>Fourth-level Heading (H4)</h4>
      <h5>Fifth-level Heading (H5)</h5>
      <h6>Sixth-level Heading (H6)</h6>
    </body>
  </html>
  ```
  
  </TabItem>
  
  <TabItem value="Output">
  <BrowserWindow url="http://127.0.0.1:5500/headings-example.html" bodyStyle={{backgroundColor: "#ffffff", color: "#333"}}>
    <div>
      <h1>Main Title (H1)</h1>
      <h2>Subheading (H2)</h2>
      <h3>Sub-subheading (H3)</h3>
      <h4>Fourth-level Heading (H4)</h4>
      <h5>Fifth-level Heading (H5)</h5>
      <h6>Sixth-level Heading (H6)</h6>
    </div>
  </BrowserWindow>
  </TabItem>
</Tabs>

<AdsComponent />

## Importance of Headings in Web Development

### 1. **Improves Readability**
   - Headings make content easier to skim and understand.
   - They help users quickly find relevant information on the page.

### 2. **Enhances SEO**
   - Search engines prioritize well-structured pages with properly used headings.
   - Use descriptive and keyword-rich headings to boost visibility.

### 3. **Accessibility**
   - Assistive technologies rely on headings to navigate content.
   - A logical hierarchy ensures a better user experience for all users.

## Tips for Using Headings Effectively

1. **Use `<h1>` Only Once**  
   `<h1>` should define the page's main topic. Subsequent sections should use `<h2>` to `<h6>`.

2. **Maintain a Logical Order**  
   Avoid skipping heading levels (e.g., jumping from `<h1>` to `<h4>`).

3. **Use Keywords**  
   Ensure headings are meaningful and reflect the content below them.

4. **Style with CSS**  
   Customize heading styles using CSS instead of relying on default browser styles.

5. **Avoid Overusing Headings**  
   Use headings only where necessary to maintain clarity and focus.

<AdsComponent />

## Example of a Well-Structured Page

Below is an example of how to structure headings for a blog page:

```html
<h1>How to Use HTML Headings Effectively</h1>
<h2>Introduction</h2>
<p>Headings are...</p>
<h2>Benefits of Using Headings</h2>
<h3>1. Improves Readability</h3>
<p>...</p>
<h3>2. Enhances SEO</h3>
<p>...</p>
<h2>Conclusion</h2>
<p>...</p>
```

## Conclusion

Headings play a vital role in organizing content, improving readability, accessibility, and SEO. By understanding their importance and following best practices, you can create well-structured and user-friendly web pages.