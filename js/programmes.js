// programmes.js - handles session scheduling form on programmes.html
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("programme-form");
  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    alert("Session scheduled.");
    form.reset();
  });
});
