let form = document.getElementById('contact-form');
let inputs = form.querySelectorAll('input, textarea');
let formErrors = [];

inputs.forEach(input => {
  input.addEventListener('input', () => {
    if (!input.checkValidity()) {
      input.setCustomValidity('Invalid input');
      formErrors.push({field: input.name, error: input.validationMessage});
    } else {
      input.setCustomValidity('');
    }
  });

  input.addEventListener('keypress', (event) => {
    let pattern = new RegExp(input.pattern);
    if (!pattern.test(event.key)) {
      event.preventDefault();
      input.classList.add('flash');
      setTimeout(() => input.classList.remove('flash'), 1000);
      document.getElementById('contact-form-error-output').textContent = 'Illegal character';
      setTimeout(() => document.getElementById('contact-form-error-output').textContent = '', 3000);
    }
  });
});

let comments = document.getElementById('message');
comments.addEventListener('input', () => {
  let remaining = comments.maxLength - comments.value.length;
  document.getElementById('contact-form-info-output').textContent = `${remaining} characters remaining`;
  if (remaining < 10) {
    document.getElementById('contact-form-info-output').classList.add('warn');
  } else {
    document.getElementById('contact-form-info-output').classList.remove('warn');
  }
});

form.addEventListener('submit', (event) => {
  let formErrorsField = document.createElement('input');
  formErrorsField.type = 'hidden';
  formErrorsField.name = 'form-errors';
  formErrorsField.value = JSON.stringify(formErrors);
  form.appendChild(formErrorsField);
});