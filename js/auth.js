// auth.js - handles the login form on index.html
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("login-form");
  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!username || !password) {
      alert("Please enter both a username and password.");
      return;
    }

    // Front-end prototype only: real authentication happens against
    // the User table once the ASP.NET Core backend is connected.
    window.location.href = "dashboard.html";
  });
});
