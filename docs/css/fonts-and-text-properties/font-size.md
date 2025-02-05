---
id: font-size
title: "CSS Font Size"
sidebar_label: "Font Size"
sidebar_position: 1
keywords:
  - css font size
  - font size css
  - css text size
  - css font size property
  - css font size example
description: Learn how to set the font size of text using the CSS font-size property.
tags: 
    - css
    - font size
    - css font size
    - css text size
    - css font size property
    - css font size example
---

In CSS, the `font-size` property is used to set the size of text content. You can specify the font size in various units such as pixels, ems, rems, percentages, and more. By adjusting the font size, you can control the visual appearance of text on your web page, making it larger or smaller as needed.

<AdsComponent />

## Syntax

The `font-size` property in CSS has the following syntax:

```css title="index.css"
selector {
  font-size: value;
}
```

- `selector`: The CSS selector that targets the text content you want to apply the font size to.
- `value`: The size of the text content. This can be specified in various units such as pixels (`px`), ems (`em`), rems (`rem`), percentages (`%`), and more.
- The `font-size` property can be applied to any HTML element that contains text content, such as headings, paragraphs, and spans.
- The `font-size` property affects the size of the text content but does not change the size of the element itself. It only adjusts the appearance of the text within the element.

<AdsComponent />

:::info Note
The default font size for most browsers is `16px`. If you do not specify a font size for text content, it will be displayed at the browser's default size.
:::

## Examples

### 1. Setting the Font Size in Pixels

You can set the font size of text content using pixels (`px`) as the unit of measurement. In the following example, we set the font size of a paragraph to `16px`:

<Tabs>
  <TabItem value="HTML" label="index.html">
  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Font Size Example</title>
    <link rel="stylesheet" href="index.css">
  </head>
  <body>
    <p class="text">This is a paragraph with a font size of 16px.</p>
  </body>
  </html>
  ```
  </TabItem>
  <TabItem value="CSS" label="index.css">
  ```css
  .text {
    font-size: 16px;
  }
  ```
  </TabItem>
</Tabs>

<BrowserWindow url="http://127.0.0.1:5500/index.html" bodyStyle={{ backgroundColor: "#fff", color: "#000"}}>
    <p style={{fontSize: "16px"}}>This is a paragraph with a font size of 16px.</p>
</BrowserWindow>

### 2. Setting the Font Size in Em Units

You can also set the font size using ems (`em`) as the unit of measurement. The `em` unit is relative to the font size of the parent element. In the following example, we set the font size of a paragraph to `1.5em`, which is 1.5 times the font size of its parent element:

<Tabs>
  <TabItem value="HTML" label="index.html">
  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Font Size Example</title>
    <link rel="stylesheet" href="index.css">
  </head>
  <body>
    <div class="parent">
      <p class="text">This is a paragraph with a font size of 1.5em.</p>
    </div>
  </body>
  </html>
  ```
  </TabItem>
  <TabItem value="CSS" label="index.css">
  ```css
  .parent {
    font-size: 20px;
  }

  .text {
    font-size: 1.5em;
  }
  ```
  </TabItem>
</Tabs>

<BrowserWindow url="http://127.0.0.1:5500/index.html" bodyStyle={{ backgroundColor: "#fff", color: "#000"}}>
    <div style={{fontSize: "20px"}}>
        <p style={{fontSize: "1.5em"}}>This is a paragraph with a font size of 1.5em.</p>
    </div>
</BrowserWindow>

<AdsComponent />

:::info Note
When using em units, the font size of an element is calculated relative to the font size of its parent element. If the parent element does not have a specified font size, the browser's default font size (`16px`) is used as the reference.
:::

### 3. Setting the Font Size in Percentages

You can specify the font size using percentages (`%`) as a relative unit of measurement. In the following example, we set the font size of a paragraph to `150%`, which is 1.5 times the default font size:

<Tabs>
  <TabItem value="HTML" label="index.html">
  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Font Size Example</title>
    <link rel="stylesheet" href="index.css">
  </head>
  <body>
    <p class="text">This is a paragraph with a font size of 150%.</p>
  </body>
  </html>
  ```
  </TabItem>
  <TabItem value="CSS" label="index.css">
  ```css
  .text {
    font-size: 150%;
  }
  ```
  </TabItem>
</Tabs>

<BrowserWindow url="http://127.00.1:5500/index.html" bodyStyle={{ backgroundColor: "#fff", color: "#000"}}>
    <p style={{fontSize: "150%"}}>This is a paragraph with a font size of 150%.</p>
</BrowserWindow>

### 4. Setting the Font Size Using Rem Units

You can also use rems (`rem`) as a relative unit of measurement for font size. The `rem` unit is relative to the font size of the root element (`<html>`). In the following example, we set the font size of a paragraph to `1.5rem`, which is 1.5 times the font size of the root element:

<Tabs>
  <TabItem value="HTML" label="index.html">
  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Font Size Example</title>
    <link rel="stylesheet" href="index.css">
  </head>
  <body>
    <p class="text">This is a paragraph with a font size of 1.5rem.</p>
  </body>
  </html>
  ```
  </TabItem>
  <TabItem value="CSS" label="index.css">
  ```css
  .text {
    font-size: 1.5rem;
  }
  ```
  </TabItem>
