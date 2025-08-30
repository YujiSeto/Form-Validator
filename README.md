# Form Validator

Form Validator is a simple and customizable JavaScript form validation project. It provides instant feedback for required fields, minimum length, and email format, helping users fill out forms correctly before submission.

## Features

- Easy to integrate with any HTML form
- Validates required fields, minimum length, and email format
- Displays clear error messages next to invalid fields
- Simple, modern UI (customizable with CSS)

## Usage

Add the `data-rules` attribute to your input fields to specify validation rules. Example:

```html
<input type="text" name="username" data-rules="required|min=3">
<input type="email" name="email" data-rules="required|email">
```

Supported rules:
- `required` — field must not be empty
- `min=X` — field must have at least X characters
- `email` — field must be a valid email address

## License

This project is licensed under the MIT License.