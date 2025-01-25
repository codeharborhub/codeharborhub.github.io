---
id: pseudo-class-selectors
title: Pseudo-Class Selectors
sidebar_label: Pseudo-Class Selectors
tags: [selector, pseudo-class]
description: Pseudo-class selectors are used to style elements based on their state or position in the document.
keywords:
  [
    pseudo-class selectors,
    css pseudo-class selectors,
    css selectors,
    css pseudo-class,
  ]
sidebar_position: 6
---

In CSS, pseudo-class selectors are used to style elements based on their state or position in the document. Pseudo-class selectors are represented by a colon `:` followed by the name of the pseudo-class. Pseudo-class selectors allow you to style elements based on user interaction, such as hovering over an element, or based on the position of an element in the document tree, such as the first child of a parent element.

<AdsComponent />

## Syntax

The syntax for pseudo-class selectors is as follows:

```css title="index.css"
selector:pseudo-class {
  /* CSS properties */
}
```

- `selector`: The element to which the pseudo-class is applied.
- `pseudo-class`: The pseudo-class to be styled.
- `CSS properties`: The CSS properties to be applied to the pseudo-class.
- `:`: The `:` character represents the pseudo-class selector.
- The `:` character is used to style elements based on their state or position in the document.
- Pseudo-class selectors are used to style elements based on user interaction or the position of an element in the document tree.
- Pseudo-class selectors are less specific than ID selectors and more specific than element selectors.
- Pseudo-class selectors can be combined with other selectors to create compound selectors.

## Example

In the following example, the `:hover` pseudo-class selector is used to change the background color of a button when the user hovers over it:

```css title="index.css"
button:hover {
  background-color: lightblue;
}
```

In the HTML code below, the CSS rule will change the background color of the button to `lightblue` when the user hovers over it:

```html title="index.html"
<button>Hover Over Me</button>
```

:::info Additional Information
- Pseudo-class selectors are represented by a colon `:` followed by the name of the pseudo-class.
- Pseudo-class selectors are used to style elements based on their state or position in the document.
- Pseudo-class selectors are less specific than ID selectors and more specific than element selectors.
- Pseudo-class selectors can be combined with other selectors to create compound selectors.
:::

<AdsComponent />

## List of Pseudo-Class Selectors

Here is a list of commonly used pseudo-class selectors in CSS:

- `:active`: Selects an element that is being activated by the user.
- `:checked`: Selects input elements that are checked.
- `:disabled`: Selects input elements that are disabled.
- `:empty`: Selects elements that have no children.
- `:enabled`: Selects input elements that are enabled.
- `:first-child`: Selects the first child of a parent element.
- `:focus`: Selects an element that has focus.
- `:hover`: Selects an element that is being hovered over by the mouse.
- `:last-child`: Selects the last child of a parent element.
- `:link`: Selects unvisited links.
- `:not()`: Selects elements that do not match a specific selector.
- `:nth-child()`: Selects elements based on their position in the document tree.
- `:nth-last-child()`: Selects elements based on their position in the document tree, counting from the last child.
- `:nth-of-type()`: Selects elements based on their position in the document tree, counting from the first child of a particular type.
- `:nth-last-of-type()`: Selects elements based on their position in the document tree, counting from the last child of a particular type.
- `:only-child`: Selects elements that are the only child of a parent element.
- `:only-of-type`: Selects elements that are the only child of a particular type of a parent element.
- `:target`: Selects the target element of the current URL.
- `:visited`: Selects visited links.
- `:root`: Selects the root element of the document.
- `:lang()`: Selects elements based on the language attribute.
- `:focus-within`: Selects an element that has focus or contains an element that has focus.
- `:read-only`: Selects input elements that are read-only.
- `:read-write`: Selects input elements that are read-write.
- `:default`: Selects the default button of a form.
- `:indeterminate`: Selects input elements that are in an indeterminate state.
- `:placeholder-shown`: Selects input elements that are displaying placeholder text.
- `:in-range`: Selects input elements that are within a specified range.
- `:out-of-range`: Selects input elements that are outside a specified range.
- `:optional`: Selects input elements that are optional.
- `:required`: Selects input elements that are required.
- `:valid`: Selects input elements that are valid.
- `:invalid`: Selects input elements that are invalid.
- `:user-invalid`: Selects input elements that have been marked as invalid by the user.
- `:user-valid`: Selects input elements that have been marked as valid by the user.

## Example: Using Pseudo-Class Selectors

Now, let's see an example of using the `:hover` pseudo-class selector to change the background color of a button when the user hovers over it:

<Tabs>
 <TabItem value="HTML" label="index.html">
```html title="index.html"
<!DOCTYPE html>
<html lang="en">
<head>
  <link rel="stylesheet" href="index.css">
</head>
<body>
  <button>Hover Over Me</button>
</body>
</html>
```
 </TabItem>
 <TabItem value="CSS" label="index.css">
```css title="index.css"
button:hover {
  background-color: lightblue;
}
```
 </TabItem>
</Tabs>

Now, you can see the output of the above code in the Browser Window like this:

<!-- <iframe src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=seti&wt=none&l=css&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=152%25&si=false&es=2x&wm=false&code=button%253Ahover%2520%257B%250A%2520%2520background-color%253A%2520lightblue%253B%250A%257D" style={{transform: "scale(0.9)", width: "100%", height: "250px", border: "0", borderRadius: "4px", overflow:"hidden"}} title="Pseudo-Class Selectors"></iframe> -->

<BrowserWindow url="http://127.0.0.1:5500/index.html" bodyStyle={{ backgroundColor: "#f9f9f9", color: "#000", minHeight: "200px" }}>
    <div>
      <button onMouseOver={(e) => e.target.style.backgroundColor = "lightblue"} onMouseOut={(e) => e.target.style.backgroundColor = ""}
      >Hover Over Me</button>
    </div>
</BrowserWindow>

In this example, the `button:hover` pseudo-class selector is used to change the background color of the button to `lightblue` when the user hovers over it. The button in the HTML code changes its background color to `lightblue` when the user hovers over it.

Pseudo-class selectors are a powerful feature of CSS that allow you to style elements based on their state or position in the document. By using pseudo-class selectors, you can create interactive and dynamic styles for your web pages.

## Related Resources

- [CSS Pseudo-Classes - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes)
- [CSS Pseudo-Classes - W3Schools](https://www.w3schools.com/css/css_pseudo_classes.asp)
- [CSS Selectors - CSS-Tricks](https://css-tricks.com/almanac/selectors/)
- [CSS Selectors Level 4 - W3C Specification](https://www.w3.org/TR/selectors-4/)
- [CSS Selectors - Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors)