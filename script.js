document.getElementById('contact-form').addEventListener('submit', function(event) {
    // Perform your form validation here
    var isValid = true; // Replace with your actual validation logic

    var output = document.getElementById('contact-form-output');
    if (isValid) {

        output.innerHTML = 'Form submitted successfully!';
        output.style.color = 'green';
    } else {
        event.preventDefault(); // Prevent the form from submitting normally
        output.innerHTML = 'There was an error submitting the form.';
        output.style.color = 'red';
    }
});