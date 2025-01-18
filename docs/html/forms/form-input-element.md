---
id: form-input-element
title: HTML Form Input Element
sidebar_label: Form Input Element
sidebar_position: 2
tags: [html input element, html form input element, html input types, html input text, html input password, html input email]
description: "Learn about the HTML <input> element and its various types such as text, password, email, etc., used to create input fields within a form."
keywords: [html input element, html form input element, html input types, html input text, html input password, html input email]
---

The `<input>` element is used to create input fields within a form. It can be used to create text fields, checkboxes, radio buttons, buttons, and more. The `type` attribute of the `<input>` element specifies the type of input field to be created.

<AdsComponent /> 

## Common Input Types

Here are some common input types:

1. **text:** Creates a single-line text input field.

    For example:
    ```html
    <input type="text" name="username">
    ```

2. **password:** Creates a password input field where the entered text is masked.

    For example:
    ```html
    <input type="password" name="password">
    ```

3. **email:** Creates an email input field that validates the input as an email address.

    For example:
    ```html
    <input type="email" name="email">
    ```

4. **checkbox:** Creates a checkbox input field that allows the user to select multiple options.

    For example:
    ```html
    <input type="checkbox" name="interest" value="coding"> Coding
    <input type="checkbox" name="interest" value="design"> Design
    ```

5. **radio:** Creates a radio button input field that allows the user to select a single option from a list.

    For example:
    ```html
    <input type="radio" name="major" value="cs"> Computer Science
    <input type="radio" name="major" value="eng"> Engineering
    ```

6. **submit:** Creates a submit button that submits the form data to the server.

    For example:
    ```html
    <input type="submit" value="Submit">
    ```

7. **button:** Creates a button that can be used to trigger JavaScript functions.

    For example:
    ```html
    <button type="button" onclick="alert('Hello!')">Click Me</button>
    ```

<AdsComponent /> 

## Additional Input Types

In addition to the common input types mentioned above, there are several other input types that can be used to create different types of input fields. Here are some additional input types:

1. **number:** Creates a numeric input field that allows the user to enter numbers.

    For example:
    ```html
    <input type="number" name="quantity">
    ``` 

2. **date:** Creates a date input field that allows the user to select a date from a calendar.

    For example:
    ```html
    <input type="date" name="dob">
    ```

3. **file:** Creates a file input field that allows the user to upload files.

    For example:
    ```html
    <input type="file" name="avatar">
    ```

4. **color:** Creates a color input field that allows the user to select a color from a color picker.

    For example:
    ```html
    <input type="color" name="color">
    ```

5. **range:** Creates a range input field that allows the user to select a value from a range.

    For example:
    ```html
    <input type="range" name="volume" min="0" max="100">
    ```

6. **time:** Creates a time input field that allows the user to select a time.

    For example:
    ```html
    <input type="time" name="meeting_time">
    ```

7. **url:** Creates a URL input field that validates the input as a URL.

    For example:
    ```html
    <input type="url" name="website">
    ```

8. **search:** Creates a search input field that allows the user to enter search queries.

    For example:
    ```html
    <input type="search" name="query">
    ```

9. **tel:** Creates a telephone input field that validates the input as a phone number.

    For example:
    ```html
    <input type="tel" name="phone">
    ```

10. **hidden:** Creates a hidden input field that is not displayed on the form but is submitted with the form data.

    For example:
    ```html
    <input type="hidden" name="user_id" value="123">
    ```

These input types provide a wide range of options for creating different types of input fields within a form.

<AdsComponent /> 

## Challenge Yourself

### Problem description

Create a form with the following input fields:

1. A text input field for the user's name.
2. An email input field for the user's email address.
3. A password input field for the user's password.
4. A checkbox input field for the user's interests (e.g., coding, design).
5. A radio button input field for the user's major (e.g., Computer Science, Engineering).
6. A submit button to submit the form.
7. A button to clear the form.

### Criteria