</Tabs>

<BrowserWindow url="http://127.00.1:5500/index.html" bodyStyle={{ backgroundColor: "#fff", color: "#000"}}>
    <p style={{fontSize: "1.5rem"}}>This is a paragraph with a font size of 1.5rem.</p>
</BrowserWindow>

<AdsComponent />

:::info Note
When using rem units, the font size of an element is calculated relative to the font size of the root element (`<html>`). This makes it easier to maintain consistent font sizes across your web page.
:::

### 5. Setting the Font Size Using Keywords

You can also use keywords to specify the font size. Common keywords include `small`, `medium`, `large`, and `x-large`. In the following example, we set the font size of a paragraph to `large`:

<Tabs>
  <TabItem value="HTML" label="index.html">
  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Font Size Example</title>
    <link rel="stylesheet" href="index.css">
  </head>
  <body>
    <p class="text">This is a paragraph with a font size of large.</p>
  </body>
  </html>
  ```
  </TabItem>
  <TabItem value="CSS" label="index.css">
  ```css
  .text {
    font-size: large;
  }
  ```
  </TabItem>
</Tabs>

<BrowserWindow url="http://127.00.1:5500/index.html" bodyStyle={{ backgroundColor: "#fff", color: "#000"}}>
    <p style={{fontSize: "large"}}>This is a paragraph with a font size of large.</p>
</BrowserWindow>

### 6. Setting the Font Size Using Viewport Units

You can also use viewport units (`vw`, `vh`, `vmin`, `vmax`) to specify the font size relative to the size of the viewport. In the following example, we set the font size of a paragraph to `5vw`, which is 5% of the viewport width:

<Tabs>
  <TabItem value="HTML" label="index.html">
  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Font Size Example</title>
    <link rel="stylesheet" href="index.css">
  </head>
  <body>
    <p class="text">This is a paragraph with a font size of 5vw.</p>
  </body>
  </html>
  ```
  </TabItem>
  <TabItem value="CSS" label="index.css">
  ```css
  .text {
    font-size: 5vw;
  }
  ```
  </TabItem>

</Tabs>

<BrowserWindow url="http://127.00.1:5500/index.html" bodyStyle={{ backgroundColor: "#fff", color: "#000"}}>
    <p style={{fontSize: "5vw"}}>This is a paragraph with a font size of 5vw.</p>
</BrowserWindow>

:::info Note
Viewport units (`vw`, `vh`, `vmin`, `vmax`) are relative to the size of the viewport. Using viewport units allows you to create responsive designs where text scales based on the size of the viewport.
:::

<AdsComponent />

### 7. Setting the Font Size Using Absolute Units

You can also use absolute units such as `in` (inches), `cm` (centimeters), `mm` (millimeters), `pt` (points), and `pc` (picas) to specify the font size. In the following example, we set the font size of a paragraph to `12pt`:

<Tabs>
  <TabItem value="HTML" label="index.html">
  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Font Size Example</title>
    <link rel="stylesheet" href="index.css">
  </head>
  <body>
    <p class="text">This is a paragraph with a font size of 12pt.</p>
  </body>
  </html>
  ```
  </TabItem>
  <TabItem value="CSS" label="index.css">
  ```css
  .text {
    font-size: 12pt;
  }
  ```
  </TabItem>
</Tabs>

<BrowserWindow url="http://127.00.1:5500/index.html" bodyStyle={{ backgroundColor: "#fff", color: "#000"}}>
    <p style={{fontSize: "12pt"}}>This is a paragraph with a font size of 12pt.</p>
</BrowserWindow>

### 8. Setting the Font Size Using Custom Units

You can define custom units for font size using CSS variables. In the following example, we define a custom unit called `--custom-size` and set the font size of a paragraph using this custom unit:

<Tabs>
  <TabItem value="HTML" label="index.html">
  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Font Size Example</title>
    <link rel="stylesheet" href="index.css">
  </head>
  <body>
    <p class="text">This is a paragraph with a custom font size.</p>
  </body>
  </html>
  ```
  </TabItem>
  <TabItem value="CSS" label="index.css">
  ```css
  :root {
    --custom-size: 24px;
  }

  .text {
    font-size: var(--custom-size);
  }
  ```
  </TabItem>
</Tabs>

<BrowserWindow url="http://127.00.1:5500/index.html" bodyStyle={{ backgroundColor: "#fff", color: "#000"}}>
    <p style={{fontSize: "24px"}}>This is a paragraph with a custom font size.</p>
</BrowserWindow>

## Conclusion

The `font-size` property in CSS allows you to control the size of text content on your web page. By specifying the font size using different units of measurement, you can adjust the appearance of text to suit your design requirements. Experiment with different font sizes to find the right balance between readability and aesthetics for your web content.