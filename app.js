document.addEventListener('DOMContentLoaded', function () {
    const signupForm = document.getElementById('signup-form');
    const loginForm = document.getElementById('login-form');
  
    if (signupForm) {
      signupForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
  
        localStorage.setItem('user', JSON.stringify({ username, email, password }));
        alert("SignUp Successfully")

        window.location.href = 'login.html';
      });
    }
  
    if (loginForm) {
      loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
  
        const storedUser = JSON.parse(localStorage.getItem('user'));
  
        if (storedUser && storedUser.email === email && storedUser.password === password) {
          localStorage.setItem('isLoggedIn', true);
          alert("Logged in")
          window.location.href = 'dashboard.html';
        } else {
          alert('Incorrect email or password.');
        }
      });
    }
  });
  
  function redirectToLogin() {
    window.location.href = 'login.html';
  }
  
  function redirectToSignup() {
    window.location.href = 'index.html';
  }
  