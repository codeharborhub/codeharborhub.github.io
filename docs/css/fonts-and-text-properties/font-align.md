---
id: font-align
title: "CSS Font Alignment"
sidebar_label: "Font Alignment"
sidebar_position: 8
tags: ["css", "font alignment", "css font alignment", "css text alignment", "css text properties"]
description: Learn how to use the CSS `text-align` property to align text within a container on your web page.
keywords:
  - css text alignment
  - css text align
  - css text alignment property
  - css text alignment values
  - css text alignment examples
---

In CSS, the `text-align` property is used to specify the horizontal alignment of text within a container. It allows you to control the positioning of text elements on your web page, aligning them to the left, right, center, or justified within their containing block.

<AdsComponent />

The `text-align` property accepts several values that determine the alignment of text. By using this property, you can create visually appealing layouts by aligning text elements according to your design requirements.

## Syntax

The `text-align` property in CSS has the following syntax:

```css title="index.css"
selector {
  text-align: value;
}
```

- `selector`: The CSS selector that targets the text element you want to align.
- `value`: A keyword value that specifies the horizontal alignment of the text. The `text-align` property accepts the following values:
  - `left`: Aligns the text to the left.
  - `right`: Aligns the text to the right.
  - `center`: Centers the text horizontally.
  - `justify`: Stretches the lines of text so that each line has equal width, except for the last line.
  - `start`: Aligns the text to the start of the line, based on the text direction.
  - `end`: Aligns the text to the end of the line, based on the text direction.
  - `inherit`: Inherits the text alignment from the parent element.

Using these values, you can control the alignment of text elements within their containing block, ensuring that they are positioned correctly according to your layout requirements.

## Examples

### 1. Aligning Text to the Center

You can use the `text-align` property to center-align text within a container. In the following example, we center-align a heading element:

<Tabs>
  <TabItem value="HTML" label="index.html">
  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Centered Text</title>
    <link rel="stylesheet" href="index.css">
  </head>
  <body>
    <h1 class="centered">Centered Heading</h1>
  </body>
  </html>
  ```
  </TabItem>
  <TabItem value="CSS" label="index.css">
  ```css
  .centered {
    text-align: center;
  }
  ```
    </TabItem>
</Tabs>

<BrowserWindow url="http://127.00.1:5500/index.html" bodyStyle={{ backgroundColor: "#fff", color: "#000", minHeight:"200px"}}>
    <h1 style={{textAlign: "center"}}>Centered Heading</h1>
</BrowserWindow>

:::info Informaton

The `text-align` property can be applied to various text elements, such as headings, paragraphs, and spans, to create different visual styles.

:::

<AdsComponent />

### 2. Justifying Text

You can use the `text-align` property with the `justify` value to justify-align text within a container. In the following example, we justify-align a paragraph element:

<Tabs>
  <TabItem value="HTML" label="index.html">
  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Justified Text</title>
    <link rel="stylesheet" href="index.css">
  </head>
  <body>
    <p class="justified">This is a paragraph with justified text. Justified text stretches the lines so that each line has equal width.</p>
  </body>
  </html>
  ```
  </TabItem>
  <TabItem value="CSS" label="index.css">
  ```css
  .justified {
    text-align: justify;
  }
  ```
  </TabItem>
</Tabs>

<BrowserWindow url="http://127.00.1:5500/index.html" bodyStyle={{ backgroundColor: "#fff", color: "#000", minHeight:"200px"}}>
    <p style={{textAlign: "justify"}}>This is a paragraph with justified text. Justified text stretches the lines so that each line has equal width.</p>
</BrowserWindow>

### 3. Aligning Text to the Right

You can use the `text-align` property with the `right` value to right-align text within a container. In the following example, we right-align a paragraph element:

