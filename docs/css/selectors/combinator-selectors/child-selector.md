---
id: child-selector
title: Child Selector
sidebar_label: Child Selector
sidebar_position: 2
tags: [selector, combinator, child]
description: Child selector is used to select an element that is a direct child of another element.
keywords: [child selector, css child selector, css selector, css combinator, css child combinator]
---

In CSS, the child selector is used to select an element that is a direct child of another element. The child selector is represented by the `>` character between two selectors.

<AdsComponent />

## Syntax

The syntax for the child selector is as follows:

```css title="index.css"
selector1 > selector2 {
  /* CSS properties */
}
```

- `selector1`: The parent element.
- `selector2`: The direct child element.
- `CSS properties`: The CSS properties to be applied to the direct child element.

## Example

In the following example, the child selector is used to select all `<span>` elements that are direct children of the `<div>` element:

```css title="index.css"
div > span {
  color: red;
}
```

In the HTML code below, the CSS rule will not apply the color `red` to the text inside the `<span>` element because it is not a direct child of the `<div>` element.

```html title="index.html"
<div>
  <span>This text will not be red.</span>
  <div>
    <span>This text will not be red.</span>
  </div>
</div>
```

The child selector is more specific than the descendant selector and less specific than the adjacent sibling selector.

:::tip Key Points to Remember
- The child selector is represented by the `>` character between two selectors.
- The child selector selects an element that is a direct child of another element.
- The child selector is more specific than the descendant selector and less specific than the adjacent sibling selector.
- The child selector is also known as the child combinator.
- The child selector is useful when you want to target only the direct children of an element.
:::

<AdsComponent />

## Example: Using Child Selector

In the following example, the child selector is used to select all `<span>` elements that are direct children of the `<div>` element:

<Tabs>
 <TabItem value="HTML" lable="index.html">
    ```html showLineNumbers
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Child Selector Example</title>
      <link rel="stylesheet" href="styles.css" />
    </head>
    <body>
      <div>
        <span>This text will be red.</span>
        <div>
          <span>This text will not be red.</span>
        </div>
      </div>
    </body>
    </html>
    ```
    </TabItem>

    <TabItem value="CSS" label="styles.css">
    ```css showLineNumbers
    div > span {
      color: red;
    }
    ```
    </TabItem>
</Tabs>

Now, you can see the output of the above code in the Browser Window like this:

<BrowserWindow url="http://127.0.0.1:5500/index.html" bodyStyle={{ backgroundColor: "#f9f9f9", color: "#000" }}>
    <div>
        <span style={{ color: "red" }}>This text will be red.</span>
        <div>
            <span>This text will not be red.</span>
        </div>
    </div>

</BrowserWindow>

In the above example, the CSS rule will apply the color `red` to the text inside the first `<span>` element because it is a direct child of the `<div>` element. The second `<span>` element is not a direct child of the `<div>` element, so the CSS rule will not apply to it.

<AdsComponent />

## Example: Using Multiple Levels of Children

In the following example, the child selector is used to select all `<span>` elements that are direct children of the `<div>` element, which is a direct child of the `<body>` element:

<Tabs>
 <TabItem value="HTML" lable="index.html">
    ```html showLineNumbers
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Child Selector Example</title>
      <link rel="stylesheet" href="styles.css" />
    </head>
    <body>
      <div>
        <span>This text will be red.</span>
      </div>
    </body>
    </html>
    ```
    </TabItem>

    <TabItem value="CSS" label="styles.css">
    ```css showLineNumbers
    body > div > span {
      color: red;
    }
    ```
    </TabItem>
</Tabs>

Now, you can see the output of the above code in the Browser Window like this:

<BrowserWindow url="http://.../index.html" bodyStyle={{ backgroundColor: "#f9f9f9", color: "#000" }}>
    <div>
        <span style={{ color: "red" }}>This text will be red.</span>
    </div>
</BrowserWindow>

In the above example, the CSS rule will apply the color `red` to the text inside the `<span>` element because it is a direct child of the `<div>` element, which is a direct child of the `<body>` element.

## Related Selectors

- [Descendant Selector](#): The descendant selector selects an element that is a descendant of another element.
- [Adjacent Sibling Selector](#): The adjacent sibling selector selects an element that is immediately preceded by a specified element.
- [General Sibling Selector](#): The general sibling selector selects an element that is preceded by a specified element.
- [Parent Selector](#): The parent selector selects an element that is a direct parent of another element.
- [Ancestor Selector](#): The ancestor selector selects an element that is an ancestor of another element.
- [Universal Selector](#): The universal selector selects all elements in a document.
- 