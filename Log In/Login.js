document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const messageDiv = document.getElementById('message');

    fetch('https://swecourseproject.onrender.com/auth/signin', { // Your backend endpoint
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: email, password: password })
    })
    .then(response => response.json())
    .then(data => {
        messageDiv.textContent = data.message;
        if (data.success) {
            console.log(data);
            // Redirect to the desired page after successful login
            localStorage.setItem('firstname', data.data.user.firstname);
            window.location.href = '../Homepage/Homepage.html'; // Example redirect
        } else {
            messageDiv.style.color = "red";
        }
    })
    .catch((error) => {
        console.error('Error:', error);
        messageDiv.textContent = "An error occurred.";
        messageDiv.style.color = "red";
    });
});