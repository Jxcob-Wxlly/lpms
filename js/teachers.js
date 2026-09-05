// teachers.js - handles the teacher registration form on teachers.html
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("teacher-form");
  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    alert("Teacher registered.");
    form.reset();
  });
});
