---
id: compound-selectors
title: Compound Selectors
sidebar_label: Compound Selectors
sidebar_position: 4
tags: [selector, compound]
description: Compound selectors are used to select elements based on multiple conditions.
keywords:
  [
    compound selectors,
    css compound selectors,
    css selectors,
    css compound,
  ]
---

In CSS, compound selectors are used to select elements based on multiple conditions. Compound selectors are created by combining two or more simple selectors. Compound selectors allow you to target elements based on multiple conditions, such as the presence of a class and an attribute, or the type of an element and its state.

<AdsComponent />

## Syntax

The syntax for compound selectors is as follows:

```css title="index.css"
selector1.selector2 {
  /* CSS properties */
}
```

- `selector1`: The first simple selector.
- `selector2`: The second simple selector.
- `CSS properties`: The CSS properties to be applied to the compound selector.
- `.`: The `.` character represents the class selector.
- The `.` character is used to select elements based on the presence of a class.
- Compound selectors are created by combining two or more simple selectors.
- Compound selectors allow you to target elements based on multiple conditions.

## Example

In the following example, the compound selector is used to select all `<a>` elements with the class `button`:

```css title="index.css"
a.button {
  color: blue;
  text-decoration: none;
}
```

In the HTML code below, the CSS rule will apply the `color: blue` and `text-decoration: none` properties to all `<a>` elements with the class `button`:

```html title="index.html"
<a href="#" class="button">Click Here</a>
```

:::info Additional Information
- Compound selectors are created by combining two or more simple selectors.
- Compound selectors allow you to target elements based on multiple conditions.
- Compound selectors are useful for styling elements that meet specific criteria.
- Compound selectors can be used to target elements based on their type, class, ID, attribute, or state.
- Compound selectors are more specific than simple selectors and less specific than complex selectors.
:::

<AdsComponent />

## Example: Using Compound Selectors

In the following example, the compound selector is used to select all `<a>` elements with the class `button`:

<Tabs>
 <TabItem value="HTML" label="index.html">
```html title="index.html"
<!DOCTYPE html>
<html lang="en">
<head>
  <link rel="stylesheet" href="index.css">
</head>
<body>
  <a href="#" class="button">Click Here</a>
</body>
</html>
```
</TabItem >
 <TabItem value="CSS" label="index.css">
```css title="index.css"
a.button {
  color: blue;
  text-decoration: none;
}
```

</TabItem >
</Tabs>

Now, you can see the output of the above code in the Browser Window like this:

<BrowserWindow url="http://127.0.0.1:5500/index.html" bodyStyle={{ backgroundColor: "#f9f9f9", color: "#000" }}>
    <div>
      <a href="#" style={{color: "blue", textDecoration: "none"}}>Click Here</a>
    </div>
</BrowserWindow>

In this example, the compound selector `a.button` is used to select all `<a>` elements with the class `button` and apply the `color: blue` and `text-decoration: none` properties to them. The `<a>` element in the HTML code has the class `button`, so the CSS rule is applied to it.

## Summary

Compound selectors are used to select elements based on multiple conditions. They are created by combining two or more simple selectors. Compound selectors allow you to target elements based on specific criteria, such as the presence of a class or an attribute. Compound selectors are more specific than simple selectors and less specific than complex selectors. They are useful for styling elements that meet specific criteria.