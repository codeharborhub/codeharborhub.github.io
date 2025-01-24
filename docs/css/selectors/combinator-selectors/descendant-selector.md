---
id: descendant-selector
title: Descendant Selector
sidebar_label: Descendant Selector
sidebar_position: 1
tags: [selector, combinator, descendant]
description: Descendant selector is used to select an element that is a descendant of another element.
keywords: [descendant selector, css descendant selector, css selector, css combinator, css descendant combinator]
---

In CSS, the descendant selector is used to select an element that is a descendant of another element. The descendant selector is represented by a whitespace character (` `) between two selectors.

<AdsComponent />

## Syntax

The syntax for the descendant selector is as follows:

```css title="index.css"
selector1 selector2 {
  /* CSS properties */
}
```

- `selector1`: The ancestor element.
- `selector2`: The descendant element.
- `CSS properties`: The CSS properties to be applied to the descendant element.
- ` `: The whitespace character represents the descendant selector.

## Example

In the following example, the descendant selector is used to select all `<span>` elements that are descendants of the `<div>` element:

```css title="index.css"
div span {
  color: red;
}
```

In the HTML code below, the CSS rule will apply the color `red` to the text inside the `<span>` element because it is a descendant of the `<div>` element.

```html title="index.html"
<div>
  <span>This text will be red.</span>
</div>
```

The descendant selector can be used to select multiple levels of descendants. For example, the following CSS rule will apply the color `blue` to the text inside the `<span>` element that is a descendant of the `<div>` element, which is a descendant of the `<body>` element:

:::tip Key Points to Remember
- The descendant selector is represented by a whitespace character (` `) between two selectors.
- The descendant selector selects an element that is a descendant of another element.
- The descendant selector can be used to select multiple levels of descendants.
- The descendant selector is also known as the space combinator.
- The descendant selector is more specific than the descendant combinator (`>`) and less specific than the child combinator (`~`).

:::

<AdsComponent />

## Example: Using Descendant Selector

In the following example, the descendant selector is used to select all `<span>` elements that are descendants of the `<div>` element:

<Tabs>
 <TabItem value="HTML" lable="index.html">
    ```html showLineNumbers
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Descendant Selector Example</title>
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
    div span {
      color: red;
    }
    ```
    </TabItem>
</Tabs>

Now, you can see the output of the above code in the Browser Window like this:

<BrowserWindow url="http://127.0.0.1:5500/index.html" bodyStyle={{ backgroundColor: "#f9f9f9", color: "#000" }}>
    <div>
      <span style={{ color: "red" }}>This text will be red.</span>
    </div>

</BrowserWindow>

In the above example, the CSS rule will apply the color `red` to the text inside the `<span>` element because it is a descendant of the `<div>` element.

<AdsComponent />

## Example: Using Multiple Levels of Descendants

In the following example, the descendant selector is used to select all `<span>` elements that are descendants of the `<div>` element, which is a descendant of the `<body>` element:

<Tabs>
 <TabItem value="HTML" lable="index.html">
    ```html showLineNumbers
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Descendant Selector Example</title>
      <link rel="stylesheet" href="styles.css" />
    </head>
    <body>
      <div>
        <span>This text will be blue.</span>
      </div>
    </body>
    </html>
    ```

    </TabItem>

    <TabItem value="CSS" label="styles.css">
    ```css showLineNumbers
    body div span {
      color: blue;
    }
    ```
    </TabItem>
</Tabs>

Now, you can see the output of the above code in the Browser Window like this:

<BrowserWindow url="http://.../index.html" bodyStyle={{ backgroundColor: "#f9f9f9", color: "#000" }}>
    <div>
      <span style={{ color: "blue" }}>This text will be blue.</span>
    </div>

</BrowserWindow>


In the above example, the CSS rule will apply the color `blue` to the text inside the `<span>` element because it is a descendant of the `<div>` element, which is a descendant of the `<body>` element.

## Related Selectors

- [Child Selector](#): The child selector selects an element that is a direct child of another element.
- [Adjacent Sibling Selector](#): The adjacent sibling selector selects an element that is immediately preceded by a specified element.
- [General Sibling Selector](#): The general sibling selector selects an element that is preceded by a specified element.
- [Attribute Selector](#): The attribute selector selects elements based on their attributes.
- [Pseudo-Class Selector](#): The pseudo-class selector selects elements based on their state or position.