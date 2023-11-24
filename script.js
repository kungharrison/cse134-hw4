let form = document.getElementById('contact-form');
let nameCheck = document.getElementById('name-input');
let emailCheck = document.getElementById('email-input');
let phoneCheck = document.getElementById('phone-input');
let messageCheck = document.getElementById('message-input');

let formErrors = [];

nameCheck.addEventListener('input', () => {
    if (!nameCheck.checkValidity()) {
        nameCheck.setCustomValidity('Invalid name');
        formErrors.push({ field: nameCheck.name, error: nameCheck.validationMessage });
    } else {
        nameCheck.setCustomValidity('');
    }
});

emailCheck.addEventListener('input', () => {
    if (!emailCheck.checkValidity()) {
        emailCheck.setCustomValidity('Invalid email');
        formErrors.push({ field: emailCheck.name, error: emailCheck.validationMessage });
    } else {
        emailCheck.setCustomValidity('');
    }
});

phoneCheck.addEventListener('input', () => {
    if (!phoneCheck.checkValidity()) {
        phoneCheck.setCustomValidity('Invalid phone number');
        formErrors.push({ field: phoneCheck.name, error: phoneCheck.validationMessage });
    } else {
        phoneCheck.setCustomValidity('');
    }
});

messageCheck.addEventListener('input', () => {
    if (!messageCheck.checkValidity()) {
        messageCheck.setCustomValidity('Invalid message');
        formErrors.push({ field: messageCheck.name, error: messageCheck.validationMessage });
    } else {
        messageCheck.setCustomValidity('');
    }
});

nameCheck.addEventListener('keypress', (event) => {
    let pattern = new RegExp(nameCheck.pattern);
    if (!pattern.test(event.key)) {
        event.preventDefault();
        nameCheck.classList.add('flash');
        setTimeout(() => nameCheck.classList.remove('flash'), 1000);
        document.getElementById('contact-form-error-output').textContent = 'Illegal character';
        setTimeout(() => document.getElementById('contact-form-error-output').textContent = '', 3000);
        formErrors.push({ field: nameCheck.name, error: 'Illegal character' });
    }
});

emailCheck.addEventListener('input', (event) => {
    let pattern = new RegExp(emailCheck.pattern);
    if (!pattern.test(emailCheck.value)) {
        emailCheck.setCustomValidity('Invalid email address');
        formErrors.push({ field: emailCheck.name, error: 'Invalid email address' });
    } else {
        emailCheck.setCustomValidity('');
    }
});

phoneCheck.addEventListener('keypress', (event) => {
    let preventPattern = new RegExp('[0-9-]');
    if (!preventPattern.test(event.key)) {
        event.preventDefault();
        phoneCheck.classList.add('flash');
        setTimeout(() => phoneCheck.classList.remove('flash'), 1000);
        document.getElementById('contact-form-error-output').textContent = 'Illegal character';
        setTimeout(() => document.getElementById('contact-form-error-output').textContent = '', 3000);
        formErrors.push({ field: phoneCheck.name, error: 'Illegal character' });
    }
});

phoneCheck.addEventListener('input', (event) => {
    let pattern = new RegExp(phoneCheck.pattern);
    if (!pattern.test(phoneCheck.value)) {
        phoneCheck.setCustomValidity('Invalid email address');
        formErrors.push({ field: phoneCheck.name, error: 'Invalid email address' });
    } else {
        phoneCheck.setCustomValidity('');
    }
});

messageCheck.addEventListener('keypress', (event) => {
    let preventPattern = new RegExp('^[^<>&]*$');
    if (!preventPattern.test(event.key)) {
        event.preventDefault();
        messageCheck.classList.add('flash');
        setTimeout(() => messageCheck.classList.remove('flash'), 1000);
        document.getElementById('contact-form-error-output').textContent = 'Illegal character';
        setTimeout(() => document.getElementById('contact-form-error-output').textContent = '', 3000);
        formErrors.push({ field: messageCheck.name, error: 'Illegal character' });
    }
});


messageCheck.addEventListener('input', (event) => {
    let pattern = new RegExp(messageCheck.pattern);
    if (messageCheck.value.length < 10) {
        messageCheck.setCustomValidity('Comment must be over 10 characters');
        formErrors.push({ field: messageCheck.name, error: 'Comment must be over 10 characters' });
    } else {
        messageCheck.setCustomValidity('');
    }
});

let comments = document.getElementById('message-input');
comments.addEventListener('input', () => {
    let remaining = comments.maxLength - comments.value.length;
    document.getElementById('contact-form-info-output-counter').textContent = `${remaining} characters remaining`;
    if (remaining == 0) {
        document.getElementById('contact-form-info-output-counter').classList.remove('warn');
        document.getElementById('contact-form-info-output-counter').classList.add('error');
    }
    else if (remaining < 100) {
        document.getElementById('contact-form-info-output-counter').classList.remove('error');
        document.getElementById('contact-form-info-output-counter').classList.add('warn');
    }
    else {
        document.getElementById('contact-form-info-output-counter').classList.remove('error');
        document.getElementById('contact-form-info-output-counter').classList.remove('warn');
    }
});

form.addEventListener('submit', (event) => {
    let formErrorsField = document.createElement('input');
    formErrorsField.type = 'hidden';
    formErrorsField.name = 'form-errors';
    formErrorsField.value = JSON.stringify(formErrors);
    form.appendChild(formErrorsField);
});

// for light/dark mode
let currentTheme = localStorage.getItem('theme');

// Apply the current theme if it exists
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
}

// Get the toggle button
let themeToggleButton = document.getElementById('toggle-theme');

// Add an event listener to the toggle button
themeToggleButton.addEventListener('click', () => {
    // Get the current theme
    let currentTheme = document.documentElement.getAttribute('data-theme');

    // Toggle the theme
    if (currentTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
});