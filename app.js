// Form validation script
function validateForm(event) {
    event.preventDefault();
    console.log('Form submitted - validating');
    
    const form = event.target;
    const email = form.email;
    const password = form.password;
    
    console.log('Form elements found:', {
        email: email ? 'yes' : 'no',
        password: password ? 'yes' : 'no'
    });

    // Check HTML5 validation
    if (!form.checkValidity()) {
        console.log('HTML5 validation failed');
        return false;
    }

    console.log('Validation successful');
    alert('Login successful! (Demo only)');
    return false;
}

// Log when script loads
console.log('Form validation script loaded');