<Tabs>
  <TabItem value="HTML" label="index.html">
  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Right-Aligned Text</title>
    <link rel="stylesheet" href="index.css">
  </head>
  <body>
    <p class="right-aligned">This is a paragraph with right-aligned text.</p>
  </body>
  </html>
  ```
  </TabItem>
  <TabItem value="CSS" label="index.css">
  ```css
  .right-aligned {
    text-align: right;
  }
  ```
  </TabItem>
</Tabs>

<BrowserWindow url="http://127.00.1:5500/index.html" bodyStyle={{ backgroundColor: "#fff", color: "#000", minHeight:"200px"}}>
    <p style={{textAlign: "right"}}>This is a paragraph with right-aligned text.</p>
</BrowserWindow>

:::note try it yourself

Experiment with different text alignment values to see how they affect the layout of text elements on your web page.

:::

<AdsComponent />

### 4. Aligning Text to the Left

You can use the `text-align` property with the `left` value to left-align text within a container. In the following example, we left-align a paragraph element:

<Tabs>
  <TabItem value="HTML" label="index.html">
  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Left-Aligned Text</title>
    <link rel="stylesheet" href="index.css">
  </head>
  <body>
    <p class="left-aligned">This is a paragraph with left-aligned text.</p>
  </body>
  </html>
  ```
  </TabItem>
  <TabItem value="CSS" label="index.css">
  ```css
  .left-aligned {
    text-align: left;
  }
  ```
  </TabItem>
</Tabs>

<BrowserWindow url="http://127.00.1:5500/index.html" bodyStyle={{ backgroundColor: "#fff", color: "#000", minHeight:"200px"}}>
    <p style={{textAlign: "left"}}>This is a paragraph with left-aligned text.</p>
</BrowserWindow>

### 5. Aligning Text Based on Text Direction

You can use the `text-align` property with the `start` and `end` values to align text based on the text direction. In the following example, we align a paragraph element to the start and end of the line:

<Tabs>
  <TabItem value="HTML" label="index.html">
  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Text Alignment Based on Text Direction</title>
    <link rel="stylesheet" href="index.css">
  </head>
  <body>
    <p class="start-aligned">This is a paragraph with text aligned to the start.</p>
    <p class="end-aligned">This is a paragraph with text aligned to the end.</p>
  </body>
  </html>
  ```
  </TabItem>
  <TabItem value="CSS" label="index.css">
  ```css
  .start-aligned {
    text-align: start;
  }

  .end-aligned {
    text-align: end;
  }
  ```
  </TabItem>
</Tabs>

<BrowserWindow url="http://127.00.1:5500/index.html" bodyStyle={{ backgroundColor: "#fff", color: "#000", minHeight:"200px"}}>
    <>
        <p style={{textAlign: "start"}}>This is a paragraph with text aligned to the start.</p>
        <p style={{textAlign: "end"}}>This is a paragraph with text aligned to the end.</p>
    </>
</BrowserWindow>

:::note try it yourself

Experiment with different text alignment values to see how they affect the layout of text elements on your web page.

:::

### 6. Inheriting Text Alignment

You can use the `text-align` property with the `inherit` value to inherit the text alignment from the parent element. In the following example, we inherit the text alignment for a paragraph element:

<Tabs>
  <TabItem value="HTML" label="index.html">
  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inherited Text Alignment</title>
    <link rel="stylesheet" href="index.css">
  </head>
  <body>
    <div class="parent-element">
      <p class="inherited-text">This text inherits the alignment from the parent.</p>
    </div>
  </body>
  </html>
  ```
  </TabItem>
  <TabItem value="CSS" label="index.css">
  ```css
  .parent-element {
    text-align: center;
  }

  .inherited-text {
    text-align: inherit;
  }
  ```
  </TabItem>
</Tabs>

<BrowserWindow url="http://127.00.1:5500/index.html" bodyStyle={{ backgroundColor: "#fff", color: "#000", minHeight:"200px"}}>
    <div style={{textAlign: "center"}}>
        <p style={{textAlign: "inherit"}}>This text inherits the alignment from the parent.</p>
    </div>
</BrowserWindow>

:::tip Extra Tip

The `text-align` property can be combined with other CSS properties to create complex text layouts and designs. Experiment with different combinations to achieve the desired visual effects.

:::

## Conclusion

The `text-align` property in CSS is a powerful tool for aligning text elements within a container. By using this property with different values, you can control the horizontal alignment of text on your web page, creating visually appealing layouts that enhance the readability and aesthetics of your content. Experiment with the `text-align` property to achieve the desired text alignment for your web projects.