1. Use appropriate input types for each input field.
2. Include labels for each input field.
3. Use the `name` attribute to identify each input field.
4. Use the `value` attribute for checkboxes and radio buttons.
5. Use the `required` attribute for required input fields.
6. Use the `form` attribute to associate the input fields with the form.
7. Use the `onclick` event to clear the form when the "Clear" button is clicked.
8. Use the `onsubmit` event to validate the form before submission.
9. Use CSS to style the form elements.

### Solution

You can try to create the form with the specified input fields and functionality. Here's an example solution to get you started:

```html title="index.html" showLineNumbers
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form Challenge</title>
    <style>
        /* General form styling */
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            background-color: #f4f4f4;
        }

        .form-container {
            background: #fff;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            width: 100%;
            max-width: 400px;
        }

        h1 {
            text-align: center;
            color: #333;
        }

        label {
            display: block;
            margin: 10px 0 5px;
            font-weight: bold;
        }

        input[type="text"],
        input[type="email"],
        input[type="password"] {
            width: 100%;
            padding: 10px;
            margin-bottom: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
        }

        .checkbox-group,
        .radio-group {
            margin-bottom: 10px;
        }

        .buttons {
            display: flex;
            justify-content: space-between;
        }

        button {
            padding: 10px 15px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 16px;
        }

        .submit-btn {
            background-color: #28a745;
            color: white;
        }

        .clear-btn {
            background-color: #dc3545;
            color: white;
        }
    </style>
</head>
<body>
    <div class="form-container">
        <h1>Challenge Yourself</h1>
        <form id="challengeForm" onsubmit="return validateForm(event)">
            <!-- Name Field -->
            <label for="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Enter your name" required>

            <!-- Email Field -->
            <label for="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" required>

            <!-- Password Field -->
            <label for="password">Password</label>
            <input type="password" id="password" name="password" placeholder="Enter your password" required>

            <!-- Interests (Checkbox) -->
            <fieldset class="checkbox-group">
                <legend>Select Your Interests</legend>
                <label>
                    <input type="checkbox" name="interests" value="Coding"> Coding
                </label>
                <label>
                    <input type="checkbox" name="interests" value="Design"> Design
                </label>
                <label>
                    <input type="checkbox" name="interests" value="Gaming"> Gaming
                </label>
            </fieldset>

            <!-- Major (Radio Button) -->
            <fieldset class="radio-group">
                <legend>Select Your Major</legend>
                <label>
                    <input type="radio" name="major" value="Computer Science" required> Computer Science
                </label>
                <label>
                    <input type="radio" name="major" value="Engineering" required> Engineering
                </label>
                <label>
                    <input type="radio" name="major" value="Arts" required> Arts
                </label>
            </fieldset>

            <!-- Buttons -->
            <div class="buttons">
                <button type="submit" class="submit-btn">Submit</button>
                <button type="button" class="clear-btn" onclick="clearForm()">Clear</button>
            </div>
        </form>
    </div>

    <script>
        /**
         * Function to validate the form before submission
         * @param {Event} event - The form submission event
         * @returns {boolean} - Returns false to prevent submission if validation fails
         */
        function validateForm(event) {
            const form = document.getElementById('challengeForm');
            const name = form.name.value.trim();
            const email = form.email.value.trim();
            const password = form.password.value.trim();
            const major = form.major.value;

            if (!name || !email || !password || !major) {
                alert('Please fill in all required fields.');
                return false;
            }

            alert('Form submitted successfully!');
            return true;
        }

        /**
         * Function to clear all form fields
         */
        function clearForm() {
            const form = document.getElementById('challengeForm');
            form.reset();
            alert('Form cleared!');
        }
    </script>
</body>
</html>
```

This example demonstrates how you can create a form with various input fields and functionality using HTML and CSS. You can further enhance the form by adding more styling, validation, or custom functionality based on your requirements.

## Conclusion

HTML provides a wide range of input types that you can use to create different types of input fields within a form. By understanding the various input types and their attributes, you can create interactive and user-friendly forms for collecting user input on your website.