document.addEventListener("DOMContentLoaded", function () {
  const registerForm = document.getElementById("registerForm");
  const loginForm = document.getElementById("loginForm");

  // Register Logic
  if (registerForm) {
    registerForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const username = document.getElementById("registerUsername").value.trim();
      const password = document.getElementById("registerPassword").value;

      if (localStorage.getItem(username)) {
        alert("Username already exists. Please choose another.");
      } else {
        localStorage.setItem(username, JSON.stringify({ password }));
        alert("Registration successful!");
        window.location.href = "index.html";
      }
    });
  }

  // Login Logic
  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const username = document.getElementById("loginUsername").value.trim();
      const password = document.getElementById("loginPassword").value;
      const userData = JSON.parse(localStorage.getItem(username));

      if (userData && userData.password === password) {
        localStorage.setItem("loggedInUser", username);
        window.location.href = "dashboard.html";
      } else {
        alert("Invalid username or password!");
      }
    });
  }
});
