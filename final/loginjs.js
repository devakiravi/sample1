/ Add JavaScript code here
const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', (e) => {
	e.preventDefault();
	const username = document.getElementById('username').value;
	const password = document.getElementById('password').value;
	// TO DO: Add authentication logic here
	console.log(`Username: ${username}, Password: ${password}`);
	// Redirect to home page after successful login
	window.location.href = 'index.html';
});