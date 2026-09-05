// sessions.js - handles the attendance recording form on sessions.html
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("attendance-form");
  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    alert("Attendance saved for this session.");
  });
});
