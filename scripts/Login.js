document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');
    const loadingBar = document.getElementById('loading');

    if (username === 'admin' && password === 'admin123') {
        errorMessage.style.display = 'none';
        loadingBar.style.display = 'block';
        
        // Simulate an API call
        setTimeout(() => {
            // Redirect to new page after "API call"
            window.location.href = 'Cryptocurrency.html';
        }, 2000); // Simulate 2 seconds API call
    } else {
        // Show error message
        errorMessage.textContent = 'Invalid username or password.';
        errorMessage.style.display = 'block';
    }
});

document.getElementById('togglePassword').addEventListener('click', function() {
    const passwordField = document.getElementById('password');
    const toggleButton = document.getElementById('togglePassword');
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        toggleButton.textContent = 'Hide';
    } else {
        passwordField.type = 'password';
        toggleButton.textContent = 'Show';
    }
});

