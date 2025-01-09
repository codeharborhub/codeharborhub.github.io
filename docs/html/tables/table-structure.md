---
id: table-structure
title: Table Structure in HTML
sidebar_label: Table Structure
sidebar_position: 3
tags: [html, web-development, tables, table-structure]
description: In this tutorial, you will learn about the structure of tables in HTML. Tables are used to display data in rows and columns, making it easier to organize and present information on web pages.
keywords: [html tables, html table structure, html table elements, web development, html tutorial]
---

Tables in HTML are used to display data in rows and columns, making it easier to organize and present information on web pages. Tables consist of multiple elements that define the structure and appearance of the table, including rows, columns, headers, and cells. Understanding the structure of tables is essential for creating well-formatted and accessible tables in HTML.

<AdsComponent />

## What is a Table in HTML?

A table in HTML is a structured grid of rows and columns used to display data in an organized format. Tables are commonly used to present tabular data, such as financial information, product listings, schedules, and more. Each table consists of the following key components:

1. **Table:** The main container that holds all the table elements.
2. **Row (`<tr>`):** A horizontal group of cells that represent a single entry or record in the table.
3. **Header (`<th>`):** A cell that contains header information for a column or row.
4. **Cell (`<td>`):** A data cell that holds content or data within a row and column.
5. **Caption (`<caption>`):** An optional element that provides a title or description for the table.
6. **Column Group (`<colgroup>`):** An element that groups one or more columns for styling or other purposes.
7. **Column (`<col>`):** Defines the properties for a single column within a column group.

## Table Structure Overview

The following diagram illustrates the basic structure of an HTML table:

```plaintext
+-----------------------------------+
|          Table (Optional)         |
+-----------------------------------+
|  Caption (Optional)               |
+-----------------------------------+
|  Column Group (Optional)          |
+-----------------------------------+
|  +-----------------------------+  |
|  |       Header (Optional)     |  |
|  +-----------------------------+  |
|  |  Row 1                      |  |
|  +-----------------------------+  |
|  |  Row 2                      |  |
|  +-----------------------------+  |
|  |  ...                        |  |
|  +-----------------------------+  |
+-----------------------------------+
```

## Table Elements and Attributes

HTML tables are created using a combination of elements and attributes that define the structure and appearance of the table. The most commonly used table elements include:

| Element       | Description                                      | Example                                      |
|---------------|--------------------------------------------------|----------------------------------------------|
| `<table>`     | Defines the main table container                 | `<table></table>`                           |
| `<tr>`        | Represents a row in the table                    | `<tr></tr>`                                  |
| `<th>`        | Represents a header cell in the table             | `<th>Header</th>`                            |
| `<td>`        | Represents a data cell in the table               | `<td>Data</td>`                              |
| `<caption>`   | Provides a title or description for the table     | `<caption>Table Title</caption>`             |
| `<colgroup>`  | Groups columns in the table for styling           | `<colgroup><col></col></colgroup>`           |
| `<col>`       | Defines properties for a single column            | `<col style="background-color: lightblue;">` |

The table elements can be combined to create complex tables with various features such as captions, column groups, and header cells.

<AdsComponent />

## Syntax and Examples

### 1. Creating a Basic Table

To create a simple table in HTML, you use the `<table>`, `<tr>`, `<th>`, and `<td>` elements. Here's an example of a basic table with two rows and two columns:

```html title="index.html"
<table>
  <tr>
    <th>Header 1</th>
    <th>Header 2</th>
  </tr>
  <tr>
    <td>Data 1</td>
    <td>Data 2</td>
  </tr>
</table>
```

<BrowserWindow url="http://.../index.html" bodyStyle={{backgroundColor: "#fff", color: "#333"}}>
  <table>
    <tr>
      <th>Header 1</th>
      <th>Header 2</th>
    </tr>
    <tr>
      <td>Data 1</td>
      <td>Data 2</td>
    </tr>
  </table>
</BrowserWindow>

### 2. Adding a Caption to a Table

You can add a caption to a table using the `<caption>` element. The caption provides a title or description for the table. Here's an example:

```html title="index.html"
<table>
  <caption>Sample Table</caption>
  <tr>
    <th>Header 1</th>
    <th>Header 2</th>
  </tr>
  <tr>
    <td>Data 1</td>
    <td>Data 2</td>
  </tr>
</table>
```

<BrowserWindow url="http://.../index.html" bodyStyle={{backgroundColor: "#fff", color: "#333"}}>
  <table>
    <caption>Sample Table</caption>
    <tr>
      <th>Header 1</th>
      <th>Header 2</th>
    </tr>
    <tr>
      <td>Data 1</td>
      <td>Data 2</td>
    </tr>
  </table>
</BrowserWindow>

<AdsComponent />

### 3. Grouping Columns in a Table

You can group columns in a table using the `<colgroup>` and `<col>` elements. This allows you to apply styling or other properties to multiple columns. Here's an example:

```html title="index.html"
<table>
  <colgroup>
    <col style="background-color: lightblue;">
    <col style="background-color: lightgreen;">
  </colgroup>
  <tr>
    <th>Header 1</th>
    <th>Header 2</th>
  </tr>
  <tr>
    <td>Data 1</td>
    <td>Data 2</td>
  </tr>
</table>
```

<BrowserWindow url="http://.../index.html" bodyStyle={{backgroundColor: "#fff", color: "#333"}}>
  <table>
    <colgroup>
      <col style={{backgroundColor: "lightblue"}} />
      <col style={{backgroundColor: "lightgreen"}} />
    </colgroup>
    <tr>
      <th>Header 1</th>
      <th>Header 2</th>
    </tr>
    <tr>
      <td>Data 1</td>
      <td>Data 2</td>
    </tr>
  </table>
</BrowserWindow>


## Conclusion

In this tutorial, you learned about the structure of tables in HTML and how to create tables using various elements and attributes. Tables are a powerful tool for organizing and presenting data on web pages, and understanding their structure is essential for creating well-formatted and accessible tables. Experiment with different table elements and attributes to create tables that suit your design and content needs.