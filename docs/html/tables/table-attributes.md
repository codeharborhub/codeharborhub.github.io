---
id: table-attributes
title: Table Attributes in HTML
sidebar_label: Table Attributes
sidebar_position: 4
tags: [html, web-development, table-attributes, tables]
description: "In this tutorial, you will learn about table attributes in HTML. Table attributes define the appearance, behavior, and structure of tables on web pages."
keywords:
  [
    html table attributes,
    html table properties,
    html table attributes list,
    web development,
    html tutorial,
  ]
---

Tables in HTML can be customized and styled using various attributes that define the appearance, behavior, and structure of the table. By using these attributes, you can control the alignment, borders, spacing, and other properties of the table to create visually appealing and well-organized tables on your web pages.

<AdsComponent />

## Common Table Attributes

The following table lists some of the most commonly used attributes for customizing HTML tables:

| Attribute          | Description                                                     | Example                                      |
| ------------------ | --------------------------------------------------------------- | -------------------------------------------- |
| `border`           | Specifies the width of the border around the table.             | `<table border="1"></table>`                 |
| `cellpadding`      | Defines the space between the cell content and the cell border. | `<table cellpadding="5"></table>`            |
| `cellspacing`      | Sets the space between cells in the table.                      | `<table cellspacing="10"></table>`           |
| `width`            | Specifies the width of the table.                               | `<table width="100%"></table>`               |
| `height`           | Sets the height of the table.                                   | `<table height="200"></table>`               |
| `align`            | Aligns the table with respect to the surrounding content.       | `<table align="center"></table>`             |
| `bgcolor`          | Sets the background color of the table.                         | `<table bgcolor="#f0f0f0"></table>`          |
| `bordercolor`      | Defines the color of the table border.                          | `<table bordercolor="#333333"></table>`      |
| `bordercolordark`  | Sets the color of the dark border around the table.             | `<table bordercolordark="#000000"></table>`  |
| `bordercolorlight` | Sets the color of the light border around the table.            | `<table bordercolorlight="#ffffff"></table>` |

## Example: Using Table Attributes

Here is an example that demonstrates how to use table attributes to customize the appearance of an HTML table:

```html title="table-attributes-example.html"
<table border="1" cellpadding="10" cellspacing="5" width="50%" height="200" align="center" bgcolor="#f0f0f0" bordercolor="#333333" bordercolordark="#000000" bordercolorlight="#ffffff">
  <tr>
    <td>Row 1, Cell 1</td>
    <td>Row 1, Cell 2</td>
  </tr>
  <tr>
    <td>Row 2, Cell 1</td>
    <td>Row 2, Cell 2</td>
  </tr>
</table>
```

In the example above, we have applied various attributes to the `<table>` element to customize the appearance of the table. The resulting table will have a border width of `1`, cell padding of `10`, cell spacing of `5`, a width of `50%`, a height of `200`, aligned to the center, with a background color of `#f0f0f0`, and border colors defined.

By using these attributes, you can create visually appealing tables that suit your design requirements and enhance the presentation of tabular data on your web pages.


```html title="table-attributes-example.html"
<table border="1" cellpadding="10" cellspacing="5" width="50%" height="200" align="center" bgcolor="#f0f0f0" bordercolor="#333333" bordercolordark="#000000" bordercolorlight="#ffffff">
  <tr>
    <td>Row 1, Cell 1</td>
    <td>Row 1, Cell 2</td>
  </tr>
  <tr>
    <td>Row 2, Cell 1</td>
    <td>Row 2, Cell 2</td>
  </tr>
</table>
```

In the example above, we have applied various attributes to the `<table>` element to customize the appearance of the table. The resulting table will have a border width of `1`, cell padding of `10`, cell spacing of `5`, a width of `50%`, a height of `200`, aligned to the center, with a background color of `#f0f0f0`, and border colors defined.

By using these attributes, you can create visually appealing tables that suit your design requirements and enhance the presentation of tabular data on your web pages.

<BrowserWindow url="http://.../table-attributes-example.html" bodyStyle={{backgroundColor: "#fff", color: "#333"}} >

<table border="1" cellpadding="10" cellspacing="5" width="50%" height="200" align="center" bgcolor="#f0f0f0" bordercolor="#333333" bordercolordark="#000000" bordercolorlight="#ffffff">
  <tr>
    <td>Row 1, Cell 1</td>
    <td>Row 1, Cell 2</td>
  </tr>
  <tr>
    <td>Row 2, Cell 1</td>
    <td>Row 2, Cell 2</td>
  </tr>
</table>

</BrowserWindow>

## Conclusion

In this tutorial, you learned about the common table attributes in HTML that can be used to customize the appearance and structure of tables on web pages. By applying these attributes, you can control the border width, cell padding, cell spacing, width, height, alignment, and background color of tables to create visually appealing and well-organized tables that enhance the presentation of tabular data. Experiment with different attributes to create tables that suit your design requirements and improve the user experience on your website.