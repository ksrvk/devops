function validateForm() {
    // Get form elements
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const dob = document.getElementById('dob').value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const course = document.getElementById('course').value;

    // Validate each field
    if (!firstName || !lastName || !email || !phone || !dob || !gender || !course) {
        document.getElementById('error-message').innerText = 'All fields are required!';
        return false;
    }

    // Validate phone number (basic validation)
    const phonePattern = /^[0-9]{10}$/;
    if (!phone.match(phonePattern)) {
        document.getElementById('error-message').innerText = 'Please enter a valid 10-digit phone number.';
        return false;
    }

    // If everything is fine, clear the error message and allow submission
    document.getElementById('error-message').innerText = '';
    alert('Registration successful!');
    return true;
}
