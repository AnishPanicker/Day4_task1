$('#loginForm').submit(function(event) {
    // Prevent the default form submission
    event.preventDefault();
    
    // Get the values of the input fields
    const userid = $('#userid').val();
    const password = $('#password').val();
    const message = $('#message');
    
    // Define a regular expression for password validation
    const passwordcheck = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    
    // Check if the password matches the regex
    if (passwordcheck.test(password)) {
        message.text('Login successful!');
        message.css('color', 'green'); 
        window.location.href = 'file:///C:/Users/hp%201/OneDrive/Desktop/clay/clay2/css/index.html';
    } else {
        message.css('color', 'red'); 
        message.text('Password must include uppercase, lowercase letters, special characters, and numbers, and be at least 8 characters long.');
    }
});
