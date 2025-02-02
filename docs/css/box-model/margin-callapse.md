---
id: margin-callapse
title: "CSS Margin Collapse"
sidebar_label: "Margin Collapse"
sidebar_position: 8
keywords:
  - css margin collapse
  - margin collapse
  - css box model
  - css box model margin collapse
description: Learn how CSS margin collapse works and how to prevent it in your web page layout.
tags: 
    - css
    - margin collapse
    - css margin collapse
    - css box model
    - css box model margin collapse
---

In CSS, margin collapse is a phenomenon where the vertical margins of adjacent elements collapse into a single margin. This can lead to unexpected spacing between elements and affect the layout of your web page. Understanding how margin collapse works and how to prevent it is essential for creating consistent and visually appealing layouts.

<AdsComponent />

## How Margin Collapse Works

Margin collapse occurs when the top and bottom margins of adjacent elements touch or overlap. In this case, the margins collapse into a single margin that is equal to the larger of the two margins. This behavior is defined in the CSS specification and is a common occurrence in web page layouts.

Here are some key points to keep in mind about margin collapse:

- Margin collapse only occurs between adjacent elements. If there is a non-collapsible element (e.g., an element with a border, padding, or inline content) between two elements, the margins will not collapse.
- Margin collapse only affects vertical margins. Horizontal margins do not collapse.
- Margin collapse does not occur between a parent element and its first or last child element. The margins of the parent and child elements do not collapse in this case.
- Margin collapse does not occur between a parent element and an empty child element. The margins of the parent and empty child elements do not collapse.
- Margin collapse does not occur between floated elements. The margins of floated elements do not collapse with other elements.
- Margin collapse does not occur between absolutely positioned elements. The margins of absolutely positioned elements do not collapse with other elements.
- Margin collapse does not occur between elements with a fixed height. The margins of elements with a fixed height do not collapse with other elements.

## How to Prevent Margin Collapse

To prevent margin collapse and control the spacing between elements in your web page layout, you can use the following techniques:

### 1. Adding Padding or Border

One way to prevent margin collapse is to add padding or a border to the element. By adding padding or a border, you create a non-collapsible space between the element and its adjacent elements, preventing the margins from collapsing.

```css title="index.css"
.element {
  padding: 1px;
}
```

### 2. Using `display: inline-block`

Another way to prevent margin collapse is to use the `display: inline-block` property on the element. When an element is displayed as an inline-block, its margins do not collapse with adjacent elements, providing more control over the spacing between elements. (for example, when you have a `div` element with class `element` and you want to prevent margin collapse)

```css title="index.css"
.element {
  display: inline-block;
}
```

### 3. Using `overflow: hidden`

You can also prevent margin collapse by using the `overflow: hidden` property on the parent element. This property creates a new block formatting context for the parent element, preventing the margins of its child elements from collapsing with other elements.

```css title="index.css"
.parent {
  overflow: hidden;
}
```

By using these techniques, you can prevent margin collapse and control the spacing between elements in your web page layout. This allows you to create more consistent and visually appealing designs by managing the margins of adjacent elements effectively.

<AdsComponent />

:::note Try it yourself
Compare this snippet from [CSS Width and Height](/docs/css/box-model/width-height) to learn how to use the CSS `width` and `height` properties to control the dimensions of elements in your web page layout.
:::

## Example for Margin Collapse

In the following example, margin collapse occurs between two `<div>` elements with top and bottom margins. The margins collapse into a single margin, creating unexpected spacing between the elements:


<Tabs>
  <TabItem value="HTML" label="index.html">
  ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Margin Collapse Example</title>
      <link rel="stylesheet" href="index.css">
    </head>
    <body>
      <div class="element">Element 1</div>
      <div class="element">Element 2</div>
    </body>
    </html>
    ```

    </TabItem>
    <TabItem value="CSS" label="index.css">
    ```css
    .element {
      margin: 20px;
      background-color: lightblue;
      padding: 10px;
    }
    ```
    </TabItem>
</Tabs>

Now, you can see the output of the above code in the Browser Window like this:

<BrowserWindow url="http://127.0.0.1:5500/index.html" bodyStyle={{ backgroundColor: "#fff", color: "#000"}} minHeight="200px">
    <div style={{margin: "20px", backgroundColor: "lightblue", padding: "10px"}}>Element 1</div>
    <div style={{margin: "20px", backgroundColor: "lightblue", padding: "10px"}}>Element 2</div>
</BrowserWindow>

In this example, the top and bottom margins of the two `<div>` elements collapse into a single margin, creating extra spacing between the elements. This can lead to unexpected layout issues and affect the visual appearance of your web page.

By using the techniques mentioned above, you can prevent margin collapse and control the spacing between elements in your web page layout. This allows you to create more consistent and visually appealing designs by managing the margins of adjacent elements effectively.

## Conclusion

Margin collapse is a common phenomenon in CSS that can affect the spacing between elements in your web page layout. By understanding how margin collapse works and how to prevent it, you can create more consistent and visually appealing designs that provide a better user experience.